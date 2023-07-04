import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useSelector } from "react-redux";
import { settingActions } from "./reducers/settings";
import { useDispatch } from "react-redux";
import { productActions } from "./reducers/product-slice";
import { authActions } from "./reducers/auth-slicer";
function App() {

  let isLoggedIn = useSelector((state)=>state.auth.isLoggedIn)
  let cartItems = useSelector((state)=>state.cart.itemsList)
  const cart = useSelector(state=>state.cart);
  //console.log(cartItems);
  const dispatch = useDispatch();
  const sendRequest = async ()=>{
    dispatch(settingActions.toast({
      toastMessage:"Sending request....",
      severity:"info",
      toastOpen:true
    }))
    const res = await fetch("https://redux-shopping-d6c20-default-rtdb.firebaseio.com/cartItem.json",{
      method:"PUT",
      body:JSON.stringify(cart)
    });
    const data = res.json();
    dispatch(settingActions.toast({
      toastMessage:"Request Sent",
      severity:"success",
      toastOpen:true
    }))

  }
  useEffect(()=>{
    if(cart.cartCount > 0){
      sendRequest().catch(err=>{
        dispatch(settingActions.toast({
          toastMessage:"Somethig went wrong!",
          severity:"error",
          toastOpen:true
        }))
      })
    }
    console.log('cart changed')
  },[cart])

  const products = useSelector(state=>state.products.products)


  const getProducts = async () => {
    let res = await fetch("https://fakestoreapi.com/products")
    let data = await res.json();
    console.log(data);
    dispatch(productActions.setProducts(data))
  }

  useEffect(()=>{
    if(products.length == 0){
      getProducts();
    }
  },[products])

  return (
    <div className="App">
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
