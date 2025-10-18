export const Footer = () => {
  return (
    <footer className="py-16 bg-gray-900">
      <div className="container mx-auto px-8">
        <div className="text-center">
          <div className="text-2xl font-bold gradient-text mb-4 w-fit mx-auto">Nabil Md Shahid</div>
          <p className="text-gray-400 mb-8">Software Engineer • Building the Future</p>
          <div className="flex justify-center space-x-6">
            <span className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-colors cursor-pointer">
              <i className="fa-brands fa-linkedin text-lg"></i>
            </span>
            <span className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-colors cursor-pointer">
              <i className="fa-brands fa-github text-lg"></i>
            </span>
            <span className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-colors cursor-pointer">
              <i className="fa-brands fa-twitter text-lg"></i>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
