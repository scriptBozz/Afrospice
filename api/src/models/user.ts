import mongoose, { Schema, Document } from "mongoose";

export type UserDocument = Document & {
  userName: string;
  firstName: string;
  lastName: string;
  category: string;
  email: string;
  password: string;
  image: string;
};

const userSchema = new mongoose.Schema({
  userName: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  category: { type: String, enum: ["customer", "seller"] },
  email: { type: String },
  password: { type: String },
  image: { type: String },
});

export default mongoose.model<UserDocument>("Users", userSchema);
