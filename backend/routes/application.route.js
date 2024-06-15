import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { send_application } from "../controller/application.controller.js";
const router = express.Router();
router.post("/:job_id/apply", verifyToken, send_application);
export default router;
