

import { Router } from "express";
import { createUser, getUsers , getUserById, updateUserById, loginWithPassword} from "../controller/user";
import passport from "passport";


const router = Router();
router.post("/", createUser);
router.get("/", getUsers);
router.get("/:_id", getUserById);
router.put("/:id",passport.authenticate("jwt",{session:false}) ,updateUserById)
router.post("/login",loginWithPassword )

export default router;
