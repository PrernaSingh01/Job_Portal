//imports
const express = require("express");

//rest object
const app = express();

//routes
app.get("/", (req, res) => {
  res.send("<h1> Hello <h1>");
});

//listen
app.listen(3000, () => {
  console.log("Server is running");
});
