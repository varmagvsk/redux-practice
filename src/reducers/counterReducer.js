import React from "react"
import {createSlice} from "@reduxjs/toolkit"

export const counterSlice = createSlice({
    name:'counter',
    initialState:{
        counter:0
    },
    reducers:{
        increment:(state,action)=>{
            state.counter+=1;
        },
        decrement:(state,action)=>{
            state.counter-=1;
        },
        addmore:(state,action)=>{
            state.counter+=action.payload
        }
    }
})

export const actions = counterSlice.actions;
export default counterSlice.reducer