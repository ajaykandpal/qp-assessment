import { User } from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

interface IUserRepo {
  register(user: User): Promise<User | void>;
  login(user_details: any): Promise<User>;
}

export class UserRepo implements IUserRepo {
  async register(user: User): Promise<User | void> {
    try {
      const created_user = await User.create({
        name: user.name,
        email: user.email,
        password: user.password,
        role: user?.role,
      });
      if (created_user) return created_user;
    } catch (error) {
      console.log(error);
      throw new Error("Failed to create User!");
    }
  }

  async login(user_details: any): Promise<User> {
    try {
      const user = await User.findOne({
        where: {
          email: user_details.email,
        },
      });
      if (!user) {
        throw new Error("User not found!");
      }
      //match password
      console.log(user_details.password, user.password);
      if (
        !(user_details.password === user.password)
        // (await bcrypt.compare(user_details.password, user.password))
      ) {
        throw new Error("Wrong Password!");
      }
      const token = jwt.sign({ id: user.id }, "shhhh", {
        expiresIn: "2h",
      });
      user.token = token;
      // await user.update({
      //   token: token,
      // });
      user.password = "";
      return user;
    } catch (error) {
      throw new Error("Failed to find User!");
    }
  }
}
