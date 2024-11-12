import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

dotenv.config()

// Connect to MongoDB
connectDB();

const app = express()
app.use(express.json())

// API Routes

export default app
