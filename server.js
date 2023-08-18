//imports
import express from "express";
import dotenv from "dotenv";
import colors from "colors";

//Dot ENV config
dotenv.config();

//rest object
const app = express();

//routes
app.get("/", (req, res) => {
  res.send("<h1> Hello <h1>");
});

//port
const PORT = process.env.PORT || 9090;

//listen
app.listen(9090, () => {
  console.log(
    `Node server running In ${process.env.DEV_MODE} Mode on port no ${PORT}`
      .bgBlue.white
  );
});
