import { useNavigate } from "react-router-dom"

const ProjectCard = ({ project }) => {
  const navigate = useNavigate()

  return (
    <div
      className="mb-2 w-full rounded-lg bg-zinc-800 p-4 shadow-lg hover:cursor-pointer hover:bg-zinc-700"
      onClick={() => navigate(`/projects/${project._id}`)}
    >
      <h2 className="text-lg font-bold">{project.name}</h2>
      <p className="text-sm text-slate-400">{project.description}</p>
    </div>
  )
}

export default ProjectCard
