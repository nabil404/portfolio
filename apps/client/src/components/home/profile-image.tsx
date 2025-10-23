import Image from 'next/image'
import { getGlobalData, getStrapiMediaUrl } from '@/lib/strapi'

export const ProfileImage = async () => {
  const response = await getGlobalData()
  const imageUrl = getStrapiMediaUrl(response.data.heroImage.url)
  return (
    <div className="relative">
      <div className="md:w-80 md:h-80 w-64 h-64 rounded-full bg-gradient-to-br from-accent via-secondary to-purple-500 p-2 floating glow-effect ml-auto">
        <Image
          height={500}
          width={500}
          loading="lazy"
          className="w-full h-full rounded-full object-cover"
          src={imageUrl}
          alt="Nabil Md Shahid"
        />
      </div>
    </div>
  )
}
