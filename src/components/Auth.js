import React from "react";
import "./Auth.css";
import { useDispatch } from "react-redux";
import { authActions } from "../reducers/auth-slicer";
import { settingActions } from "../reducers/settings";
const Auth = () => {

  const dispatch = useDispatch()
  const login=()=>{
    dispatch(authActions.login())
  }

  return (
    <div className="container">
      <h1>Login</h1>{" "}
      <form>
        <label htmlFor="id">Id</label>
        <input type="text" name="id" id="id" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button className="login-btn" onClick={login} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
