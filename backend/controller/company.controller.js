import JobPosting from "../models/job_posting.model.js";
import { errorHandler } from "../utils/error.js";
import Company from "../models/company.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import Application from "../models/application.model.js";

export const create_post = async (req, res, next) => {
  const {
    company_id,
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
    company_id,
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
    res.status(201).json({
      success: true,
      message: "Job posting created successfully",
    });
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

export const edit_company_data = async (req, res, next) => {
  if (req.user.company_username !== req.params.username)
    return next(errorHandler(401, "You can only update your own account!"));
  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }
    const updatedCompany = await Company.findOneAndUpdate(
      { company_username: req.params.username },
      {
        $set: {
          company_name: req.body.company_name,
          company_address: req.body.company_address,
          industry: req.body.industry,
          company_size: req.body.company_size,
          company_description: req.body.company_description,
          company_logo: req.body.company_logo,
          company_email: req.body.company_email,
          company_contact_no: req.body.company_contact_no,
          company_website: req.body.company_website,
          company_username: req.body.company_username,
          password: req.body.password,
        },
      },
      { new: true }
    );

    if (!updatedCompany) {
      return res.status(404).json({
        success: false,
        message: `Company not found for username: ${req.params.username}`,
      });
    }
    const { password, ...rest } = updatedCompany._doc;
    const token = jwt.sign(
      {
        id: updatedCompany._id,
        role: updatedCompany.role,
        company_username: updatedCompany.company_username,
      },
      process.env.JWT_SECRET
    );

    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};

export const get_job_applicants = async (req, res, next) => {
  const { job_id } = req.params;
  try {
    const applicants = await Application.find({
      job_id: job_id,
    })
      .populate("job_id")
      .exec();

    const jobPosting = await JobPosting.findById(job_id).select("job_title");
    res.status(200).json({
      success: true,
      applicants: applicants,
      job_title: jobPosting.job_title,
    });
  } catch (error) {
    next(errorHandler(550, "Error fetching applicants"));
  }
};
