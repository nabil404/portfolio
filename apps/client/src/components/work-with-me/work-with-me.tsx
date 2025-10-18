import { Background } from '@/components/common/background'
import { TitleWithSeparator } from '@/components/common/title-with-separator'

export const WorkWithMe = () => {
  return (
    <section
      id="contact"
      className="container mx-auto h-[1000px] md:h-[800px] px-4 relative overflow-hidden"
    >
      <Background />

      <div className="flex flex-col h-full items-center justify-center">
        <TitleWithSeparator title="Want to Work With Me?" />
        <p className="text-2xl text-gray-300 mb-12 text-center leading-relaxed">
          Let&apos;s collaborate to bring your ideas to life. Whether it&apos;s a complex web
          application, mobile app, or innovative AI solution, I&apos;m here to help you succeed.
        </p>
        <div className="mx-auto text-center">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-gradient-to-r from-accent to-cyan-400 px-12 py-4 rounded-lg font-semibold text-primary hover:scale-105 transition-transform glow-effect">
              <i className="fa-solid fa-envelope mr-3"></i>
              Start a Project
            </button>
            <button className="border-2 border-secondary px-12 py-4 rounded-lg font-semibold text-secondary hover:bg-secondary hover:text-white transition-colors pulse-glow">
              <i className="fa-solid fa-calendar mr-3"></i>
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
