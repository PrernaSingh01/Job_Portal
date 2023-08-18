//imports
import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connecDB from "./config/db.js";
import testRoutes from "./routes/testRoutes.js";

//Dot ENV config
dotenv.config();

//mongodb connection
connecDB();

//rest object
const app = express();

//middlewares
app.use(express.json());

//routes
app.use("/api/v1/test", testRoutes);

//port
const PORT = process.env.PORT || 9090;

//listen
app.listen(9090, () => {
  console.log(
    `Node server running In ${process.env.DEV_MODE} Mode on port no ${PORT}`
      .bgMagenta.yellow
  );
});
