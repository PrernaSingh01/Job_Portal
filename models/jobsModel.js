import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  company: {
    type: String,
    required: [true, "Company name is require"],
  },
  position:{
    type:String,
    required:[true, 'Job position is required'],
  },{

  }
});

export default mongoose.model("job", jobSchema);
