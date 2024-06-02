import JobPosting from "../models/job_posting.model.js";
import { errorHandler } from "../utils/error.js";

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
