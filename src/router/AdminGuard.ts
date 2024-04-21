import jwt from "jsonwebtoken";
import { RequestHandler } from "express";
import { User } from "../models/User";

const adminGuard: RequestHandler = async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.user_id.id,
      },
    });
    console.log(user?.name);
    if (user?.role === "normal") {
      throw new Error("Can't do requested operation for current user");
    }
    next();
  } catch (err) {
    res.status(400).send("Can't do requested operation for current user");
  }
};

export default adminGuard;
