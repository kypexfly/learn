import { useEffect, useMemo, useState } from "react"
import getUsers, { User } from "@/data/users"
import { useUsers } from "@/hooks/useUsers"
import UserList from "@/components/UserList"

const FilterListExample = () => {
  // const { data: users, isLoading, isError } = useUsers()

  const [users, setUsers] = useState<User[]>([])

  const [input, setInput] = useState("")
  const [color, setColor] = useState(false)

  // if (isLoading) return <p>Loading...</p>
  // if (isError) return <p>Something went wrong</p>

  // if (!users) return <p>No users</p>

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getUsers()
        setUsers(res)
      } catch (e) {
        console.log(e)
      }
    }

    fetchData()
  }, [])

  const usersFilteredByName = useMemo(() => {
    console.log("calculate usersFilteredByName")
    return input != null && input.length > 0 ? users.filter((user) => user.name.toLowerCase().includes(input)) : users
  }, [users, input])

  return (
    <div>
      <div className="flex gap-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="mb-2 w-full border p-2"
          type="text"
          autoFocus
          placeholder="Search by name..."
        />

        <div className="bg-red-500">
          <input id="color" type="checkbox" checked={color} onChange={() => setColor(!color)} />
          <label htmlFor="color" className="ml-2">
            Color table
          </label>
        </div>
      </div>

      <UserList users={usersFilteredByName} color={color} />
    </div>
  )
}

export default FilterListExample
