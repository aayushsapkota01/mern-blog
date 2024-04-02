import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser());
dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI || 3000)
  .then(() => console.log("MongoDB is Connected"))
  .catch((error) => console.log(error));

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.listen(3000, () => {
  console.log("Server is running on: http://localhost:3000");
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error !!";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
