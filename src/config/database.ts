import { Sequelize } from "sequelize-typescript";
import * as dotenv from "dotenv";
import { Grocery } from "../models/Grocery";
import { User } from "../models/User";
dotenv.config();

class Database {
  public sequelize: Sequelize | undefined;

  private POSTGRES_DB = process.env.POSTGRES_DB as string;
  private POSTGRES_HOST = process.env.POSTGRES_HOST as string;
  private POSTGRES_PORT = process.env.POSTGRES_PORT as unknown as number;
  private POSTGRES_USER = process.env.POSTGRES_USER as unknown as string;
  private POSTGRES_PASSWORD = process.env
    .POSTGRES_PASSWORD as unknown as string;

  constructor() {
    // console.log("inside sequelise");
    this.connectToPostgreSQL();
  }

  private async connectToPostgreSQL() {
    // console.log("inside sequelise 1");
    this.sequelize = new Sequelize({
      database: this.POSTGRES_DB,
      username: this.POSTGRES_USER,
      password: this.POSTGRES_PASSWORD,
      host: this.POSTGRES_HOST,
      port: this.POSTGRES_PORT,
      dialect: "postgres",
      models: [Grocery, User],
    });

    await this.sequelize
      .authenticate()
      .then(() => {
        console.log("PostgreSQL Connection has been established successfully.");
      })
      .catch((err) => {
        console.error(" Unable to connect to the PostgreSQL database:", err);
      });
  }
}

export default Database;
