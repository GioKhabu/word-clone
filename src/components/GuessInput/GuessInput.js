import React from "react";

function GuessInput({ handleGuessResults, inputState }) {
  const [guessInput, setGuessInput] = React.useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        handleGuessResults(guessInput);
        setGuessInput("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        disabled={inputState === true && true}
        maxLength={5}
        minLength={5}
        pattern="[a-zA-Z]{5}"
        required
        value={guessInput}
        onChange={(event) => setGuessInput(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
