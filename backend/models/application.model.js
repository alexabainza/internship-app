import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    job_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "JobPosting",
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    first_name: {
      type: String,
      required: true,
    },
    middle_initial: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    nationality: {
      type: String,
      required: true,
    },
    birthdate: {
      type: Date,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    contact_no: {
      type: String,
      required: true,
    },
    email_address: {
      type: String,
      required: true,
    },
    facebook_link: {
      type: String,
      required: true,
    },
    school: {
      type: String,
      required: true,
    },
    course_year: {
      type: String,
      required: true,
    },
    responses: {
      type: [String],
      default: [],
    },
    status: {
      type: String,
      enum: ["for interview", "rejected", "for screening", "to be viewed"],
      default: "to be viewed",
      required: true,
    },
  },
  { timestamps: true }
);
applicationSchema.index({ user_id: 1, job_id: 1 }, { unique: true });

const Application = mongoose.model("Application", applicationSchema);
export default Application;
