import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import {
  send_application,
  get_applications,
  edit_application,
} from "../controller/application.controller.js";
const router = express.Router();
router.post("/:job_id/apply", verifyToken, send_application);
router.get("/get-applications", verifyToken, get_applications);
router.put(
  "/edit_application_status/:application_id",
  verifyToken,
  edit_application
);
export default router;
