import mongoose, { Schema, Document } from "mongoose";

export type UserDocument = Document & {
  
  username: string;
  firstName: string;
  lastName: string;
  category: string;
  email: string;
  image: string;
};

const productSchema = new mongoose.Schema({
  
  username: { type: String },
  firstname: { type: String },
  lastName: { type: String },
  category: { type: String },
  email: { type: String },
  image: { type: String },
});

export default mongoose.model<UserDocument>("Users", productSchema);
