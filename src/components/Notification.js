import React from "react";

import { Alert } from "@mui/material";
import { useDispatch } from "react-redux";
import { settingActions } from "../reducers/settings";
export default function Notification({type,message}){

    const dispatch = useDispatch()
    const closeAlert = ()=>{
        dispatch(settingActions.toastOpen(false))
    }

    return(
        <Alert onClose={closeAlert} severity={type}>{message}</Alert>
    )
}