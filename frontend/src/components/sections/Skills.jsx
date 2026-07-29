function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Java",
    "Python",
    "Django",
    "PHP",
    "MySQL",
    "React",
    "Tailwind CSS",
    "Git",
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10">
          Skills
        </h2>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 border rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;