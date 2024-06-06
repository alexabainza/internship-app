import express from "express";
import {
  register,
  login,
  registerCompany,
  loginCompany,
} from "../controller/auth.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/company-register", registerCompany);
router.post("/company-login", loginCompany);

export default router;
