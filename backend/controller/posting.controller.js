import JobPosting from "../models/job_posting.model.js";
import { errorHandler } from "../utils/error.js";

export const get_company_postings = async (req, res, next) => {
  const { company_id } = req.params;
  try {
    const postings = await JobPosting.find({ company_id: company_id });
    res.status(200).json({
      success: true,
      postings,
    });
  } catch (error) {
    next(errorHandler(550, "Error getting postings"));
  }
};

export const delete_posting = async (req, res, next) => {
  const post = await JobPosting.findById(req.params.posting_id);
  if (!post) {
    return next(errorHandler(404, "Posting not found"));
  }
  if (req.user.id !== post.company_id) {
    return next(errorHandler(401, "You can only delete your own listings"));
  }

  try {
    await JobPosting.findByIdAndDelete(req.params.posting_id);
    res.status(200).json("Listing has been deleted!");
  } catch (error) {
    next(error);
  }
};
