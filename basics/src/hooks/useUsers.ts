import { useEffect, useState } from "react"
import getUsers, { type User } from "@/data/users"

export function useUsers() {
  const [data, setData] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await getUsers()
        setData(res)
      } catch (e) {
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return { data, isLoading, isError }
}
