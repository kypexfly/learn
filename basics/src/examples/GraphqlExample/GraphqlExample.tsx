import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import { CharacterList } from "./characters/characters"

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
})

const GraphqlExample = () => {
  return (
    <ApolloProvider client={client}>
      <div>Query Rick and Morty API with GraphQL</div>
      <CharacterList />
    </ApolloProvider>
  )
}

export default GraphqlExample
