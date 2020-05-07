import React from "react";
import houseRandomisation from "../utils/houseRandomisation";

const resultImgSrc = [
  "https://image.flaticon.com/icons/svg/1933/1933191.svg", // happy cowboy
  "https://image.flaticon.com/icons/svg/1933/1933362.svg", // sad cowboy
];

// const saloon = document.getElementsByClassName("hiding-places__article1");
// saloon.addEventListener("click", () => {
//   if (houseRandomisation()) {
//     saloon.src="newSrc"; // filter array of src - happy cowboy
//   }

// })

const Housing = () => {
  const [correctButton, setCorrectButton] = React.useState("");
  const [clickedButton, setClickedButton] = React.useState(false);

  return (
    <section className="hiding-places">
      <h1>Find where they are hiding</h1>
      <article className="hiding-places__article hiding-places__article1">
        <button onClick={setClickedButton("saloon")}>
          {/* {saloonIsSelected && saloonIsCorrect ? happy.png : sad.png} */}
          {/* <img
            className="hiding-places__img"
            src="https://image.flaticon.com/icons/svg/2865/2865882.svg"
            alt="saloon"
          /> */}
        </button>
      </article>
      <article className="hiding-places__article hiding-places__article2">
        <button>
          They are hiding behind the cactus
          <img
            className="hiding-places__img"
            src="https://image.flaticon.com/icons/svg/2893/2893003.svg"
            alt="cactus"
          />
        </button>
      </article>
      <article className="hiding-places__article hiding-places__article3">
        <button>
          They are hiding in the carriage
          <img
            className="hiding-place__img"
            src="https://image.flaticon.com/icons/svg/2280/2280389.svg"
            alt="carriage"
          />
        </button>
      </article>
    </section>
  );
};

export default Housing;
