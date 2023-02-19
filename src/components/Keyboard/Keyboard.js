import React from "react";

import { Alphabet } from "../../constants";
function Keyboard({guess}) {
  const newAlphabet = Alphabet.map(letter => {
    return {letter, status: 'unused'}
  })
  const [keys, setKeys] = React.useState(newAlphabet)
  console.log(guess);

  return (
    <div className="keyboard">
      {guess && guess.map((item, index) => {
        const settingClass = () => {
          switch (item && item.status) {
            case "correct":
              return "key correct";
            case "incorrect":
              return "key incorrect";
            case "misplaced":
              return "key misplaced";

            default:
              return "key";
          }
        };
        return (
          <span className={settingClass()} key={index}>
            {item.letter}
          </span>
        );
      })}
    </div>
  );
}

export default Keyboard;
