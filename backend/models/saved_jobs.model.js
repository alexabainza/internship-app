import mongoose, { mongo } from "mongoose";

const savedJobsSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  job_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "JobPosting",
    required: true,
  },
});

const SavedJobs = mongoose.model("SavedJobs", savedJobsSchema);
export default SavedJobs;
