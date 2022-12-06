import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
    
  if (props.items.length === 0) {
    return <h2 className="text-xl">No expenses found</h2>;
  }

  return (
    <ul className="flex flex-col space-y-10 ">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
