import { Model, Table, Column, DataType } from "sequelize-typescript";
import { Col } from "sequelize/types/utils";

@Table({
  tableName: Cart.CART_TABLE_NAME,
})
export class Cart extends Model {
  public static CART_TABLE_NAME = "cart" as string;
  public static CART_ID = "id" as string;
  public static CART_ORDER = "order" as string;
  public static CART_ITEM1 = "item1" as string;
  public static CART_ITEM2 = "item2" as string;
  public static CART_ITEM3 = "item3" as string;
  public static CART_ITEM4 = "item4" as string;
  public static CART_ITEM5 = "item5" as string;
  public static CART_ITEM6 = "item6" as string;
  public static CART_ITEM7 = "item7" as string;
  public static CART_ITEM8 = "item8" as string;
  public static CART_ITEM9 = "item9" as string;
  public static CART_ITEM10 = "item10" as string;

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: Cart.CART_ID,
  })
  id!: number;

  @Column({
    type: DataType.INTEGER,
    field: Cart.CART_ORDER,
    references: {
      model: "order",
      key: "id",
    },
  })
  order!: number;

  @Column({
    type: DataType.INTEGER,
    field: Cart.CART_ITEM1,
    references: {
      model: "grocery",
      key: "id",
    },
  })
  item1!: number;

  @Column({
    type: DataType.INTEGER,
    field: Cart.CART_ITEM2,
    references: {
      model: "grocery",
      key: "id",
    },
  })
  item2!: number;

  @Column({
    type: DataType.INTEGER,
    field: Cart.CART_ITEM3,
    references: {
      model: "grocery",
      key: "id",
    },
  })
  item3!: number;

  @Column({
    type: DataType.INTEGER,
    field: Cart.CART_ITEM4,
    references: {
      model: "grocery",
      key: "id",
    },
  })
  item4!: number;

  @Column({
    type: DataType.INTEGER,
    field: Cart.CART_ITEM5,
    references: {
      model: "grocery",
      key: "id",
    },
  })
  item5!: number;

  @Column({
    type: DataType.INTEGER,
    field: Cart.CART_ITEM6,
    references: {
      model: "grocery",
      key: "id",
    },
  })
  item6!: number;

  @Column({
    type: DataType.INTEGER,
    field: Cart.CART_ITEM7,
    references: {
      model: "grocery",
      key: "id",
    },
  })
  item7!: number;

  @Column({
    type: DataType.INTEGER,
    field: Cart.CART_ITEM8,
    references: {
      model: "grocery",
      key: "id",
    },
  })
  item8!: number;

  @Column({
    type: DataType.INTEGER,
    field: Cart.CART_ITEM9,
    references: {
      model: "grocery",
      key: "id",
    },
  })
  item9!: number;
  @Column({
    type: DataType.INTEGER,
    field: Cart.CART_ITEM10,
    references: {
      model: "grocery",
      key: "id",
    },
  })
  item10!: number;
}
