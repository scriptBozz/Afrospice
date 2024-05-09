
import seller from "../models/seller";
import { SellerDocument } from "../models/seller";

export const s_createSeller = async (seller:SellerDocument):Promise<SellerDocument | undefined> => {
    try {
        return seller.save()
    } catch (err) {
        console.log(err)
    }
}