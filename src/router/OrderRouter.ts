import BaseRoutes from "./base/BaseRouter";
import authGuard from "./AuthGuard";
import OrderController from "../controller/OrderController";

class OrderRouter extends BaseRoutes {
  public routes(): void {
    this.router.post("", authGuard, OrderController.addOrder);
  }
}

export default new OrderRouter().router;
