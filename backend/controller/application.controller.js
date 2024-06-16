import Application from "../models/application.model.js";
import { errorHandler } from "../utils/error.js";

export const send_application = async (req, res, next) => {
  const { job_id } = req.params;
  const {
    last_name,
    first_name,
    middle_initial,
    gender,
    nationality,
    birthdate,
    address,
    contact_no,
    email_address,
    facebook_link,
    school,
    course_year,
    responses,
  } = req.body;

  const newApplication = new Application({
    user_id: req.user.id,
    job_id,
    last_name,
    first_name,
    middle_initial,
    gender,
    nationality,
    birthdate,
    address,
    contact_no,
    email_address,
    facebook_link,
    school,
    course_year,
    responses,
    status: "to be viewed",
  });
  try {
    const existingApplication = await Application.findOne({
      user_id: req.user.id,
      job_id: job_id,
    });

    if (existingApplication) {
      return res.status(400).json({
        success: false,
        message: "You have already applied for this job.",
      });
    }
    const application = await newApplication.save();

    res.status(201).json({
      success: true,
      message: "Application submitted successfully",
      application: application,
    });
  } catch (error) {
    console.error(error);
    next(errorHandler(550, "Error submitting application"));
  }
};

export const get_applications = async (req, res, next) => {
  try {
    const applications = await Application.find({
      user_id: req.user.id,
    }).populate("job_id");
    res.status(200).json({
      success: true,
      applications: applications,
    });
  } catch (error) {
    next(errorHandler(550, "Error getting applications!"));
  }
};

export const edit_application = async (req, res, next) => {
  const { application_id } = req.params;
  const updateData = req.body;
  if (req.user.role === "Student") {
    delete updateData.status;
  }
};
