import mongoose from "mongoose";
const companySchema = new mongoose.Schema(
  {
    company_name: {
      type: String,
      required: true,
      unique: true,
    },
    company_address: {
      type: String,
      required: true,
    },
    company_address: {
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
    company_description: {
      type: String,
      required: true,
    },
    company_logo: {
      type: String,
    },
    company_email: {
      type: String,
      required: true,
      unique: true,
    },
    company_contact_no: {
      type: String,
      required: true,
    },
    company_website: {
      type: String,
      required: true,
    },
    company_username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["Company"],
      default: "Company",
      required: true,
    },
  },
  { timestamps: true }
);

const Company = mongoose.model("Company", companySchema);
export default Company;
