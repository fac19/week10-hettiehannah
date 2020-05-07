import React from "react";
import getCrime from "../utils/getCrime";
import getPunishment from "../utils/getPunishment";
import HidingPlaces from "./hiding-places";

const Poster = (props) => {
  const name = props.name;
  const avatar_url = props.avatar_url;
  const crime = getCrime();
  const punishment = getPunishment();

  return (
    <div>
      <section className="poster">
        <h2 className="poster-title">Wanted: {name}</h2>
        <h3 className="poster-subtitle">Have you seen this person?</h3>
        <img
          className="poster-img"
          src={avatar_url}
          alt="profile pic of the criminal"
        />
        <p>Crime: {crime}</p>
        <p>Punishment: {punishment} </p>
        <p>Reward: Guaranteed Graduate Job</p>
      </section>
      <section>
        <HidingPlaces />
      </section>
    </div>
  );
};

export default Poster;
