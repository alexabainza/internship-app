import express from "express";
import {
  register,
  login,
  registerCompany,
  loginCompany,
  logout,
} from "../controller/auth.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/setup", registerCompany);
router.post("/company-login", loginCompany);
router.post("/logout", logout);

export default router;
