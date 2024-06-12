import express from "express";
import {
  get_company_postings,
  delete_posting,
} from "../controller/posting.controller.js";
import { verifyToken } from "../utils/verifyUser.js";
const router = express.Router();

router.get("/:company_id/getPostings", get_company_postings);
router.delete("/:posting_id/delete", verifyToken, delete_posting);

export default router;
