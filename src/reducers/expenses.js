const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case "ADDEXPENSE":
            return [
                ...state, action.expense
            ];
        case "REMOVEEXPENSE":
            return state.filter((expense)=>{
                    return expense.id !== action.id
                })
        case "EDITEXPENSE":
            return state.map((expense)=>{
                if(expense.id == action.id) {
                    return {
                        ...expense, ...action.update
                    }
                } else {
                    return {
                        ...expense
                    }
                }
            })          
        default: {return state;}
    }
}