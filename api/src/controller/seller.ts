import { s_createSeller } from "../services/seller";
import { Request, Response } from "express";
import seller from "../models/seller";

export const createSeller = async (req: Request, res: Response) => {
   try {
     const {storename, description, email, password } = req.body;
     const newuser = new seller({
       storename,
       description,
       email,
       password,
     });
     const user = await s_createSeller(newuser);
     res.status(200).json(user);
   } catch (error) {
     console.log(error);
   }
}