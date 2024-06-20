import express from "express";
import { get_profile_data } from "../controller/user.controller.js";

const router = express.Router();

router.get("/:username", get_profile_data);

export default router;
