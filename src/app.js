import React from "react";
import ReactDOM from "react-dom"
import {BrowserRouter, Route} from "react-router-dom"
import Header from "./components/header";
import Dashboard from "./components/dashboard";
import './db/db';

var routes = (
    <BrowserRouter>
    <div>
        <Route path="/" component={Header} exact={true}></Route>
        <Route path="/create" component={Dashboard}></Route>
        </div>
    </BrowserRouter>
)
ReactDOM.render(routes, document.getElementById('root'))