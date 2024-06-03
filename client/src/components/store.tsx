import React from 'react'
import ProductList from './products'
// import Favourites from './favourites'
// import Wishlist from './wishlist'


export default function store() {
 
  return (
    <div className="store">
      <div className="margin"></div>
      <ProductList />
    </div>
  );
}
