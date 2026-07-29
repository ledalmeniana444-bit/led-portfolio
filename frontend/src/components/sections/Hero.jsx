import profileImage from "../../assets/Image-led.jpg"
import Button from "../common/Button";

function Hero() {
  return (
    <section className="min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div>
          <p className="text-gray-500 mb-3">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Led Almeniana
          </h1>

          <h2 className="text-2xl md:text-3xl mb-6">
            Aspiring Full-Stack Developer
          </h2>

          <p className="max-w-2xl text-gray-600 mb-8">
            BSIT graduate passionate about building clean, 
            user-focused web applications. I enjoy learning modern
            technologies and turning ideas into practical solutions
            through real-world projects.
          </p>

          <div className="flex gap-4">
            <Button href="#projects">
              View Projects
            </Button>

            <Button href="#contact" variant="secondary">
              Contact me
            </Button>
          </div>
        </div>

        <div>
          <div>
            <img src={profileImage} alt="Led Almeniana" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;