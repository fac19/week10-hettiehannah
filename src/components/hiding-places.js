import React from "react";
import getHidingPlace from "../utils/getHidingPlace";
import "./hiding-places.css";

const HidingPlaces = () => {
  const [clickedButton, setClickedButton] = React.useState("");
  const [gameInPlay, setGameInPlay] = React.useState(true);
  const correctButton = getHidingPlace();

  React.useEffect(() => {
    if (gameInPlay) {
      imageDisplay();
    }
  }, [gameInPlay]);

  function imageDisplay(imageName, defaultImage) {
    if (clickedButton !== imageName) {
      return defaultImage;
    } else if (clickedButton === imageName && correctButton === imageName) {
      return (
        <div className="hiding-places__result">
          <img
            className="hiding-places__img hiding-places__img--correct"
            src="https://image.flaticon.com/icons/svg/1933/1933362.svg"
            alt=""
          />
          <p className="hiding-places__output hiding-places__output--correct">
            WELL DONE YOU CAUGHT THEM!
          </p>
        </div>
      );
    } else if (clickedButton === imageName && correctButton !== imageName) {
      return (
        <div className="hiding-places__result">
          <img
            className="hiding-places__img hiding-places__img--incorrect"
            src="https://image.flaticon.com/icons/svg/1933/1933191.svg"
            alt=""
          />
          <p className="hiding-places__output hiding-places__output--incorrect">
            They got away, bad luck!
          </p>
        </div>
      );
    }
  }

  return (
    <section className="hiding-places">
      <article className="hiding-places__article hiding-places__article1">
        <button
          onClick={() => {
            setClickedButton("saloon");
            setGameInPlay(false);
          }}
          disabled={!gameInPlay}
        >
          They are hiding behind the saloon door
          {imageDisplay(
            "saloon",
            <img
              className="hiding-places__img"
              src="https://image.flaticon.com/icons/svg/2865/2865882.svg"
              alt=""
            />
          )}
        </button>
      </article>
      <article className="hiding-places__article hiding-places__article2">
        <button
          onClick={() => {
            setClickedButton("cactus");
            setGameInPlay(false);
          }}
          disabled={!gameInPlay}
        >
          They are hiding behind the cactus
          {imageDisplay(
            "cactus",
            <img
              className="hiding-places__img"
              src="https://image.flaticon.com/icons/svg/2893/2893003.svg"
              alt=""
            />
          )}
        </button>
      </article>
      <article className="hiding-places__article hiding-places__article3">
        <button
          onClick={() => {
            setClickedButton("carriage");
            setGameInPlay(false);
          }}
          disabled={!gameInPlay}
        >
          They are hiding in the carriage
          {imageDisplay(
            "carriage",
            <img
              className="hiding-places__img"
              src="https://image.flaticon.com/icons/svg/2280/2280389.svg"
              alt=""
            />
          )}
        </button>
      </article>
      {!gameInPlay ? (
        <button className="replay" onClick={() => window.location.reload()}>
          Play again
        </button>
      ) : null}
    </section>
  );
};

export default HidingPlaces;
