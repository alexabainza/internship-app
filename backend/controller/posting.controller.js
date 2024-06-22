import Application from "../models/application.model.js";
import JobPosting from "../models/job_posting.model.js";
import { errorHandler } from "../utils/error.js";

export const get_company_postings = async (req, res, next) => {
  const { company_id } = req.params;
  try {
    const postings = await JobPosting.find({ company_id: company_id });
    const postingsWithApplicantCounts = await Promise.all(
      postings.map(async (posting) => {
        const applicantCounts = await Application.aggregate([
          { $match: { job_id: posting._id } },
          { $group: { _id: "$status", count: { $sum: 1 } } },
        ]);

        const counts = applicantCounts.reduce((acc, curr) => {
          acc[curr._id] = curr.count;
          return acc;
        }, {});

        return {
          ...posting._doc,
          applicantCounts: {
            total: await Application.countDocuments({ job_id: posting._id }),
            forInterview: counts["for interview"] || 0,
            notSuitable: counts["not suitable"] || 0,
            forScreening: counts["for screening"] || 0,
            toBeViewed: counts["to be viewed"] || 0,
          },
        };
      })
    );
    res.status(200).json({
      success: true,
      postings: postingsWithApplicantCounts,
    });
  } catch (error) {
    console.error(error);
    next(errorHandler(550, "Error getting postings"));
  }
};

export const delete_posting = async (req, res, next) => {
  const post = await JobPosting.findById(req.params.posting_id);
  if (!post) {
    return next(errorHandler(404, "Posting not found"));
  }

  if (req.user.id !== post.company_id.toString()) {
    return next(errorHandler(401, "You can only delete your own listings"));
  }

  try {
    await JobPosting.findByIdAndDelete(req.params.posting_id);
    res.status(200).json("Listing has been deleted!");
  } catch (error) {
    next(error);
  }
};

export const get_all_postings = async (req, res, next) => {
  try {
    const all_posts = await JobPosting.find().populate("company_id").exec();
    res.status(200).json({
      success: true,
      postings: all_posts,
    });
  } catch (error) {
    next(errorHandler(550, "Error getting postings"));
  }
};

export const get_one_posting = async (req, res, next) => {
  const { job_id } = req.params;
  try {
    const post = await JobPosting.findById(job_id);
    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Job does not exist",
      });
    }
    res.status(200).json({
      success: true,
      post: post,
    });
  } catch (error) {
    next(errorHandler(550, "Error getting job data"));
  }
};
