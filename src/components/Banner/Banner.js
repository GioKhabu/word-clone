import React from "react";

function Banner({ bannerState, guessResults }) {
  if (bannerState === "won") {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in {""}
          <strong>{guessResults.length} guesses </strong>.
        </p>
        <button className="refresh" onClick={() => window.location.reload()}>
          Restart
        </button>
      </div>
    );
  } else if (bannerState === "lost") {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>LEARN</strong>.
        </p>
        <button className="refresh" onClick={() => window.location.reload()}>Restart</button>
      </div>
    );
  }
}

export default Banner;
