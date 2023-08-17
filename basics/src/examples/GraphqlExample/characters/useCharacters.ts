import { useQuery } from "@apollo/client"
import { GET_CHARACTERS } from "./character-queries"

// Making this separation, in the future if I don't use apollo client
// I can use fetch/react-query/redux/etc just changing a line of code
// respecting the contract of {data, loading, error}

const useCharacters = () => {
  const { data, loading, error } = useQuery(GET_CHARACTERS)

  return {
    data,
    loading,
    error,
  }
}

export default useCharacters
