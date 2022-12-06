import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveNewExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col space-y-2 md:space-y-0 
        md:grid md:grid-cols-2 gap-3"
    >
      <div className="expense-form-control">
        <label>Title</label>
        <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
      </div>
      <div className="expense-form-control">
        <label>Amount</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          value={enteredAmount}
          onChange={amountChangeHandler}
        />
      </div>
      <div className="expense-form-control">
        <label>Date</label>
        <input type="date" value={enteredDate} onChange={dateChangeHandler} />
      </div>
      <div className="expense-form-control md:row-start-3 md:col-start-2 md:justify-self-center">
        <button
          type="button"
          className="btn btn__red w-full"
          onClick={props.onCancel}
        >
          Cancel
        </button>
        <button type="submit" className="btn btn__indigo w-full">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
