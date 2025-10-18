import { Background } from '@/components/common/background'
import { TitleWithSeparator } from '@/components/common/title-with-separator'

export const FeaturedProjects = () => {
  return (
    <section
      id="projects"
      className="container mx-auto h-[2400px] sm:h-[2100px] md:h-[2000px] lg:h-[1200px] px-4 relative overflow-hidden"
    >
      <Background />
      <div className="flex flex-col h-full items-center justify-center">
        <TitleWithSeparator title="Featured Projects" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div
            id="project-1"
            className="project-card glass-effect rounded-3xl overflow-hidden border border-accent/20"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/59deda60b4-d8030eeb5126395047bf.png"
                alt="modern e-commerce dashboard interface, clean UI design, product analytics charts"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute top-4 right-4">
                <div className="bg-accent/20 backdrop-blur-sm rounded-full px-3 py-1 text-accent text-sm font-semibold">
                  Web App
                </div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-3">E-Commerce Platform</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Full-stack e-commerce solution with real-time inventory management, payment
                integration, and advanced analytics dashboard.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">
                  React
                </span>
                <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">
                  Node.js
                </span>
                <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">
                  MongoDB
                </span>
                <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">
                  Stripe
                </span>
              </div>
              <div className="flex space-x-4">
                <button className="flex-1 bg-gradient-to-r from-accent to-cyan-400 py-3 rounded-lg font-semibold text-primary hover:scale-105 transition-transform">
                  <i className="fa-solid fa-external-link mr-2"></i>Live Demo
                </button>
                <button className="w-12 h-12 border-2 border-accent rounded-lg flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                  <i className="fa-brands fa-github"></i>
                </button>
              </div>
            </div>
          </div>

          <div
            id="project-2"
            className="project-card glass-effect rounded-3xl overflow-hidden border border-secondary/20"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/afde608f42-1f3b9983cb6566d2a6bd.png"
                alt="AI chatbot interface, modern chat UI, machine learning visualization, tech background"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute top-4 right-4">
                <div className="bg-secondary/20 backdrop-blur-sm rounded-full px-3 py-1 text-secondary text-sm font-semibold">
                  AI/ML
                </div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-3">AI Assistant Platform</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Intelligent conversational AI with natural language processing, sentiment analysis,
                and multi-language support.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm">
                  Python
                </span>
                <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm">
                  TensorFlow
                </span>
                <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm">
                  FastAPI
                </span>
                <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm">
                  UX Pilot AI
                </span>
              </div>
              <div className="flex space-x-4">
                <button className="flex-1 bg-gradient-to-r from-secondary to-orange-400 py-3 rounded-lg font-semibold text-white hover:scale-105 transition-transform">
                  <i className="fa-solid fa-external-link mr-2"></i>Live Demo
                </button>
                <button className="w-12 h-12 border-2 border-secondary rounded-lg flex items-center justify-center hover:bg-secondary hover:text-white transition-colors">
                  <i className="fa-brands fa-github"></i>
                </button>
              </div>
            </div>
          </div>

          <div
            id="project-3"
            className="project-card glass-effect rounded-3xl overflow-hidden border border-purple-400/20"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/72b4e6fe29-73297832c03beeda89ad.png"
                alt="mobile app interface, social media dashboard, modern UI design, smartphone mockup"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute top-4 right-4">
                <div className="bg-purple-400/20 backdrop-blur-sm rounded-full px-3 py-1 text-purple-400 text-sm font-semibold">
                  Mobile App
                </div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-3">Social Media Analytics</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Cross-platform mobile app for social media management with real-time analytics and
                automated posting features.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-purple-400/20 text-purple-400 px-3 py-1 rounded-full text-sm">
                  React Native
                </span>
                <span className="bg-purple-400/20 text-purple-400 px-3 py-1 rounded-full text-sm">
                  Firebase
                </span>
                <span className="bg-purple-400/20 text-purple-400 px-3 py-1 rounded-full text-sm">
                  GraphQL
                </span>
                <span className="bg-purple-400/20 text-purple-400 px-3 py-1 rounded-full text-sm">
                  Redis
                </span>
              </div>
              <div className="flex space-x-4">
                <button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 py-3 rounded-lg font-semibold text-white hover:scale-105 transition-transform">
                  <i className="fa-solid fa-external-link mr-2"></i>Live Demo
                </button>
                <button className="w-12 h-12 border-2 border-purple-400 rounded-lg flex items-center justify-center hover:bg-purple-400 hover:text-white transition-colors">
                  <i className="fa-brands fa-github"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto">
          <div className="text-center mt-16">
            <button className="bg-gradient-to-r from-accent to-secondary px-12 py-4 rounded-lg font-semibold text-white hover:scale-105 transition-transform glow-effect">
              View All Projects
              <i className="fa-solid fa-arrow-right ml-2"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
