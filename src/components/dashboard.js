import React from "react";
import { connect } from "react-redux";
import { setTextFilter } from "../actions/filters";

const Dashboard = (props) => {
    return (
        <div>
            <h1>Expensify</h1>
            <input value={props.filters.text} onChange={(e)=>{
                props.dispatch(setTextFilter(e.target.value))
            }}/>
            <h2>{props.expenses}</h2>
            <h2>{props.filters}</h2>
        </div>
    );
}


export default connect((state) => {
    return {
    expenses: state.expenses.length,
    filters: state.filters.text
    }
})(Dashboard)