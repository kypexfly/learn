import express from "express"

const app = express()
const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`Server is running on port ${PORT}!`))

app.get("/", (req, res) => {
  res.send("Root: Hello World!")
})

app.get("/api", (req, res) => {
  res.send("API: Hello World!")
})
