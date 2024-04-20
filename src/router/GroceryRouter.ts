import BaseRoutes from "./base/BaseRouter";
import GroceryController from "../controller/GroceryController";
import validate from "../helper/validate";
import {
  createGrocerySchema,
  updateGrocerySchema,
} from "../schema/GroceryScehma";

class GroceryRoutes extends BaseRoutes {
  public routes(): void {
    this.router.post(
      "",
      validate(createGrocerySchema),
      GroceryController.create
    );
    this.router.patch(
      "/:id",
      validate(updateGrocerySchema),
      GroceryController.update
    );
    this.router.delete("/:id", GroceryController.delete);
    this.router.get("", GroceryController.findAll);
    this.router.get("/:id", GroceryController.findById);
  }
}

export default new GroceryRoutes().router;
