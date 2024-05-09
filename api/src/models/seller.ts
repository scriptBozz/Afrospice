import mongoose, { Schema, Document } from "mongoose";

export type SellerDocument = Document & {
  storename: string;
  description: string;
  firstname: string;
  lastName: string;
  category: string;
  email: string;
  password: string;
  image: string;
  products: [{}];
  location: string;
};

const sellerSchema = new mongoose.Schema({
  storename: { type: String },
  descrition: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  category: { type: String, enum: ["customer", "seller"] },
  email: { type: String },
  password: { type: String },
  image: { type: String },
  product: { type: String },
  location: { type: String },
});

export default mongoose.model<SellerDocument>("Sellers", sellerSchema);
