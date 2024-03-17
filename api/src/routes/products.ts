import { Router } from "express";
import { createProduct, getProducts, getproductById } from "../controller/product";

const router = Router();

router.post('/', createProduct)
router.get('/', getProducts)
router.get('/:id', getproductById)


export default router;

