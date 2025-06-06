import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send(
    "🚀 Backend API is running on Vercel!"
  );
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

await connectDB();

export default app;
