import {addExpense, editExpense, removeExpense} from '../../actions/expenses'; 

test('should setup  remove expense action object',()=>{
   const action = removeExpense({id:'123xyz'});
   expect(action).toEqual({
     type: 'REMOVE_EXPENSE',
     id:'123xyz'
   });
});

test('should setup edit expense action object',()=>{
  const action = editExpense('123xyz',{note:'New note value'});
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id:'123xyz',
    updates:{note:'New note value'}
  });
});