import { Background } from '@/components/common/background'
import { ProfileImage } from '@/components/home/profile-image'
import { Intro } from '@/components/home/intro'

export const Home = () => {
  return (
    <section
      id="home"
      className="container mx-auto h-[950px] md:h-[800px] relative overflow-x-hidden md:overflow-x-visible"
    >
      <Background />
      <div className="mx-auto px-8 h-full flex items-center relative z-10">
        <div className="flex flex-col md:flex-row-reverse gap-16 items-center w-full">
          <ProfileImage />
          <Intro />
        </div>
      </div>
    </section>
  )
}
