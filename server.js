//imports
import express from "express";
import dotenv from "dotenv";

//Dot ENV config
dotenv.config();

//rest object
const app = express();

//routes
app.get("/", (req, res) => {
  res.send("<h1> Hello <h1>");
});

//port
Const PORT = process.env.PORT || 3000;

//listen
app.listen(3000, () => {
  console.log("Server is running");
});
