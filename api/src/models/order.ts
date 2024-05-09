import mongoose, { Schema, Document } from "mongoose";
import { ProductDocument } from "./product";
import productSchema from "./product";

export type OrderDocument = Document & {
  createdAt: Date;
  productList: ProductDocument[];
  userId: string;
};

const orderSchema = new mongoose.Schema({
  createdAt: { type: Date, required: true, default: Date.now },
  productList: [productSchema],
  lastName: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

export default mongoose.model<OrderDocument>("Order", orderSchema);
