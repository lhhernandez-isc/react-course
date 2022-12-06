import React from "react";

const ChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-end h-32 w-5 border border-black rounded-full overflow-hidden bg-indigo-200">
        <div className="bg-indigo-600 w-full" style={{ height: barFillHeight}}>
        </div>
      </div>
      <div>{props.label}</div>
    </div>
  );
};

export default ChartBar;
