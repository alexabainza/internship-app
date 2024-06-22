import { errorHandler } from "./error.js";
import jwt from "jsonwebtoken";
export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return next(errorHandler(401, "Unauthorized"));
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(errorHandler(403, "Invalid Token"));
    req.user = user;
    next();
  });
};

export const verifyStudent = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.role === "Student") {
      next();
    } else {
      res.status(403).json("You are not allowed to access this page!");
    }
  });
};

export const verifyCompany = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.role === "Company") {
      next();
    } else {
      res.status(403).json("You are not allowed to access this page!");
    }
  });
};
