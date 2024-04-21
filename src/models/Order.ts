import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
  tableName: Order.ORDER_TABLE_NAME,
})
export class Order extends Model {
  public static ORDER_TABLE_NAME = "order" as string;
  public static ORDER_ID = "id" as string;
  public static ORDER_USER = "user" as string;

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: Order.ORDER_ID,
  })
  id!: number;

  @Column({
    type: DataType.INTEGER,
    field: Order.ORDER_USER,
    references: {
      model: "user",
      key: "id",
    },
  })
  user!: number;
}
