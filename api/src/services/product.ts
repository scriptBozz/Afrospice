import Product, { ProductDocument } from "../models/product";

export const s_createProduct = async (
  Product: ProductDocument
): Promise<ProductDocument | undefined> => {
  try {
    return Product.save();
  } catch (error) {
    console.log(error);
  }
};

export const s_getAllProducts = async (): Promise<
  ProductDocument[] | undefined
> => {
  try {
    return Product.find();
  } catch (error) {
    console.log(error);
  }
};

export const s_getProductById = async (
  productId: string
): Promise<ProductDocument | null> => {
  try {
    const result = await Product.findById(productId);
    if (!result) {
      return null; // Product not found
    }
    return result;
  } catch (err) {
    console.error("Error retrieving product by ID:", err);
    throw err; // Throw the error for callers to handle
  }
};

export default { s_getAllProducts, s_createProduct, s_getProductById };
