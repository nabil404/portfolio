import { ViewProjectsButton } from '@/components/home/view-projects-button'
import { DownloadCvButton } from '@/components/home/download-cv-button'

export const Intro = () => {
  return (
    <div className="space-y-8">
      <div className="text-6xl font-black leading-tight">
        <span className="block w-fit">Software</span>
        <span className="block w-fit gradient-text">Engineer</span>
      </div>
      <p className="text-xl text-gray-300 leading-relaxed">
        Crafting innovative solutions with clean code and cutting-edge technology. Passionate about
        building scalable applications that make a difference.
      </p>
      <div className="flex space-x-6">
        <ViewProjectsButton />
        <DownloadCvButton />
      </div>
    </div>
  )
}
