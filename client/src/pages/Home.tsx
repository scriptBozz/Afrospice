import React from "react";
import NavBar from "../components/navbar";
import Landing from "../components/landing";
import Footeritem from "../components/footeritem";
import Favourites from "../components/favourites";
import { Route, Routes } from "react-router-dom";
import Store from "../components/store";
import ProductDetail from "../components/productdetail";
import Wishlist from "../components/wishlist";
import Vendors from "../components/vendors";
import Login from "../components/registration/login";
import Register from "../components/registration/register";
import UserInformation from "../components/registration/userinformation";
import OrderList from "../components/order/orderList";
import CartList from "../components/order/cart/cartList";


export default function Home() {
  return (
    <div className="homepage">
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/favourites" element={<Favourites />}></Route>
        <Route path="/products" element={<Store />}></Route>
        <Route path="/product/:id" element={<ProductDetail />}></Route>
        <Route path="/user" element={<UserInformation />} />

        <Route path="/cart" element={<CartList />} />
        <Route path="/order" element={<OrderList />} />
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/vendors" element={<Vendors />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>

      <Footeritem />
    </div>
  );
}
