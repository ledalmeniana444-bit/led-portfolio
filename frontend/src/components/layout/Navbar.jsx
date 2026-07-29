function Navbar() {
  return (
    <header className="border-b">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-5">
        <a href="/" className="text-xl font-semibold">
          Led.
        </a>

        <ul className="flex items-center gap-8">
          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>

          <li>
            <a href="https://github.com/yourusername">
              GitHub
            </a>
          </li>

          <li>
            <a href="/resume.pdf">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;