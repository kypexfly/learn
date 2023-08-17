import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import "@/styles/globals.css"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import ProjectDetails from "./pages/ProjectDetails"
import Projects from "./pages/Projects"

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:4000/graphql",
})

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div className="container m-auto flex h-screen items-center justify-center">
          <Routes>
            <Route path="/" element={<Navigate to="/projects" replace />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
