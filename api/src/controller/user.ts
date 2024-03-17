import { s_getusers, s_createUser } from "../services/user";
import { Request, Response } from "express";
import User from "../models/user"



export const createUser = async(req: Request, res: Response)=> {
    try {
        const { _id,
            username,
            firstName,
            lastName,
            category,
            email,
            image } = req.body;
        const newuser = new User({
          _id,
          username,
          firstName,
          lastName,
          category,
          email,
          image,
        });
        const user = await s_createUser(newuser);
        res.status(200).json(user)
    }catch(error){console.log(error)}
    
}


export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await s_getusers();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
};
