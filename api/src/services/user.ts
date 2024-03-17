import user from "../models/user";
import User, { UserDocument } from "../models/user";

export const s_createUser = async (
  user: UserDocument
): Promise<UserDocument | undefined> => {
  try {
    return user.save();
  } catch (error) {
    console.log(error);
  }
};

export const s_getusers = async (): Promise<UserDocument[] | undefined> => {
  try {
    return user.find();
  } catch (error) {
    console.log(error);
  }
};
