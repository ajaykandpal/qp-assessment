import BaseRoutes from "./base/BaseRouter";
import GroceryController from "../controller/GroceryController";
import validate from "../helper/validate";
import {
  createGrocerySchema,
  updateGrocerySchema,
} from "../schema/GroceryScehma";
import authGuard from "./AuthGuard";
import adminGuard from "./AdminGuard";

class GroceryRoutes extends BaseRoutes {
  public routes(): void {
    this.router.post(
      "",
      validate(createGrocerySchema),
      authGuard,
      adminGuard,
      GroceryController.create
    );
    this.router.patch(
      "/:id",
      authGuard,
      adminGuard,
      validate(updateGrocerySchema),
      GroceryController.update
    );
    this.router.delete("/:id", authGuard, adminGuard, GroceryController.delete);
    this.router.get("", authGuard, GroceryController.findAll);
    this.router.get("/:id", authGuard, GroceryController.findById);
  }
}

export default new GroceryRoutes().router;
