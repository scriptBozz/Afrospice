import { Product } from "../../types/type";
import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  productDetail: null | Product;
};

const initialState: InitialState = {
  productDetail: null,
};

const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {
    GetProductDetail: (state, action) => {
      state.productDetail = action.payload;
    },
  },
});

export const productDetailActions = productDetailSlice.actions;
export const productDetailReducer = productDetailSlice.reducer;
export default productDetailReducer;
