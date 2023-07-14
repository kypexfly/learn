import express from "express"

const app = express()
const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/ping", (_req, res) => {
  res.send("pong 🏓 2023")
})

app.get("/api", (_req, res) => {
  res.json({
    api: "v1",
  })
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}!`))
