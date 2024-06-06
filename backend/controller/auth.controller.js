import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
import Company from "../models/company.model.js";

export const register = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json("User created successfully!");
  } catch (error) {
    next(errorHandler(550, "Error registering user"));
  }
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "User not found"));
    const validPassword = bcryptjs.compare(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "Wrong credentials"));
    const token = jwt.sign(
      { id: validUser._id, role: validUser.role },
      process.env.JWT_SECRET
    );
    const { password: pass, ...userInfo } = validUser._doc;

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(userInfo);
  } catch (error) {
    next(error);
  }
};

export const registerCompany = async (req, res, next) => {
  const {
    company_name,
    company_address,
    company_email,
    company_contact_no,
    password,
  } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newCompany = new Company({
    company_name,
    company_address,
    company_email,
    company_contact_no,
    password: hashedPassword,
  });
  try {
    await newCompany.save();
    res.status(201).json("Company created successfully!");
  } catch (error) {
    next(errorHandler(550, "Error registering company"));
  }
};

export const loginCompany = async (req, res, next) => {
  const { company_email, password } = req.body;
  try {
    const validCompany = await Company.findOne({ company_email });
    if (!validCompany) return next(errorHandler(404, "Company not found"));
    const validPassword = bcryptjs.compare(password, validCompany.password);
    if (!validPassword) return next(errorHandler(401, "Wrong credentials"));
    const token = jwt.sign(
      { id: validCompany._id, role: validUser.role },
      process.env.JWT_SECRET
    );
    const { password: pass, ...companyInfo } = validCompany._doc;

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(companyInfo);
  } catch (error) {
    next(error);
  }
};
