import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import {
  save_job,
  delete_saved_job,
  get_saved_jobs,
} from "../controller/saved_jobs.controller.js";

const router = express.Router();
router.post("/:job_id/save", verifyToken, save_job);
router.delete("/:job_id/delete_saved", verifyToken, delete_saved_job);
router.get("/get-saved-jobs", verifyToken, get_saved_jobs);
export default router;
