import express from "express";
import {
  register,
  login,
  registerCompany,
} from "../controller/auth.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/company-register", registerCompany);

export default router;
