import React from "react";
import { createSlice } from "@reduxjs/toolkit";

export const settingsSlice = createSlice({
    name:'setings',
    initialState:{
        toastMessage:"Toast",
        severity:"warning",
        toastOpen:false
    },
    reducers:{
        toast:(state,action)=>{
            state.toastOpen = action.payload.toastOpen;
            state.toastMessage = action.payload.toastMessage;
            state.severity = action.payload.severity
        },
        toastOpen:(state,action)=>{
            state.toastOpen = action.payload
        }
    }
})

export const settingActions = settingsSlice.actions;