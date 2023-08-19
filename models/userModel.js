import mongoose from "mongoose";

//schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is require"],
  },
  email: {
    type: String,
    require: [true, "Email is require"],
    unique: true,
  },
});

export default mongoose.model("User", userSchema);
