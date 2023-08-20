import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

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

//middleware
userSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

export default mongoose.model("User", userSchema);
