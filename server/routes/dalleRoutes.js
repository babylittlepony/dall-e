import express from "express"
import * as dotenv from "dotenv"
import { Configuration, OpenAIApi } from "openai"

dotenv.config()

const route = express.Router()
