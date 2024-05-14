import { AppDispatch } from "../store";
import  { userActions } from "../slices/user";



export const fetchUserData = () => {
  const userurl = `http://localhost:8000/user`;
  return async (dispatch: AppDispatch) => {
    const response = await fetch(userurl);
    const userData = await response.json();

    dispatch(userActions.getUsers(userData));
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
