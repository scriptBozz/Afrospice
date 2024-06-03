import { Fragment, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { Button } from "@mui/material";
import { cartActions } from "../redux/slices/carts";
import { Product } from "../types/type";
import Loading from "./loading";

import { fetchProductDetail } from "../redux/thunk/products";

export default function ProductDetail() {
  const productDetail = useSelector(
    (state: RootState) => state.productDetail.productDetail
  );
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams<{ id: string }>();

  function onClickHandler(item: Product) {
    dispatch(cartActions.addCartList(item));
  }

  useEffect(() => {
    if (id) {
      dispatch(fetchProductDetail(id));
    }
  }, [dispatch, id]);

  if (!productDetail) {
    return <Loading/>; // Add more descriptive loading message
  }

  return (
    <Fragment>
      <div className="margin"></div>
      <div className="productDetail">
        <img
          src={productDetail.image}
          alt={productDetail.title}
          height="500px"
          className="pd-image"
        />
        <div className="pd-data">
          <p>{productDetail.title}</p>
          <p>Price: {productDetail.price}</p>
          <p>Category: {productDetail.category}</p>
          <p>
            - Members receive free standard shipping and free returns on
            purchases of at least €25
          </p>
        </div>
        <div
          style={{
            display: "flex",
            width: "500px",
            justifyContent: "space-between",
          }}
        >
          <Button
            variant="outlined"
            onClick={() => onClickHandler(productDetail)}
          >
            Add to cart
          </Button>
          <Link to="/cart">
            <Button variant="outlined">Back</Button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
}