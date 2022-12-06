import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="p-5 bg-violet-300 rounded-xl">
      {!isEditing && (
        <button
          className="btn btn__indigo block mx-auto"
          onClick={startEditingHandler}
        >
          Add New Expense
        </button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveNewExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
