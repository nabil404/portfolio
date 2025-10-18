import { Background } from '@/components/common/background'
import { TitleWithSeparator } from '@/components/common/title-with-separator'

export const TechnicalSkills = () => {
  return (
    <section
      id="skills"
      className="container mx-auto h-[950px] md:h-[900px] px-4 relative overflow-hidden"
    >
      <Background />
      <div className="flex flex-col h-full items-center justify-center">
        <TitleWithSeparator title="Technical Skills" />
        <div className="mx-auto relative ">
          <div className="grid grid-cols-3 gap-12">
            <div
              id="frontend-skills"
              className="glass-effect p-8 rounded-2xl border border-accent/20"
            >
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-cyan-400 rounded-xl flex items-center justify-center mr-4">
                  <i className="fa-brands fa-react text-white text-xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-white">Frontend</h3>
              </div>
              <div className="space-y-8">
                <div className="skill-item">
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">React</span>
                    <span className="text-accent font-bold">95%</span>
                  </div>
                  <div className="bg-gray-700 rounded-full h-3">
                    <div
                      className="progress-bar bg-gradient-to-r from-accent to-cyan-400 h-3 rounded-full progress-animate"
                      style={{ width: '95%' }}
                    ></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">Vue.js</span>
                    <span className="text-accent font-bold">85%</span>
                  </div>
                  <div className="bg-gray-700 rounded-full h-3">
                    <div
                      className="progress-bar bg-gradient-to-r from-accent to-cyan-400 h-3 rounded-full progress-animate"
                      style={{ width: '95%' }}
                    ></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">TypeScript</span>
                    <span className="text-accent font-bold">90%</span>
                  </div>
                  <div className="bg-gray-700 rounded-full h-3">
                    <div
                      className="progress-bar bg-gradient-to-r from-accent to-cyan-400 h-3 rounded-full progress-animate"
                      style={{ width: '95%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="backend-skills"
              className="glass-effect p-8 rounded-2xl border border-secondary/20"
            >
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-orange-400 rounded-xl flex items-center justify-center mr-4">
                  <i className="fa-solid fa-server text-white text-xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-white">Backend</h3>
              </div>
              <div className="space-y-8">
                <div className="skill-item">
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">Node.js</span>
                    <span className="text-secondary font-bold">90%</span>
                  </div>
                  <div className="bg-gray-700 rounded-full h-3">
                    <div
                      className="progress-bar bg-gradient-to-r from-secondary to-orange-400 h-3 rounded-full progress-animate"
                      style={{ width: '95%' }}
                    ></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">Python</span>
                    <span className="text-secondary font-bold">80%</span>
                  </div>
                  <div className="bg-gray-700 rounded-full h-3">
                    <div
                      className="progress-bar bg-gradient-to-r from-secondary to-orange-400 h-3 rounded-full progress-animate"
                      style={{ width: '95%' }}
                    ></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">Java</span>
                    <span className="text-secondary font-bold">75%</span>
                  </div>
                  <div className="bg-gray-700 rounded-full h-3">
                    <div
                      className="progress-bar bg-gradient-to-r from-secondary to-orange-400 h-3 rounded-full progress-animate"
                      style={{ width: '95%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="devops-skills"
              className="glass-effect p-8 rounded-2xl border border-purple-400/20"
            >
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                  <i className="fa-solid fa-tools text-white text-xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-white">Tools & DevOps</h3>
              </div>
              <div className="space-y-8">
                <div className="skill-item">
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">Docker</span>
                    <span className="text-purple-400 font-bold">85%</span>
                  </div>
                  <div className="bg-gray-700 rounded-full h-3">
                    <div
                      className="progress-bar bg-gradient-to-r from-purple-400 to-purple-600 h-3 rounded-full progress-animate"
                      style={{ width: '95%' }}
                    ></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">AWS</span>
                    <span className="text-purple-400 font-bold">75%</span>
                  </div>
                  <div className="bg-gray-700 rounded-full h-3">
                    <div
                      className="progress-bar bg-gradient-to-r from-purple-400 to-purple-600 h-3 rounded-full progress-animate"
                      style={{ width: '95%' }}
                    ></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">Kubernetes</span>
                    <span className="text-purple-400 font-bold">70%</span>
                  </div>
                  <div className="bg-gray-700 rounded-full h-3">
                    <div
                      className="progress-bar bg-gradient-to-r from-purple-400 to-purple-600 h-3 rounded-full progress-animate"
                      style={{ width: '95%' }}
                    ></div>
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
