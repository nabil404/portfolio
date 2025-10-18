import { Background } from '@/components/common/background'
import { TitleWithSeparator } from '@/components/common/title-with-separator'
import { Lightbulb, Rocket, Trophy } from 'lucide-react'
import { Users } from 'lucide-react'

export const AboutMe = () => {
  return (
    <section
      id="about"
      className="container mx-auto h-[950px] md:h-[900px] px-4 relative overflow-hidden"
    >
      <TitleWithSeparator title="About Me" />
      <div className="mx-auto relative">
        <Background />
        <div className="mx-auto">
          <div className="grid grid-cols-2 gap-8 mb-12">
            <div className="transition-all duration-400 ease-in-out hover:-translate-y-2 hover:scale-[1.02] glass-effect p-6 rounded-2xl border border-primary/20">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-red-400 rounded-lg flex items-center justify-center mr-4">
                  <Lightbulb className="text-white text-lg" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Innovation</h3>
                  <p className="text-primary text-sm">Creative Problem Solving</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                I thrive on turning complex challenges into elegant solutions through innovative
                thinking and cutting-edge technology.
              </p>
            </div>

            <div className="hover-card glass-effect p-6 rounded-2xl border border-secondary/20">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-orange-400 rounded-lg flex items-center justify-center mr-4">
                  <Users className="text-white text-lg" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Collaboration</h3>
                  <p className="text-secondary text-sm">Team Leadership</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Leading cross-functional teams and mentoring junior developers to achieve
                exceptional results together.
              </p>
            </div>

            <div className="hover-card glass-effect p-6 rounded-2xl border border-purple-400/20">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                  <Rocket className="text-white text-lg" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Performance</h3>
                  <p className="text-purple-400 text-sm">Optimization Expert</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Specializing in high-performance applications that scale efficiently and deliver
                exceptional user experiences.
              </p>
            </div>

            <div className="hover-card glass-effect p-6 rounded-2xl border border-green-400/20">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-400 rounded-lg flex items-center justify-center mr-4">
                  <Trophy className="text-white text-lg" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Excellence</h3>
                  <p className="text-green-400 text-sm">Quality Focused</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Committed to delivering high-quality code with comprehensive testing and best
                practices implementation.
              </p>
            </div>
          </div>
          <div className="glass-effect p-8 rounded-2xl border border-accent/20">
            <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              With over 5 years of experience in software development, I&apos;ve evolved from a
              curious computer science student into a seasoned engineer who specializes in creating
              robust, scalable applications. My passion lies in the intersection of innovative
              technology and practical problem-solving.
            </p>
            <div className="grid grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-black text-accent mb-2">50+</div>
                <div className="text-gray-400 text-sm">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-secondary mb-2">5+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-purple-400 mb-2">20+</div>
                <div className="text-gray-400 text-sm">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-green-400 mb-2">100%</div>
                <div className="text-gray-400 text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
