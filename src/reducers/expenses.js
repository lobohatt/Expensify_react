
// Expenses Reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {

  switch (action.type) {
    case 'ADD_EXPENSE':
      //  return  state.concat(action.expense);
      return [
        ...state,                       // array spread
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id
      );
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,                          // object spread
            ...action.updates
          };
        } else {
          return expense;
        }
      });
      case 'SET_EXPENSES':
        return action.expenses;
    default:
      return state;
  }
};

export default expensesReducer;
