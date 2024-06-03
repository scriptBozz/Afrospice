import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { fetchProductData } from "../redux/thunk/products";
import Productitem from "./productitem";
import Loading from "./loading";

export default function ProductList() {
  const products = useSelector((state: RootState) => state.products.products);

  const dispatch = useDispatch<AppDispatch>();

  const productList = products;

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  if (!products) {
    return <Loading />;
  }
  return (
    <div className="product-div">
      {productList.map((item) => {
        return <Productitem key={item._id} product={item} />;
      })}
    </div>
  );
}
