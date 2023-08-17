import Project from "../models/Project.js";
import Task from "../models/Task.js";

export const resolvers = {
  Query: {
    hello: () => "Hello world!",
    projects: async () => await Project.find(),
    project: async (_, { _id }) => await Project.findById(_id),
    tasks: async () => await Task.find(),
    task: async (_, { _id }) => await Task.findById(_id),
  },
  Mutation: {
    createProject: async (_root, { name, description }) => {
      const project = new Project({
        name,
        description,
      });

      const savedProject = await project.save();
      return savedProject;
    },

    createTask: async (_root, { title, projectId }) => {
      const projectFound = await Project.findById(projectId);

      if (!projectFound) {
        throw new Error("Project not found");
      }

      const task = new Task({
        title,
        projectId,
      });

      const savedTask = await task.save();
      return savedTask;
    },

    deleteProject: async (_root, { _id }) => {
      const deletedProject = await Project.findByIdAndDelete(_id);
      if (!deletedProject) {
        throw new Error("Project not found");
      }

      await Task.deleteMany({ projectId: deletedProject._id });

      return deletedProject;
    },

    deleteTask: async (_root, { _id }) => {
      const deletedTask = await Task.findByIdAndDelete(_id);
      if (!deletedTask) {
        throw new Error("Task not found");
      }
      return deletedTask;
    },

    updateProject: async (_root, args) => {
      // findByIdAndUpdate returns true or false
      // with new: true it'll return the updated object
      const updatedProject = await Project.findByIdAndUpdate(args._id, args, {
        new: true,
      });
      if (!updatedProject) {
        throw new Error("Project not found");
      }
      return updatedProject;
    },

    updateTask: async (_root, args) => {
      // findByIdAndUpdate returns true or false
      // with new: true it'll return the updated object
      const updatedTask = await Task.findByIdAndUpdate(args._id, args, {
        new: true,
      });
      if (!updatedTask) {
        throw new Error("Task not found");
      }
      return updatedTask;
    },
  },
  Project: {
    tasks: async (parent) => {
      return await Task.find({ projectId: parent._id });
    },
  },
  Task: {
    project: async (parent) => {
      return await Project.findById(parent.projectId);
    },
  },
};
