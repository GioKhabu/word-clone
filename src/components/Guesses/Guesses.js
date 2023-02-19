import React from "react";

import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";
import Cells from "../Cells";

function Guesses({ guessResults, answer }) {
  const answersCheck = checkGuess(guessResults, answer);
  return (
    <p className="guess">
      {range(5).map((letter, index) => {
        return (
          <Cells key={index} answersCheck={answersCheck && answersCheck[index]} />
        );
      })}
    </p>
  );
}

export default Guesses;
