import React from "react";
import ReactDOM from "react-dom"
import {BrowserRouter, Route} from "react-router-dom"
import configureStore from "./store/configureStore";
import {addExpense} from "./actions/expenses"
import {setTextFilter} from "./actions/filters"
import getVisibleExpenses from "./selectors/expenses"
import './db/db';


const store = configureStore();

store.dispatch(addExpense({description: 'water bill'}))
store.dispatch(addExpense({description: 'gass bill'}))

store.dispatch(setTextFilter('gas'))

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses,state.filters)
console.log(visibleExpenses)

console.log(store.getState())

var routes = (
    <BrowserRouter>
    <div>
        <h1>Hello</h1>
        </div>
    </BrowserRouter>
)
ReactDOM.render(routes, document.getElementById('root'))