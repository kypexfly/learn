import { Router } from "express"

const router = Router()

router.get("/", async (_, res) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")

    if (!response.ok) {
      throw new Error("No data")
    }

    const posts = await response.json()

    res.json(posts)
  } catch (error) {
    res.status(400).json({ message: "Something went wrong" })
  }
})

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    )

    if (!response.ok) {
      throw new Error("No data")
    }

    const post = await response.json()

    res.json(post)
  } catch (error) {
    res.status(400).json({ error })
  }
})

export { router as postsRouter }
