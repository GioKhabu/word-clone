import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import Banner from "../Banner";
import Keyboard from "../Keyboard";
import { checkGuess } from "../../game-helpers";
import { Alphabet } from "../../constants";

import { NUM_OF_GUESSES_ALLOWED as NumGuess } from "../../constants";
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });
  const newAlphabet = Alphabet.map((letter) => {
    return { letter, status: "unused" };
  });

function Game() {
  const [guessResults, setGuessResults] = React.useState([]);
  const [bannerState, setBannerState] = React.useState("onGoing");
  const [inputState, setInputState] = React.useState(false)
  const [guess, setGuess] = React.useState(newAlphabet);
  const handleGuessResults = (newGuess) => {
    const newResults = [...guessResults, newGuess];
    setGuessResults(newResults);
    const guessForKeyboard = checkGuess(newGuess, answer);
    const merge = (arr1, arr2, prop) => {
      const resultMap = new Map(arr1.map((item) => [item[prop], item]));
      arr2.forEach((item) => {
        const mapItem = resultMap.get(item[prop]);
        if (mapItem) Object.assign(mapItem, item);
        else resultMap.set(item[prop], item);
      });
      return [...resultMap.values()];
    };

    const result = merge(newAlphabet, guessForKeyboard, 'letter');
    setGuess(result);

    if (newGuess === answer) {
      setBannerState("won");
      setInputState(true)
    } else if (newResults.length >= NumGuess) {
      setBannerState("lost");
      setInputState(true);

    }
  };

  return (
    <>
      <GuessInput
        handleGuessResults={handleGuessResults}
        inputState={inputState}
      />
      <GuessResults guessResults={guessResults} answer={answer} />
      <Banner bannerState={bannerState} guessResults={guessResults} />
      <Keyboard guess={guess}/>
    </>
  );
}

export default Game;
