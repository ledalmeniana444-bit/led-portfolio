function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-gray-500 mb-3">
          Hello, I'm
        </p>

        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Led Almeniana
        </h1>

        <h2 className="text-2xl md:text-3xl mb-6">
          Software Developer
        </h2>

        <p className="max-w-2xl text-gray-600 mb-8">
          BSIT graduate passionate about building software solutions,
          developing web applications, and continuously improving
          my skills through real-world projects.
        </p>

        <div className="flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-black text-white"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-full border"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;