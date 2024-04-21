import BaseRoutes from "./base/BaseRouter";
import UserController from "../controller/UserController";
// import validate from "../helper/validate";
// import {
//   createGrocerySchema,
//   updateGrocerySchema,
// } from "../schema/GroceryScehma";

class UserRoutes extends BaseRoutes {
  public routes(): void {
    console.log("inside login Router");
    this.router.post("/login", UserController.login);
    this.router.post("/register", UserController.register);
  }
}

export default new UserRoutes().router;
