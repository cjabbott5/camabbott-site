export default function ProjectCard({ title = "Project Title", description = "Project description goes here." }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-semibold mb-2 font-serif">{title}</h3>
      <p className="text-grayText font-sans">{description}</p>
    </div>
  )
}
