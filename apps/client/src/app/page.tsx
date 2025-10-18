import { Home } from '@/components/home/home'
import { AboutMe } from '@/components/about-me/about-me'
import { TechnicalSkills } from '@/components/technical-skills/technical-skills'
import { Experience } from '@/components/experience/experience'
import { FeaturedProjects } from '@/components/featured-projects/featured-projects'

export default function LandingPage() {
  return (
    <>
      <Home />
      <AboutMe />
      <TechnicalSkills />
      <Experience />
      <FeaturedProjects />
    </>
  )
}
