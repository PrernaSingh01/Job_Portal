import mongoose from "mongoose";
import validator from "validator";

//schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is require"],
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      require: [true, "Email is require"],
      unique: true,
      validate: validator.isEmail,
    },
    password: {
      type: String,
      require: [true, "Password is require"],
    },
    location: {
      type: String,
      default: "India",
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
