import { Request, Response } from "express";
import { Grocery } from "../models/Grocery";
import { GroceryRepo } from "../repos/GroceryRepo";

class GroceryController {
  async create(req: Request, res: Response) {
    try {
      const new_Grocery = new Grocery();
      new_Grocery.name = req.body.name;
      new_Grocery.description = req.body.description;
      new_Grocery.stock = req.body.stock;
      new_Grocery.price = req.body.price;

      await new GroceryRepo().save(new_Grocery);

      res.status(201).json({
        status: "Created!",
        message: "Successfully created Grocery!",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      let id = parseInt(req.params["id"]);
      await new GroceryRepo().delete(id);

      res.status(200).json({
        status: "Ok!",
        message: "Successfully deleted Grocery!",
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      let id = parseInt(req.params["id"]);
      const new_Grocery = await new GroceryRepo().retrieveById(id);

      res.status(200).json({
        status: "Ok!",
        message: "Successfully fetched Grocery by id!",
        data: new_Grocery,
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const new_Grocery = await new GroceryRepo().retrieveAll();

      res.status(200).json({
        status: "Ok!",
        message: "Successfully fetched all Grocery data!",
        data: new_Grocery,
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }

  async update(req: Request, res: Response) {
    try {
      let id = parseInt(req.params["id"]);
      const new_Grocery = new Grocery();

      new_Grocery.id = id;
      new_Grocery.name = req.body.name;
      new_Grocery.description = req.body.description;
      new_Grocery.stock = req.body.stock;
      new_Grocery.price = req.body.price;

      await new GroceryRepo().update(new_Grocery);

      res.status(200).json({
        status: "Ok!",
        message: "Successfully updated Grocery data!",
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }
}

export default new GroceryController();
