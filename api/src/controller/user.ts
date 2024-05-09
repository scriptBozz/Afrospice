import {
  s_getusers,
  s_createUser,
  s_getUserById,
  s_updateUserById,
  s_findUserByEmail,
} from "../services/user";
import { Request, Response } from "express";
import User from "../models/user";

import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const JWT_SECRET = process.env.jwt_Secret as string;

export const createUser = async (req: Request, res: Response) => {
  try {
    const { userName, firstName, lastName, email, password } = req.body;
    const newuser = new User({
      userName,
      firstName,
      lastName,
      email,
      password,
    });
    const user = await s_createUser(newuser);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await s_getusers();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const _id = req.params._id;
    const userdetail = await s_getUserById(_id);
    res.status(200).json(userdetail);
  } catch (err) {
    console.log(err);
  }
};

export const updateUserById = async (req: Request, res: Response) => {
  try {
    const userid = req.params.id;
    // const {username, category} = req.body
    const newinfo = req.body;
    const founduser = await s_updateUserById(userid, newinfo);
    res.status(200).json(founduser);
  } catch (err) {
    console.log(err);
  }
};

export const loginWithPassword = async (req: Request, res: Response) => {
  try {
    const foundUserData = await s_findUserByEmail(req.body.email);
    if (!foundUserData) {
      res.status(403).json({ message: "user do not have an account" });
      return;
    }
    // res.json(foundUserData); 
    const token = jwt.sign(
      {
        email: foundUserData.email,
        username: foundUserData.userName,
        _id: foundUserData._id,
      },
      JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.json({ foundUserData, token }); //token
  } catch (error) {
    console.log(error);
  }
};
