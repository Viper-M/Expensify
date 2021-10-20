import { createStore, combineReducers } from "redux";
import { v4 } from "uuid";

const addExpense = ({description = '', note = '', amount = 0, createAt = 0} = {}) => ({
    type: 'ADDEXPENSE',
    expense: {
    id: v4(),
    description,
    note,
    amount,
    createAt
    }
})

const removeExpense = ({id} = {}) => ({
    type: 'REMOVEEXPENSE',
    id
})

const editExpense = ({id, update} = {}) => ({
    type: 'EDITEXPENSE',
    id,
    update
})

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case "ADDEXPENSE":
            return [
                ...state, action.expense
            ];
        case "REMOVEEXPENSE":
            return state.filter(({id})=>{
                    id !== action.id
                })
        case "EDITEXPENSE":
            return state.map((expense)=>{
                if(expense.id == action.id) {
                    return {
                        ...expense, ...action.updates
                    }
                }
            })          
        default: {return state;}
    }
}

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        default: {return state;}
    }
}

const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
}))

store.subscribe(() => {
    console.log(store.getState())
})

const expenseone = store.dispatch(addExpense({description:"Rent", amount:20000}))
const expensetwo = store.dispatch(addExpense({description:"Coffee", amount:70}))
store.dispatch(editExpense(expenseone.expense.id, {amout: 500}))

store.dispatch(removeExpense({id: expensetwo.expense.id}))


