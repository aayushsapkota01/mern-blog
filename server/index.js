import express from "express";

const app = express();

app.listen(3000, () => {
  console.log("Server is running on: https://localhost:3000");
});
