import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// CORS middleware configuration
app.use(
  cors({
    origin: "*", // Allows all domains, you can restrict to specific domains here
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
    credentials: true, // If you need to include cookies or authorization headers in cross-origin requests
  })
);

app.use(express.json());

// API Routes
app.use("/api/user", userRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", message: "Server is running" });
});

export default app;
