import { useState } from "react";
import Card from "../ui/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const changeYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <div className="flex flex-col bg-slate-700 rounded-xl">
      <ExpensesFilter
        selected={filteredYear}
        onChangeYear={changeYearHandler}
      />
      <Card className="p-8 text-white">
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
