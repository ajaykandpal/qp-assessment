import express, { Application, Request, Response } from "express";
import Database from "./config/database";
import GroceryRouter from "./router/GroceryRouter";

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
    //signup
    //login
  }
}

const port = 8000;
const app = new App().app;

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
