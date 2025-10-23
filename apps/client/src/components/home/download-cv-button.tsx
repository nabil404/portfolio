'use client'

import { Button } from '@/components/ui/button'
import { useDownload } from '@/hooks/useDownload'
import { getStrapiMediaUrl } from '@/lib/strapi'

export interface DownloadCvButtonProps {
  url: string
  filename: string
}
export const DownloadCvButton = ({ url, filename }: DownloadCvButtonProps) => {
  const { download } = useDownload()

  const handleDownload = () => {
    download({ url: getStrapiMediaUrl(url), filename })
  }

  return (
    <Button
      size="lg"
      variant="outline"
      className="px-8 py-6 border-2 !border-secondary font-semibold hover:!bg-secondary hover:text-white transition-colors pulse-glow"
      onClick={handleDownload}
    >
      Download CV
    </Button>
  )
}
