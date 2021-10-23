export const addExpense = ({description = '', note = '', amount = 0, createdAt = 0} = {}) => ({
    type: 'ADDEXPENSE',
    expense: {
    id: v4(),
    description,
    note,
    amount,
    createdAt
    }
})

export const removeExpense = ({id} = {}) => ({
    type: 'REMOVEEXPENSE',
    id
})

export const editExpense = ({id, update} = {}) => ({
    type: 'EDITEXPENSE',
    id,
    update
})
