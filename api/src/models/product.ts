import mongoose, { Document, Schema } from "mongoose";

export type Review = Document & {
  id: string;
  comment: string;
  date: string;
};
export type Likes = Document & {
  userid: string;
  like: string;
  date: string;
};

export type ProductDocument = Document & {
  
  title: string;
  category: string;
  price: string;
  likes: number;
  review: Review[];
  vendor: string;
  image: string;
  description: string;
};

const productSchema = new mongoose.Schema({
  
  title: { type: String },
  category: { type: String , enum:["spice", "meal"]},
  price: { type: String },
  likes: { type: Number },
  review: [
    { id: { type: String }, comment: { type: String }, date: { type: String } },
  ],
  vendor: {
    type: String,
    required: true,
  },
  image: { type: String },
  description: { type: String },
});

export default mongoose.model<ProductDocument>("Products", productSchema);
