import React from "react";

export default function Button(
  { text, func, active = true, type=text },
) {
  let disabledStyle = `bg-rnmYellowDark hover:bg-white-950 rounded-sm text-gray-800 text-xl m-1 px-4`;
  let activeStyle = `bg-rnmYellow hover:bg-yellow-300 hover:cursor-default rounded-sm text-white text-xl m-1 px-4`;
  let maleStyle =
    "bg-blue-500 hover:bg-white-950 rounded-sm text-gray-800 text-xl m-1 px-6";
  let femaleStyle =
    "bg-pink-500 hover:bg-white-950 rounded-sm text-gray-800 text-xl m-1 px-6";
  let genderStyle =
    "bg-gray-500 hover:bg-white-950 rounded-sm text-gray-800 text-xl m-1 px-6";
  let statusStyle =
    "bg-gray-500 hover:bg-white-950 rounded-sm text-gray-800 text-xl m-1 px-6";
  let deadStyle =
    "bg-red-500 hover:bg-white-950 rounded-sm text-gray-800 text-xl m-1 px-6";
  let aliveStyle =
    "bg-green-500 hover:bg-white-950 rounded-sm text-gray-800 text-xl m-1 px-6";

  return (
    <button
      disabled={!active}
      className={
        type === "forward"
          ? active
            ? activeStyle
            : disabledStyle
          : type === "Male"
          ? maleStyle
          : type === "Female"
          ? femaleStyle
          : type === "Gender"
          ? genderStyle
          : type === "Status"
          ? statusStyle
          : type === "Dead"
          ? deadStyle
          : aliveStyle
      }
      onClick={func}
    >
      {text}
    </button>
  );
}
