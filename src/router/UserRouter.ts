import BaseRoutes from "./base/BaseRouter";
import UserController from "../controller/UserController";

class UserRoutes extends BaseRoutes {
  public routes(): void {
    this.router.post("/login", UserController.login);
    this.router.post("/register", UserController.register);
  }
}

export default new UserRoutes().router;
