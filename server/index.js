const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.listen(4000, () => {
  console.log("Server is running on port 4000!");
});

mongoose
  .connect("mongodb://127.0.0.1:27017/jwt")
  .then(() => {
    console.log("Mongoose connection is successful!");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use(
  cors({
    origin: ["https://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());
