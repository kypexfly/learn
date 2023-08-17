import { useRef, useState } from "react"
import { useMutation } from "@apollo/client"
import { CREATE_PROJECT, GET_PROJECTS } from "../graphql/projects"

const initialState = {
  name: "",
  description: "",
}

const ProjectForm = () => {
  const [project, setProject] = useState(initialState)
  const titleInput = useRef()

  const [createProject, { loading, error }] = useMutation(CREATE_PROJECT, {
    refetchQueries: [
      {
        query: GET_PROJECTS,
      },
      "GetProjects",
    ],
  })

  const handleChange = (e) =>
    setProject({ ...project, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    createProject({
      variables: {
        name: project.name,
        description: project.description,
      },
    })
    setProject(initialState)
    titleInput.current.focus()
  }

  return (
    <form onSubmit={handleSubmit} className="w-2/5">
      {error && <p className="mb-2 bg-red-500 p-3">{error.message}</p>}
      <input
        type="text"
        name="name"
        placeholder="Write a title"
        className="mb-3 block w-full rounded-lg bg-zinc-800 p-4 text-white shadow-lg"
        onChange={handleChange}
        value={project.name}
        ref={titleInput}
        autoFocus
      />
      <textarea
        name="description"
        rows="3"
        placeholder="Write a description"
        className="mb-3 block w-full rounded-lg bg-zinc-800 p-4 text-white shadow-lg"
        onChange={handleChange}
        value={project.description}
      ></textarea>

      <div className="flex justify-end">
        <button
          className="mb-3 rounded-md bg-blue-500 px-4 py-1 text-lg disabled:bg-zinc-400"
          disabled={!project.name || !project.description}
        >
          {loading ? "Loading..." : "Save"}
        </button>
      </div>
    </form>
  )
}

export default ProjectForm
