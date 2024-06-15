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
  });
  console.log(newApplication);
  try {
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
