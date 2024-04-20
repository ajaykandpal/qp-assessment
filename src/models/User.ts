import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
  tableName: User.USER_TABLE_NAME,
})
export class User extends Model {
  public static USER_TABLE_NAME = "user" as string;
  public static USER_ID = "id" as string;
  public static USER_NAME = "name" as string;
  public static USER_EMAIL = "email" as string;
  public static USER_PASSWORD = "password" as string;
  public static USER_ROLE = "role" as string; //admin or normal

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: User.USER_ID,
  })
  id!: number;

  @Column({
    type: DataType.STRING(100),
    field: User.USER_NAME,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING(100),
    field: User.USER_EMAIL,
    allowNull: false,
  })
  email!: string;

  @Column({
    type: DataType.STRING(100),
    field: User.USER_PASSWORD,
    allowNull: false,
  })
  password!: string;

  @Column({
    type: DataType.STRING(10),
    field: User.USER_ROLE,
    defaultValue: "normal",
  })
  role!: string;
}
