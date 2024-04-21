import { Request, Response } from "express";
import { Order } from "../models/Order";
import { Cart } from "../models/Cart";

class OrderController {
  async addOrder(req: Request, res: Response) {
    //insert in order table userid, get order number
    let order;
    console.log(req.user_id.id);
    try {
      order = await Order.create({
        user: req.user_id.id,
      });
    } catch (error) {
      console.log(error);
      throw new Error("Failed to Order!");
    }
    // insert in cart table, order id and items from req.body
    if (order) {
      const {
        item1,
        item2,
        item3,
        item4,
        item5,
        item6,
        item7,
        item8,
        item9,
        item10,
      } = req.body;
      try {
        await Cart.create({
          order: order?.id,
          item1,
          item2,
          item3,
          item4,
          item5,
          item6,
          item7,
          item8,
          item9,
          item10,
        });
      } catch (error) {
        console.log(error);
        throw new Error("Failed to Insert in Cart!");
      }
    }
    res.status(200).json({
      status: "Ok!",
      message: "Successfully Created Order",
    });
  }
}

export default new OrderController();
