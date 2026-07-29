function ProjectCard({ projects }) {
  return (
    <div className="border rounded-xl p-6">
      <h3 className="text-xl font-semibold mb-3">
        {projects.title}
      </h3>

      <p className="text-gray-600 mb-4">
        {projects.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {projects.tech.map((item) => (
          <span
            key={item}
            className="px-3 py-1 bg-gray-100 rounded-full text-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;