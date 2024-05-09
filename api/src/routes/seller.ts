import { Router } from "express";
import { createSeller} from "../controller/seller"


const router = Router();
router.post("/", createSeller);


export default router;