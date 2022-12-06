import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [openForm, setOpenForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const addNewExpenseHandler = () => {
    setOpenForm((prevOpenForm) => !prevOpenForm);
  };

  return (
    <div className="p-5 bg-violet-300 rounded-xl">
      {openForm ? (
        <ExpenseForm 
          onSaveNewExpenseData={saveExpenseDataHandler} 
          onCancel={addNewExpenseHandler}  
        />
      ) : (
        <button
          className="btn btn__submit block mx-auto"
          onClick={addNewExpenseHandler}
        >
          Add new expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;
