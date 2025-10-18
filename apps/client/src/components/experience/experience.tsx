import { Background } from '@/components/common/background'
import { TitleWithSeparator } from '@/components/common/title-with-separator'

export const Experience = () => {
  return (
    <section
      id="experience"
      className="container mx-auto h-[2200px] xs:h-[2000px] sm:h-[1400px] md:h-[1200px] lg:h-[1000px] px-4 relative overflow-hidden"
    >
      <Background />
      <div className="flex flex-col h-full items-center justify-center">
        <TitleWithSeparator title="Work Experience" />
        <div className="mx-auto">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full timeline-line"></div>
            <div id="experience-1" className="relative mb-16">
              <div className="flex items-center justify-between">
                <div className="w-5/12 pr-8">
                  <div className="experience-card glass-effect p-8 rounded-xl">
                    <div className="flex items-center mb-4">
                      <i className="fa-solid fa-building text-2xl text-accent mr-4"></i>
                      <div>
                        <h3 className="text-2xl font-bold text-white">Senior Software Engineer</h3>
                        <p className="text-accent font-semibold">TechCorp Solutions</p>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      Led a team of 5 developers in building scalable web applications. Implemented
                      microservices architecture and improved system performance by 40%.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">
                        React
                      </span>
                      <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">
                        Node.js
                      </span>
                      <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">
                        AWS
                      </span>
                      <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">
                        Docker
                      </span>
                    </div>
                  </div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-accent rounded-full timeline-dot flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>

                <div className="w-5/12 pl-8">
                  <div className="text-right">
                    <div className="text-2xl font-bold text-secondary">2022 - Present</div>
                    <div className="text-gray-400">San Francisco, CA</div>
                  </div>
                </div>
              </div>
            </div>

            <div id="experience-2" className="relative mb-16">
              <div className="flex items-center justify-between">
                <div className="w-5/12 pr-8">
                  <div className="text-left">
                    <div className="text-2xl font-bold text-secondary">2020 - 2022</div>
                    <div className="text-gray-400">New York, NY</div>
                  </div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-secondary rounded-full timeline-dot flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>

                <div className="w-5/12 pl-8">
                  <div className="experience-card glass-effect p-8 rounded-xl">
                    <div className="flex items-center mb-4">
                      <i className="fa-solid fa-rocket text-2xl text-secondary mr-4"></i>
                      <div>
                        <h3 className="text-2xl font-bold text-white">Full Stack Developer</h3>
                        <p className="text-secondary font-semibold">InnovateLab Inc</p>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      Developed and maintained multiple client projects using modern frameworks.
                      Collaborated with design teams to create pixel-perfect user interfaces.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm">
                        Vue.js
                      </span>
                      <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm">
                        Python
                      </span>
                      <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm">
                        PostgreSQL
                      </span>
                      <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm">
                        Redis
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
