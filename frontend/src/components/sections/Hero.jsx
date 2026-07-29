function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <p className="mb-3 text-gray-500">
          Hello, I'm
        </p>

        <h1 className="text-5xl font-bold">
          Led Almeniana
        </h1>

        <h2 className="mt-3 text-2xl">
          Aspiring Web Developer
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-gray-600">
          BSIT graduate passionate about building web applications
          and continuously improving my skills in modern technologies.
        </p>

        <div className="mt-8 flex justify-center gap-4">
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