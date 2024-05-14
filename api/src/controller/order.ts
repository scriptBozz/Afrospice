
import { s_createOrder, s_getOrderByUserId } from "../services/order";
import order from "../models/order";
import { Request, Response } from "express";

export const createOrder = async (req: Request, res: Response) => {
    try {
        const neworder = new order({
            userId: req.params.userId,
            orderedProduct: req.body.orderedProduct
        });
        const orders = await s_createOrder(neworder)
        res.status(200).json(orders)
    } catch (err) {
        console.log(err)
    }
};

export const getOrderListByUserId = async (
  req: Request,
  res: Response,
  
) => {
  try {
    const userId = req.params.id;
    const orderList = await s_getOrderByUserId(userId);
    res.status(200).json(orderList);
  } catch (error) {
    console.log(error);
  }
};