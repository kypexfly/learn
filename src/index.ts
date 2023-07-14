import "module-alias/register"

import { postsRouter } from "@/routers/posts"
import express from "express"

const app = express()
const PORT = process.env.PORT || 4000

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Router
app.use("/api/posts", postsRouter)

app.listen(PORT, () => console.log(`⚡Server is running on port ${PORT}⚡`))
