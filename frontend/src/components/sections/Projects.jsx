function Projects() {
  const projects = [
    {
      title: "CSC Appointment Monitoring System",
      description:
        "A web-based appointment monitoring system developed during my internship for managing appointment records and reports.",
      technologies: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    },
    {
      title: "Eli's Escape of Eternal Hunt",
      description:
        "A 3D survival horror game developed as my capstone project using Unity and C#.",
      technologies: ["Unity", "C#", "Blender", "Photoshop"],
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-600 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
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

export default Projects;