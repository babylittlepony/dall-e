import express from "express"
import * as dotenv from "dotenv"
import cors from "cors"

import connectDB from "./mongodb/connect.js"

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json({ limit: "50mb" }))

app.get("/", async (req, res) => {
  res.send("heeeeeeeeeeeeeeeeeeeeeeeee")
})

const startServer = () => {
  app.listen(8080, () =>
    console.log("Server is running on: \nhttp://localhost:8080")
  )

  try {
    connectDB(process.env.MONGODB_URL)
  } catch (error) {
    console.log(error)
  }
}
startServer()