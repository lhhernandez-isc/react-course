import React from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ( props ) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="p-5 bg-violet-300 rounded-xl">
      <ExpenseForm onSaveNewExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
