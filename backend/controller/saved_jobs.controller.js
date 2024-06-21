import JobPosting from "../models/job_posting.model.js";
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

export const delete_saved_job = async (req, res, next) => {
  try {
    const savedJob = await SavedJobs.findOneAndDelete({
      job_id: req.params.job_id,
      user_id: req.user.id,
    });

    if (!savedJob) {
      return next(errorHandler(404, "Saved job not found"));
    }

    res.status(200).json("Saved job has been removed!");
  } catch (error) {
    next(error);
  }
};

export const get_saved_jobs = async (req, res, next) => {
  try {
    const all_saved_jobs = await SavedJobs.find({
      user_id: req.user.id,
    }).populate({
      path: "job_id",
      populate: { path: "company_id" },
    });
    // .populate("company_id");
    res.status(200).json({
      success: true,
      saved_jobs: all_saved_jobs,
    });
  } catch (error) {
    next(errorHandler(550, "Error getting saved jobs"));
  }
};
