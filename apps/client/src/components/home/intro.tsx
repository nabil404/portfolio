import { ViewProjectsButton } from '@/components/home/view-projects-button'
import { DownloadCvButton } from '@/components/home/download-cv-button'

export const Intro = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-6xl font-black leading-tight">
        <div className="w-fit">Software</div>
        <div className="w-fit gradient-text">Engineer</div>
      </h2>
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
