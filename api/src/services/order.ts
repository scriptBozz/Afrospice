import { OrderDocument } from "../models/order";
import order from "../models/order";

export const s_createOrder = async (
  order: OrderDocument
): Promise<OrderDocument | undefined> => {
  try {
    return order.save();
  } catch (error) {
    console.log(error);
  }
};

 export const s_getOrderByUserId = async (userId: string): Promise<OrderDocument[]> => {
  const foundOrders = await order.find({ userId: userId });
  // give example
  // .populate({
  //   // populate to see the user detail
  //   path: "userId",
  // })
  if (!foundOrders) {
    console.log(`order with user id ${userId} not found`);
  }
  return foundOrders;
};