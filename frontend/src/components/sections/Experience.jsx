function Experience() {
  const experiences = [
    {
      role:"Web Developer Intern",
      company: "Civil Service Commission Regional Office IV",
      duration: "Internship",
      description:
        "Developed and enhanced a web-based appointment monitoring system for managing appointment records, reports, and user access.",
      technologies: [
        "PHP",
        "MySQL",
        "JavaScript",
        "HTML",
        "CSS",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10">
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((experience) => (
            <div
              key={experience.company}
              className="border rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold">
                {experience.role}
              </h3>

              <p className="text-gray-600">
                {experience.company}
              </p>

              <p className="text-sm text-gray-500 mt-1">
                {experience.duration}
              </p>

              <p className="mt-4">
                {experience.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {experience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;