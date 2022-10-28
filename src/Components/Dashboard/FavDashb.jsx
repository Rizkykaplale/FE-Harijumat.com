import React from "react";
import { CartProvider } from "react-use-cart";
import ClassFavorite from "../Class/ClassFavorite";

function FavDashb(props) {
  return (
    <div>
      <CartProvider>
        <ClassFavorite />
      </CartProvider>
    </div>
  );
}

export default FavDashb;
