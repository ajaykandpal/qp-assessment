import { Request, Response } from "express";
import { User } from "../models/User";
import { UserRepo } from "../repos/UserRepo";
import jwt from "jsonwebtoken";

class UserController {
  async register(req: Request, res: Response) {
    try {
      const new_User = new User();
      const { name, email, password } = req.body;
      if (!(name && email && password)) {
        res.status(401).send("All fields are cumpolsory");
      }

      const existUser = await User.findOne({
        where: {
          email: email,
        },
      });

      if (existUser) {
        throw new Error("Email already exists");
      }

      new_User.name = name;
      new_User.email = email;
      new_User.password = password;
      new_User.role = req.body?.role;

      const user = await new UserRepo().register(new_User);

      if (user) {
        user.password = "";
        res.status(201).json({
          user,
        });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error! Can't create User",
      });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const user_details = {
        email: req.body.email,
        password: req.body.password,
      };
      if (!(user_details.email && user_details.password)) {
        res.status(400).send("Email and Password Required");
        return;
      }
      const new_User = await new UserRepo().login(user_details);

      //cookies

      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };
      // .cookie("token", new_User.token, options)
      res.status(200).json({
        status: "Ok!",
        message: "Successfully LoggedIn",
        data: new_User,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Wrong Password1!",
      });
    }
  }
}

export default new UserController();
