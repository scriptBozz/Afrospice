import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../types/type";

type InitialState = {
  products: Product[];
  loading: boolean;
  favourites: Product[];
};

const initialState: InitialState = {
  products: [],
  loading: true,
  favourites: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProductData: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
      state.loading = false;
    },
    likePost: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      const postIndex = state.products.findIndex(
        (product) => product._id === productId
      );
      if (postIndex !== -1) {
        state.products[postIndex].likes++;
      }
      console.log(postIndex);
    },
    addToFavourites: (state, action: PayloadAction<Product>) => {
      for (let i = 0; i < state.favourites.length; i++) {
        if (state.favourites[i]._id === action.payload._id) {
          alert("Product already in favourites");
          return; // Exit the function if the product is already in favourites
        }
      }
      state.favourites.push(action.payload);
    },

    removeFromFavourites: (state, action: PayloadAction<Product>) => {
      const result = state.favourites.filter(
        (item) => item._id !== action.payload._id
      );
      state.favourites = result;
    },
  },
});

export const productActions = productSlice.actions;
export const productReducer = productSlice.reducer;
