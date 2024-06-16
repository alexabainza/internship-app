import express from "express";
import {
  create_post,
  get_profile_data,
  edit_company_data,
  get_job_applicants,
} from "../controller/company.controller.js";
import { verifyCompany, verifyToken } from "../utils/verifyUser.js";

const router = express.Router();
router.post("/create-post", verifyToken, create_post);
router.get("/:username", get_profile_data);
router.post("/:username/edit", verifyToken, edit_company_data);
router.get("/:job_id/applicants", verifyCompany, get_job_applicants);

export default router;
