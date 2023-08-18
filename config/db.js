import mongoose from "mongoose";
import colors from "colors";

const connecDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Connected to Mongodb Database ${mongoose.connection.host}.bgMagenta`
    );
  } catch (error) {
    console.log(`MongoDB Error ${error}.bgRed.black`);
  }
};

export default connecDB;
