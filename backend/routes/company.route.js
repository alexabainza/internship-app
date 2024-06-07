import express from "express";
import {
  create_post,
  get_profile_data,
} from "../controller/company.controller.js";

const router = express.Router();
router.post("/create-post", create_post);
router.get("/:username", get_profile_data);
export default router;
