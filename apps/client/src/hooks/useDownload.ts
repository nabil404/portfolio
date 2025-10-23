'use client'

import { useState, useCallback } from 'react'
import { downloadFile, type DownloadOptions } from '@/lib/download-utils'

interface UseDownloadReturn {
  download: (
    options: Omit<DownloadOptions, 'onProgress' | 'onSuccess' | 'onError'>,
  ) => Promise<void>
  downloading: boolean
  progress: number
  error: Error | null
  reset: () => void
}

export function useDownload(): UseDownloadReturn {
  const [downloading, setDownloading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState<Error | null>(null)

  const download = useCallback(
    async (options: Omit<DownloadOptions, 'onProgress' | 'onSuccess' | 'onError'>) => {
      setDownloading(true)
      setProgress(0)
      setError(null)

      try {
        await downloadFile({
          ...options,
          onProgress: setProgress,
          onSuccess: () => {
            setTimeout(() => {
              setDownloading(false)
              setProgress(0)
            }, 1000)
          },
          onError: (err) => {
            setError(err)
            setDownloading(false)
            setProgress(0)
          },
        })
      } catch (err) {
        const error = err instanceof Error ? err : new Error('Download failed')
        setError(error)
        setDownloading(false)
        setProgress(0)
      }
    },
    [],
  )

  const reset = useCallback(() => {
    setDownloading(false)
    setProgress(0)
    setError(null)
  }, [])

  return {
    download,
    downloading,
    progress,
    error,
    reset,
  }
}
