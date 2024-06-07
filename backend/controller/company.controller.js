import JobPosting from "../models/job_posting.model.js";
import { errorHandler } from "../utils/error.js";
import Company from "../models/company.model.js";
export const create_post = async (req, res, next) => {
  const {
    first_name,
    last_name,
    email,
    contact_no,
    company_name,
    industry,
    company_size,
    company_address,
    company_description,
    company_website,
    job_title,
    province,
    city,
    specific_address,
    internship_type,
    internship_setup,
    academic_requirements,
    voluntary_internship,
    role_description,
    requirements,
    questions,
  } = req.body;

  const newJobPosting = new JobPosting({
    first_name,
    last_name,
    email,
    contact_no,
    company_name,
    industry,
    company_size,
    company_address,
    company_description,
    company_website,
    job_title,
    province,
    city,
    specific_address,
    internship_type,
    internship_setup,
    academic_requirements,
    voluntary_internship,
    role_description,
    requirements,
    questions,
  });
  try {
    await newJobPosting.save();
    res.status(201).json("Job posting created successfully");
  } catch (error) {
    next(errorHandler(550, "Error creating job posting"));
  }
};

export const get_profile_data = async (req, res, next) => {
  const { username } = req.params;
  try {
    const profile = await Company.findOne({ company_username: username });
    if (!profile) {
      return res.status(404).json({
        success: false,
        message: `Profile not found for username: ${username}`,
      });
    }
    const { password, ...companyDetails } = profile._doc;
    res.status(200).json({
      success: true,
      companyDetails,
    });
  } catch (error) {
    next(errorHandler(550, "Error getting profile"));
  }
};
