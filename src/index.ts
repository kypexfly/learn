import express from "express"

const app = express()
const PORT = process.env.PORT || 4000

app.get("/", (_req, res) => {
  res.send("Express Typescript on Vercel")
})

app.get("/ping", (_req, res) => {
  res.send("pong 🏓")
})

app.get("/api", (_req, res) => {
  res.send("API: Hello World!")
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}!`))
