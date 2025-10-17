import { Button } from '@/components/ui/button'

export const DownloadCvButton = () => {
  return (
    <Button
      size="lg"
      variant="outline"
      className="px-8 py-6 border-2 !border-secondary font-semibold hover:!bg-secondary hover:text-white transition-colors pulse-glow"
    >
      Download CV
    </Button>
  )
}
