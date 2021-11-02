import React from "react";
import ReactDOM from "react-dom"
import {BrowserRouter, Route} from "react-router-dom"
import configureStore from "./store/configureStore";
import {addExpense} from "./actions/expenses"
import {setTextFilter, sortByAmount} from "./actions/filters"
import getVisibleExpenses from "./selectors/expenses"
import './db/db';
import { Provider } from "react-redux";
import Dashboard from "./components/dashboard";

const store = configureStore();

store.dispatch(addExpense({description: 'gass bill', amount: 250}))
store.dispatch(addExpense({description: 'water bill', amout: 1000}))
store.dispatch(addExpense({description: 'gass bill', amount: 1250}))
store.dispatch(addExpense({description: 'gass bill', amount: 750}))

console.log(store.getState())

store.dispatch(setTextFilter('Bingo'))

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses,state.filters)
console.log(visibleExpenses)


var routes = (
    <Provider store={store}>
    <BrowserRouter>
    <div>
        <Dashboard/>
        <h1>Hello</h1>
        </div>
    </BrowserRouter>
    </Provider>
)
ReactDOM.render(routes, document.getElementById('root'))