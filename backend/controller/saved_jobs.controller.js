import SavedJobs from "../models/saved_jobs.model.js";
import { errorHandler } from "../utils/error.js";

export const save_job = async (req, res, next) => {
  const user_id = req.user.id;
  const { job_id } = req.params;

  const newSavedJob = new SavedJobs({
    user_id: user_id,
    job_id: job_id,
  });
  try {
    const saved_job = await newSavedJob.save();
    const populatedSavedJob = await SavedJobs.findById(saved_job._id).populate(
      "job_id"
    );

    res.status(201).json({
      success: true,
      message: "Job saved successfully",
      saved_job: populatedSavedJob,
    });
  } catch (error) {
    console.error(error);
    next(errorHandler(550, "Error saving job"));
  }
};
