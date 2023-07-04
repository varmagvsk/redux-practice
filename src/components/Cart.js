import React from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../reducers/cart-slicer";

const Cart = () => {
  const quantity = useSelector(state=>state.cart.cartCount)
  const dispatch = useDispatch();
  const showCart=()=>{
    dispatch(cartActions.showCartStatus());
  }
  return (
    <div className="cartIcon">
      <h3 onClick={showCart}>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
