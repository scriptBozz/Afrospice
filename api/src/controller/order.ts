import { s_createOrder } from "../services/order";
import order from "../models/order";
import { Request, Response } from "express";

export const createOrder = async (req: Request, res: Response) => {
    try { 
        const neworder = new order({
            userId: req.params.userid,
            productList:req.body.productList
        })
    } catch(err) {
        console.log(err)
    }
}