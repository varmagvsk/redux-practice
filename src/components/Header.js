import React from "react";
import Cart from "./Cart";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../reducers/auth-slicer";
import Notification from "./Notification";
const Header = () => {

  const dispatch = useDispatch();
  const logout =()=>{
    dispatch(authActions.logout())
  }

  const toast = useSelector((state)=>state.settings)
  //console.log(toast)
  const toastOpen = toast.toastOpen;

  return (
    <header>
    {toastOpen && <Notification type={toast.severity} message={toast.toastMessage}/>}
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <h2
              className="header-h2"
              style={{ fontFamily: "monospace", fontSize: "30px" }}
            >
              Redux Shopping App
            </h2>
          </li>
          <li>
            <Cart />
          </li>
          <li><button style={{padding:10,backgroundColor:'#333',color:'#fff',borderRadius:5}} onClick={logout}>logout</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
