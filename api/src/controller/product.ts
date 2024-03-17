import { Request, Response } from "express";
import {s_createProduct,s_getAllProducts,s_getProductById,} from "../services/product";
import Product from "../models/product";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const {
      title,
      category,
      price,
      likes,
      review,
      vendor,
      image,
      description,
    } = req.body;
    const newproduct = new Product({
      title,
      category,
      price,
      likes,
      review,
      vendor,
      image,
      description,
    });

    const product = await s_createProduct(newproduct);
    res.status(200).json(newproduct);
  } catch (error) {
    console.log(error);
  }
};

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await s_getAllProducts();
    console.log(products, "products");
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
  }
};

export const getproductById = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;
    const product = await s_getProductById(productId);

    if (!product) {
      // If product is not found, send a 404 Not Found response
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    // Send an internal server error response
    res.status(500).json({ error: "Internal server error" });
  }
};
