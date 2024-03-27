import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import { json } from "sequelize";

const app = express();
app.use(express.json());
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
