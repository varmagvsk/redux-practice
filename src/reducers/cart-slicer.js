import React from "react";
import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name:'cart',
    initialState:{
        itemsList:[],
        showCart:false,
        cartCount:0,
    },
    reducers:{
        showCartStatus:(state)=>{
            state.showCart = !state.showCart
        },
        addItemToCart:(state,action)=>{
            let item = state.itemsList.find(item=>item.id==action.payload.id)
            if(item){
                item.quantity+=1;
                item.totalPrice += action.payload.price;
            }else{
                state.itemsList.push(
                    {
                        price:action.payload.price,
                        quantity:1,
                        totalPrice: action.payload.price,
                        id:action.payload.id,
                        name:action.payload.name,
                        imgURL: action.payload.imgURL
                    }
                )
            }
            state.cartCount++;
        },
        removeItem:(state,action)=>{
            //console.log(action.payload.quantity)
            if(action.payload.quantity ==1){
                //console.log('came')
                state.itemsList = state.itemsList.filter((item)=>item.id != action.payload.id);
            }else{
                let item = state.itemsList.find((it)=>it.id==action.payload.id);
                item.totalPrice = item.totalPrice - action.payload.price;
                item.quantity -= 1;
            }
            state.cartCount--;
        }
    }
})

export const cartActions = cartSlice.actions