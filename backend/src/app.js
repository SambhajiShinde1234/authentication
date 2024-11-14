import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express(cors());
app.use(express.json());

// API Routes
app.use("v1/user", userRoutes);

export default app;
