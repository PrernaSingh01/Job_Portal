import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  company: {
    type: String,
    required: [true, "Company name is require"],
  },
  position: {
    type: String,
    required: [true, "Job position is required"],
  },
  status: {
    type: String,
    enum: ["pending", "reject", "interview"],
    default: "pending",
  },
  workType: {
    type: String,
    enum: ["full-time", "part-time", "internship", "contaract"],
    default: "full-time",
  },
});

export default mongoose.model("job", jobSchema);
