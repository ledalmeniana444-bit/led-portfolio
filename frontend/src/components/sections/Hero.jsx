function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-lg text-gray-500 mb-4">
          Hi, I'm
        </p>

        <h1 className="text-6xl font-bold tracking-tight">
          Led Almeniana
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-600 leading-8">
          Aspiring Full-Stack Developer passionate about building clean,
          modern web applications and continuously learning new technologies.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-lg bg-black px-6 py-3 text-white">
            View Projects
          </button>

          <button className="rounded-lg border px-6 py-3">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;