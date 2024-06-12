import express from "express";
import {
  create_post,
  get_profile_data,
  edit_company_data,
  get_company_postings,
} from "../controller/company.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();
router.post("/create-post", verifyToken, create_post);
router.get("/:username", get_profile_data);
router.post("/:username/edit", verifyToken, edit_company_data);
router.get("/:company_id/getPostings", get_company_postings);
export default router;
