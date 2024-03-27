import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";

const app = express();
dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI || 3000)
  .then(() => console.log("MongoDB is Connected"))
  .catch((error) => console.log(error));

app.use("/api/user", userRoutes);

app.listen(3000, () => {
  console.log("Server is running on: http://localhost:3000");
});
