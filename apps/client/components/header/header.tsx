export const Header = () => {
    return (
        <header id="header" className="fixed top-0 w-full z-50 glass-effect transition-all duration-300">
            <nav className="container mx-auto px-8 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold gradient-text">Nabil Md Shahid</div>
                <ul className="flex space-x-8">
                    <li><span className="hover:text-accent transition-colors cursor-pointer">Home</span></li>
                    <li><span className="hover:text-accent transition-colors cursor-pointer">About</span></li>
                    <li><span className="hover:text-accent transition-colors cursor-pointer">Skills</span></li>
                    <li><span className="hover:text-accent transition-colors cursor-pointer">Experience</span></li>
                    <li><span className="hover:text-accent transition-colors cursor-pointer">Projects</span></li>
                    <li><span className="hover:text-accent transition-colors cursor-pointer">Contact</span></li>
                </ul>
            </nav>
        </header>
    )
}