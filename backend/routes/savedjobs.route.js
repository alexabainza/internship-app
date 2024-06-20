import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { save_job } from "../controller/saved_jobs.controller.js";
const router = express.Router();
router.post("/:job_id/save", verifyToken, save_job);
export default router;
