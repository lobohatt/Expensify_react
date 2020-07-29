import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem  from './ExpenseListItem';
import getVisibleExpenses from '../selectors/expenses';

const  ExpenseList = (props) => (
  <div>
  <h1>Expense List</h1>
  {props.name}
  {props.expenses.length}
  {props.expenses.map((expense)=>{
    return <ExpenseListItem  key={expense.id}  {...expense} />
  })}
  </div>
);

//const connectedExpenseList = connect()(ExpenseList);



/*export default connect((state)=>{
  
 return {
       name:'Lobo',
       expenses: state.expenses
 };

})(ExpenseList);*/

/*const mapStateToProps = (state) => {
  return {
    name: 'Lobo',
    expenses: state.expenses,
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseList);*/


const mapStateToProps = (state) => {
  return {
    name: 'Lobo',
    expenses: getVisibleExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);


