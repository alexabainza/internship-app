import express from "express";
import { create_post } from "../controller/company.controller.js";

const router = express.Router();

router.post("/create-post", create_post);
export default router;
