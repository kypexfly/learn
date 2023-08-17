import ProjectForm from "../components/ProjectForm"
import ProjectList from "../components/ProjectList"

const Projects = () => (
  <div className="h-4/5 w-3/5 rounded-lg bg-zinc-900 p-8 shadow-lg">
    <h1 className="mb-4 py-2 text-2xl font-bold">Project Manager</h1>
    <div className="flex justify-between gap-x-1">
      <ProjectForm />
      <ProjectList />
    </div>
  </div>
)

export default Projects
