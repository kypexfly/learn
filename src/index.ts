import express from "express"

import { postsRouter } from "./routers/posts"

const app = express()
const PORT = process.env.PORT || 4000

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Log requests
app.use((req, res, next) => {
  console.log(req.method, req.path)
  next()
})

// Router
app.use("/api/posts", postsRouter)

app.listen(PORT, () => console.log(`⚡Server is running on port ${PORT}⚡`))
