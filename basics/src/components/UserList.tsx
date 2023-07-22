import { memo } from "react"
import { type User } from "@/data/users"

interface UserListProps {
  users: User[]
  color: boolean
}

const UserList = ({ users, color }: UserListProps) => {
  console.log("RENDER: UserList")
  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Website</th>
        </tr>
      </thead>

      <tbody className={color ? "[&_tr:nth-child(2n)]:bg-zinc-100" : ""}>
        {users.map((user) => {
          return (
            <tr key={user.id} className="border border-gray-300">
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default memo(UserList)
