import { ViewProjectsButton } from '@/components/home/view-projects-button'
import { DownloadCvButton } from '@/components/home/download-cv-button'
import { getGlobalData } from '@/lib/strapi'

export const Intro = async () => {
  const response = await getGlobalData()

  return (
    <div className="space-y-8">
      <div className="text-6xl font-black leading-tight">
        <span className="block w-fit">{response.data.designation1}</span>
        <span className="block w-fit gradient-text">{response.data.designation2}</span>
      </div>
      <p className="text-xl text-gray-300 leading-relaxed">{response.data.tagline}</p>
      <div className="flex space-x-6">
        <ViewProjectsButton />
        <DownloadCvButton url={response.data.resume.url} filename={response.data.resume.name} />
      </div>
    </div>
  )
}
