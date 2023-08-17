import TaskCard from "./TaskCard"

const TasksList = ({ tasks }) => {
  if (!tasks.length)
    return (
      <div className="flex content-center justify-center p-5">
        <div>
          <h1 className="text-center">No Tasks Yet</h1>
        </div>
      </div>
    )

  console.log(tasks)

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task._id} task={task} />
      ))}
    </div>
  )
}

export default TasksList
