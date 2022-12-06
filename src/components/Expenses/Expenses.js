import Card from "../ui/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {

  const changeYearHandler = (selectedYear) => {
    console.log(selectedYear);
  };

  return (
    <div className="flex flex-col bg-slate-700 rounded-xl">
      <ExpensesFilter onChangeYear={changeYearHandler} />
      <Card className="flex flex-col space-y-10 p-8">
        {props.expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
