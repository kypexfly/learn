import { useEffect, useState } from "react"
import getUsers, { type User } from "@/data/users"

export function useUsers() {
  const [data, setData] = useState<User[]>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)

  useEffect(() => {
    let ignore = false
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await getUsers()
        if (!ignore) setData(res)
      } catch (e) {
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()

    return () => {
      ignore = true
    }
  }, [])

  return { data, isLoading, isError }
}
