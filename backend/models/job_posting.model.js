import mongoose from "mongoose";

const jobPostingSchema = new mongoose.Schema(
  {
    company_id: {
      type: String,
      required: true,
    },

    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    contact_no: {
      type: String,
      required: true,
    },
    company_name: {
      type: String,
      required: true,
    },
    industry: {
      type: String,
      required: true,
    },
    company_size: {
      type: String,
      required: true,
    },
    company_address: {
      type: String,
      required: true,
    },
    company_description: {
      type: String,
      required: true,
    },
    company_website: {
      type: String,
      required: true,
    },

    job_title: {
      type: String,
      required: true,
    },
    province: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    specific_address: {
      type: String,
      required: true,
    },
    internship_type: {
      type: String,
      required: true,
    },
    internship_setup: {
      type: String,
      required: true,
    },
    academic_requirements: {
      type: Boolean,
      required: true,
      default: false,
    },
    voluntary_internship: {
      type: Boolean,
      required: true,
      default: false,
    },
    role_description: {
      type: String,
      required: true,
      default: false,
    },
    requirements: {
      type: String,
      required: true,
    },
    questions: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const JobPosting = mongoose.model("JobPosting", jobPostingSchema);
export default JobPosting;
