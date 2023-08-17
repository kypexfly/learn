import { useMutation } from "@apollo/client"
import { useParams } from "react-router-dom"
import { CREATE_TASK } from "../../graphql/tasks"

const TaskForm = () => {
  const params = useParams()
  const [createTask] = useMutation(CREATE_TASK, {
    refetchQueries: ["getProject"],
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await createTask({
      variables: {
        title: e.target.title.value,
        projectId: params.id,
      },
    })
    console.log(result)
    e.target.reset()
    e.target.title.focus()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Write a task"
        className="mb-2 w-full rounded-lg bg-zinc-900 p-2 text-white"
      />
      <button className="mb-2 w-full rounded-lg bg-sky-900 p-2 text-white">
        Add
      </button>
    </form>
  )
}

export default TaskForm
