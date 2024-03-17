import { Router } from "express";
import { createUser, getUsers } from "../controller/user";
import User from "../models/user";

const router = Router();
router.post("/user", createUser);
router.get("/users", getUsers);
// router.get("/product", getProductById);

export default router;
