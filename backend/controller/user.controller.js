import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const get_profile_data = async (req, res, next) => {
  const { username } = req.params;
  try {
    const profile = await User.findOne({ username: username });
    if (!profile) {
      return res.status(404).json({
        success: false,
        message: `Profile not found for username: ${username}`,
      });
    }
    const { password, ...userDetails } = profile._doc;
    res.status(200).json({
      success: true,
      userDetails,
    });
  } catch (error) {
    next(errorHandler(550, "Error getting profile"));
  }
};
