import React from "react";
import { createSlice } from "@reduxjs/toolkit";


export const productSlice = createSlice({
    name:"products",
    initialState:{
        products:[]
    },
    reducers:{
        setProducts:(state,action)=>{
            state.products = action.payload;
        }
    },
})

export const productActions = productSlice.actions;