export const IntroSection = () => {
    return (
        <section id="home" className="h-[900px] relative overflow-hidden bg-primary">
            <div className="absolute top-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-8 h-full flex items-center relative z-10">
                <div className="grid grid-cols-2 gap-16 items-center w-full">
                    <div className="space-y-8">
                        <h1 className="text-7xl font-black leading-tight">
                            <span className="block">Software</span>
                            <span className="block gradient-text">Engineer</span>
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            Crafting innovative solutions with clean code and cutting-edge technology.
                            Passionate about building scalable applications that make a difference.
                        </p>
                        <div className="flex space-x-6">
                            <button
                                className="bg-gradient-to-r from-accent to-cyan-400 px-8 py-4 rounded-lg font-semibold text-primary hover:scale-105 transition-transform glow-effect">
                                View Projects
                            </button>
                            <button
                                className="border-2 border-secondary px-8 py-4 rounded-lg font-semibold hover:bg-secondary hover:text-white transition-colors pulse-glow">
                                Download CV
                            </button>
                        </div>
                    </div>

                    <div className="relative">
                        <div
                            className="w-96 h-96 rounded-full bg-gradient-to-br from-accent via-secondary to-purple-500 p-2 floating glow-effect mx-auto">
                            <img className="w-full h-full rounded-full object-cover"
                                 src="https://storage.googleapis.com/uxpilot-auth.appspot.com/d2ad5ac0bd-e9f94c105af977a3f6f5.png"
                                 alt="professional software engineer portrait, confident smile, modern tech background"/>
                        </div>
                        <div className="absolute -top-10 -right-10 w-20 h-20 bg-accent/30 rounded-full blur-xl"></div>
                        <div
                            className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/30 rounded-full blur-xl"></div>
                    </div>
                </div>
            </div>
        </section>

    )
}