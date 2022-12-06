const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div
      className="flex items-center w-full justify-around bg-slate-800
        rounded-lg px-5 py-3 text-white md:flex-col md:w-48"
      // className="flex flex-col py-2 bg-slate-800 text-lg w-32
      // text-center rounded-xl border-2 text-white md:w-48"
    >
      <div className="font-bold text-xl md:text-2xl">{month}</div>
      <div className="text-sm font-light md:text-lg">{year}</div>
      <div className="font-bold text-xl md:text-2xl">{day}</div>
    </div>
  );
};

export default ExpenseDate;
