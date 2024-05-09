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
