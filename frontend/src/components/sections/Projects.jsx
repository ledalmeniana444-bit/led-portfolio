import projects from "../../data/projects";
import ProjectCard from "../common/ProjectCard";
function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((projects) => (
  <ProjectCard
    key={projects.title}
    projects={projects}
  />
))}
        </div>
      </div>
    </section>
  );
}

export default Projects;