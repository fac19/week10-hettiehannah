import React from "react";
import houseRandomisation from "../utils/houseRandomisation";

const resultImgSrc = [
  "https://image.flaticon.com/icons/svg/1933/1933191.svg", // happy cowboy
  "https://image.flaticon.com/icons/svg/1933/1933362.svg", // sad cowboy
];

const Housing = () => {
  // const [correctButton, setCorrectButton] = React.useState("");
  const [clickedButton, setClickedButton] = React.useState("");

  const correctButton = houseRandomisation();
  // console.log(correctButton);
  console.log("clickedButton:", clickedButton);
  function isCorrect() {
    return clickedButton === correctButton;
  }

  function imageDisplay(imageName, defaultImage) {
    if (clickedButton !== imageName) {
      return defaultImage;
    } else if (clickedButton === imageName && correctButton === imageName) {
      return (
        <img
          className="hiding-places__img--correct"
          src="https://image.flaticon.com/icons/svg/1933/1933191.svg"
          alt=""
        />
      );
    } else if (clickedButton === imageName && correctButton !== imageName) {
      return (
        <img
          className="hiding-places__img--incorrect"
          src="https://image.flaticon.com/icons/svg/1933/1933362.svg"
          alt=""
        />
      );
    }
  }

  return (
    <section className="hiding-places">
      <h1>Find where they are hiding</h1>
      <article className="hiding-places__article hiding-places__article1">
        <button onClick={() => setClickedButton("saloon")}>
          They are hiding behind the saloon door
          {imageDisplay(
            "saloon",
            <img
              className="hiding-places__img"
              src="https://image.flaticon.com/icons/svg/2865/2865882.svg"
              alt=""
            />
          )}
          {/* Remove click-ability and refresh */}
        </button>
      </article>
      <article className="hiding-places__article hiding-places__article2">
        <button onClick={() => setClickedButton("cactus")}>
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
        <button onClick={() => setClickedButton("carriage")}>
          They are hiding in the carriage
          {imageDisplay(
            "carriage",
            <img
              className="hiding-place__img"
              src="https://image.flaticon.com/icons/svg/2280/2280389.svg"
              alt=""
            />
          )}
        </button>
      </article>
    </section>
  );
};

export default Housing;
