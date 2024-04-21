import jwt from "jsonwebtoken";
import { RequestHandler } from "express";

const authGuard: RequestHandler = (req, res, next) => {
  //   console.log(req.headers?.authorization);
  const token = req.headers?.authorization?.split(" ")[1];
  if (!token) return res.status(401).send("Unauthorized request");

  try {
    const payload = jwt.verify(token, "shhhh");
    // req.user = payload;
    req.user_id = payload;
    next();
  } catch (ex) {
    res.status(400).send("Invalid token");
  }
};

export default authGuard;
