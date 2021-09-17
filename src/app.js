import React from "react";
import ReactDOM from "react-dom"
import { createStore } from "redux";

console.log('Jai matta di')

const store = createStore((state = { count: 4 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return console.log(state.count);
        default: return { state };
    }
});

const unsubscribe =  store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch({
    type: 'INCREMENT'
});