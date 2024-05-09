import user from "../models/user";
import { UserDocument } from "../models/user";

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
export const s_getUserById = async (
  id: string
): Promise<UserDocument | undefined | null> => {
  try {
    return user.findById(id);
  } catch (error) {
    console.log(error);
  }
};

export const s_findUserByEmail = async (userEmail: string) => {
  const foundUser = await user.findOne({ email: userEmail });
  if (!foundUser) {
    console.log("User not found");
  } else {
    return foundUser;
  }
};

export const s_updateUserById = async (id: string, newinfo: Partial<UserDocument>) => {
  const foundUser = await user.findByIdAndUpdate(id, newinfo, { new: true });
  if (!foundUser) {
    console.log("user not found ");
  } else {
    return foundUser;
  }
};
