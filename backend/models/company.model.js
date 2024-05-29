import mongoose from "mongoose";
const companySchema = new mongoose.Schema(
  {
    company_name: {
      type: String,
      required: true,
    },
    company_address: {
      type: String,
      required: true,
    },
    company_email: {
      type: String,
      required: true,
      unique: true,
    },
    company_contact_no: {
      type: String,
      required: true,
      maxlength: 11,
      minlength: 11,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Company = mongoose.model("Company", companySchema);
export default Company;
