import { Grocery } from "../models/Grocery";

interface IGroceryRepo {
  save(grocery: Grocery): Promise<void>;
  update(grocery: Grocery): Promise<void>;
  delete(groceryId: number): Promise<void>;
  retrieveById(groceryId: number): Promise<Grocery>;
  retrieveAll(): Promise<Grocery[]>;
}

export class GroceryRepo implements IGroceryRepo {
  async save(grocery: Grocery): Promise<void> {
    try {
      await Grocery.create({
        name: grocery.name,
        description: grocery.description,
        stock: grocery.stock,
        price: grocery.price,
      });
    } catch (error) {
      console.log(error);
      throw new Error("Failed to create Grocery!");
    }
  }
  async update(grocery: Grocery): Promise<void> {
    try {
      const new_Grocery = await Grocery.findOne({
        where: {
          id: grocery.id,
        },
      });
      if (!new_Grocery) {
        throw new Error("Grocery not found!");
      }
      new_Grocery.name = grocery.name ?? new_Grocery.name;
      new_Grocery.description = grocery.description ?? new_Grocery.description;
      new_Grocery.stock = grocery.stock ?? new_Grocery.stock;
      new_Grocery.price = grocery.price ?? new_Grocery.price;

      await new_Grocery.save();
    } catch (error) {
      throw new Error("Failed to update Grocery!");
    }
  }
  async delete(groceryId: number): Promise<void> {
    try {
      const new_Grocery = await Grocery.findOne({
        where: {
          id: groceryId,
        },
      });
      if (!new_Grocery) {
        throw new Error("Grocery not found!");
      }

      await new_Grocery.destroy();
    } catch (error) {
      throw new Error("Failed to Delete the Grocery!");
    }
  }
  async retrieveById(groceryId: number): Promise<Grocery> {
    try {
      const new_Grocery = await Grocery.findOne({
        where: {
          id: groceryId,
        },
      });
      if (!new_Grocery) {
        throw new Error("Grocery not found!");
      }
      return new_Grocery;
    } catch (error) {
      throw new Error("Failed to find Grocery!");
    }
  }
  async retrieveAll(): Promise<Grocery[]> {
    try {
      return await Grocery.findAll();
    } catch (error) {
      throw new Error("Failed to find Grocery List!");
    }
  }
}
