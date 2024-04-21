import {
  Model,
  Table,
  Column,
  DataType,
  ForeignKey,
} from "sequelize-typescript";
import { Order } from "./Order";

@Table({
  tableName: Grocery.GROCERY_TABLE_NAME,
})
export class Grocery extends Model {
  public static GROCERY_TABLE_NAME = "grocery" as string;
  public static GROCERY_ID = "id" as string;
  public static GROCERY_NAME = "name" as string;
  public static GROCERY_STOCK = "stock" as string;
  public static GROCERY_DESCRIPTION = "description" as string;
  public static GROCERY_PRICE = "price" as string;

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: Grocery.GROCERY_ID,
  })
  id!: number;

  @Column({
    type: DataType.STRING(100),
    field: Grocery.GROCERY_NAME,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING(255),
    field: Grocery.GROCERY_DESCRIPTION,
  })
  description!: string;

  @Column({
    type: DataType.INTEGER,
    field: Grocery.GROCERY_STOCK,
  })
  stock!: number;

  @Column({
    type: DataType.INTEGER,
    field: Grocery.GROCERY_PRICE,
  })
  price!: number;
}
