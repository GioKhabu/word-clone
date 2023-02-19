import React from "react";

import Guesses from "../Guesses";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED as NumGuess } from "../../constants";

function GuessResults({ guessResults, answer}) {
  return (
    <div className="guess-results">
      {range(NumGuess).map((guess, index) => {
        const words = guessResults.length && guessResults[index]
        return <Guesses key={index} guessResults={words} answer={answer} />;
      })}
    </div>
  );
}

export default GuessResults;
