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
import bcrypt from "bcrypt";

dotenv.config();
const JWT_SECRET = process.env.jwt_Secret as string;

export const createUser = async (req: Request, res: Response) => {
  try {
    const { userName, firstName, lastName, email, password } = req.body;
    //hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // initialize new user
    const newuser = new User({
      userName,
      firstName,
      lastName,
      email,
      password: hashedPassword, //hash the new users password to be sent to backend
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
    const id = req.params.id;
    const userdetail = await s_getUserById(id);
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
  const { email, password } = req.body;
  try {
    const foundUserData = await s_findUserByEmail(email);
    if (!foundUserData) {
      res.status(403).json({ message: "user do not have an account" });
      return;
    }
    //hashing the password
    const hashedPassword = foundUserData.password;
    const isCorrectPass = await bcrypt.compare(password, hashedPassword);
    if (!isCorrectPass) {
      res.status(403).json({ message: "wrong credentials" });
      return;
    }

    //token
    const token = jwt.sign(
      {
        email: foundUserData.email,
        username: foundUserData.userName,
        id: foundUserData._id,
      },
      JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.json({ foundUserData, token });
  } catch (error) {
    console.log(error);
  }
};
