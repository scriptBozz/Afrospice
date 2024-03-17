import { AppDispatch } from "../store";
import { UserAction } from "../slices/user";


export const fetchProductData = () => {
  const productsurl = `http://localhost:8000/users`;
  return async (dispatch: AppDispatch) => {
    const response = await fetch(productsurl);
    const productData = await response.json();

    dispatch(UserAction.getUsers(productData));
  };
};

// export const fetchProductDetail = (productId: String) => {
//   const productDetailurl = `http://localhost:8000/product/${productId}`;
//   return async (dispatch: AppDispatch) => {
//     const response = await fetch(productDetailurl);
//     const productDetailData = await response.json();

//     dispatch(productDetailActions.GetProductDetail(productDetailData));
//   };
// };
