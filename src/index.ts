import express, { Application, Request, Response } from "express";
import Database from "./config/database";
import GroceryRouter from "./router/GroceryRouter";
import UserRouter from "./router/UserRouter";
import * as dotenv from "dotenv";
import cookieParser from "cookie-parser";

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.databaseSync();
    this.plugins();
    this.routes();
  }

  protected plugins(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieParser());
  }

  protected databaseSync(): void {
    // console.log("databaseSync");
    const db = new Database();
    db.sequelize?.sync();
  }

  protected routes(): void {
    this.app.route("/").get((req: Request, res: Response) => {
      res.send("Welcome to Ajay's Assignment");
    });

    this.app.use("/api/v1/grocery", GroceryRouter);
    this.app.use("/api/v1/users", UserRouter);
    //signup
    //login
  }
}

const port = process.env.PORT || 8000;
const app = new App().app;

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
