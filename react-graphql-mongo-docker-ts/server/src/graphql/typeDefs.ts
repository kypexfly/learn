export const typeDefs = `#graphql
  type Query {
    hello: String
    project(_id: ID) : Project
    projects: [Project]
    task(_id: ID) : Task
    tasks: [Task]
  }

  type Mutation {
    createProject(name: String, description: String) : Project
    updateProject(_id: ID!, name: String!, description: String) : Project
    deleteProject(_id: ID!) : Project
    createTask(title: String, projectId: ID) : Task
    deleteTask(_id: ID!) : Task
    updateTask(_id: ID!, title: String!, projectId: ID!) : Task
  }

  type Project {
    _id: ID
    name: String
    description: String
    createdAt: String
    updatedAt: String
    tasks: [Task]
  }
  
  type Task {
    _id: ID,
    title: String
    project: Project
    createdAt: String
    updatedAt: String
  }

`;