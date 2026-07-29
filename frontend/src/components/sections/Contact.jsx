function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Contact
        </h2>

        <p className="text-gray-600 mb-8">
          I'm currently open to opportunities and collaborations.
          Feel free to reach out.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="mailto:your-ledalmeniana444@gmail.com"
            className="px-5 py-2 border rounded-full hover:bg-gray-100"
          >
            Email
          </a>

          <a
            href="https://github.com/ledalmeniana444-bit"
            target="_blank"
            className="px-5 py-2 border rounded-full hover:bg-gray-100"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/led-almeniana-383684399"
            target="_blank"
            className="px-5 py-2 border rounded-full hover:bg-gray-100"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;