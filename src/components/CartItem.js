import React from "react";
import { useDispatch } from "react-redux";
import "./Cart.css";
import { cartActions } from "../reducers/cart-slicer";

const CartItem = ({ name, quantity, total, price, id,image }) => {


  const dispatch = useDispatch();

  const removeItem = ()=>{
    dispatch(cartActions.removeItem({ name, quantity, total, price, id,image }))
  }

  const addItem=()=>{
    dispatch(cartActions.addItemToCart({ name, quantity, total, price, id,image }))
  }

  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>
      <button className="cart-actions" onClick={removeItem}>
        -
      </button>
      <button className="cart-actions" onClick={addItem}>
        +
      </button>
    </div>
  );
};

export default CartItem;
