//Packages imports
import express from "express";
import "express-async-errors";
import dotenv from "dotenv";
import colors from "colors";
import cors from "cors";
import morgan from "morgan";

//files import
import connecDB from "./config/db.js";

//routes import
import testRoutes from "./routes/testRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";
import userRoutes from "./routes/userRoutes.js";

//Dot ENV config
dotenv.config();

//mongodb connection
connecDB();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//routes
app.use("/api/v1/test", testRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/user", userRoutes);

//port
const PORT = process.env.PORT || 9090;

//listen
app.listen(9090, () => {
  console.log(
    `Node server running In ${process.env.DEV_MODE} Mode on port no ${PORT}`
      .bgMagenta.yellow
  );
});
