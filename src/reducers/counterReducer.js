import React from "react";


const counterReducer = (state={counter:10},action) => {
    if(action.type == 'INC'){
        //console.log(state.counter)
        return {counter:state.counter+1}
    }
    if(action.type=='DEC'){
        return {counter:state.counter-1}
    }

    if(action.type=='ADD'){
        return {counter:state.counter + action.payload}
    }
    return state;
}

export default counterReducer;