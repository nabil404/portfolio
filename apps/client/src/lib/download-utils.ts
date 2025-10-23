export interface DownloadOptions {
  url: string
  filename?: string
  onProgress?: (progress: number) => void
  onSuccess?: () => void
  onError?: (error: Error) => void
}

export async function downloadFile({
  url,
  filename,
  onProgress,
  onSuccess,
  onError,
}: DownloadOptions): Promise<void> {
  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`Failed to download: ${response.statusText}`)
    }

    // Get content length for progress tracking
    const contentLength = response.headers.get('content-length')
    const total = contentLength ? parseInt(contentLength, 10) : 0

    const reader = response.body?.getReader()
    if (!reader) {
      throw new Error('Response body is not readable')
    }

    const chunks: Uint8Array<ArrayBuffer>[] = []
    let receivedLength = 0

    // Read the response stream
    while (true) {
      const { done, value } = await reader.read()
      if (done) break
      chunks.push(value)
      receivedLength += value.length
      // Report progress
      if (total && onProgress) {
        const progress = Math.round((receivedLength / total) * 100)
        onProgress(progress)
      }
    }

    // Combine chunks into a single blob
    const blob = new Blob(chunks)

    // Determine filename
    let finalFilename = filename
    if (!finalFilename) {
      // Try to get filename from Content-Disposition header
      const disposition = response.headers.get('content-disposition')
      if (disposition) {
        const filenameMatch = disposition.match(/filename="?(.+)"?/i)
        if (filenameMatch) {
          finalFilename = filenameMatch[1]
        }
      }

      // Fallback to URL basename
      if (!finalFilename) {
        finalFilename = url.split('/').pop() || 'download'
      }
    }

    // Create download link and trigger
    const blobUrl = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = blobUrl
    link.download = finalFilename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    // Cleanup
    window.URL.revokeObjectURL(blobUrl)

    if (onSuccess) {
      onSuccess()
    }
  } catch (error) {
    const err = error instanceof Error ? error : new Error('Download failed')
    if (onError) {
      onError(err)
    } else {
      throw err
    }
  }
}
