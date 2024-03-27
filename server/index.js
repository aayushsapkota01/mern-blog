import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI || 3000)
  .then(() => console.log("MongoDB is Connected"))
  .catch((error) => console.log(error));

app.listen(3000, () => {
  console.log("Server is running on: https://localhost:3000");
});
