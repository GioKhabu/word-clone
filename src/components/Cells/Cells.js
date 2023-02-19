import React from "react";

function Cells({ answersCheck }) {
  const settingClass = () => {
    switch (answersCheck && answersCheck.status) {
      case "incorrect":
        return "cell incorrect";
      case "misplaced":
        return "cell misplaced";
      case "correct":
        return "cell correct";
      default:
        return "cell";
    }
  };
  return (
    <span className={settingClass()}>
      {answersCheck && answersCheck.letter}
    </span>
  );
}

export default Cells;
