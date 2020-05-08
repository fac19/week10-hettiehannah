import React from "react";
import "./poster.css";
import getCrime from "../utils/getCrime";
import getPunishment from "../utils/getPunishment";
import HidingPlaces from "./hiding-places";

const Poster = (props) => {
  const name = props.name;
  const login = props.username;
  const avatar_url = props.avatar_url;
  const crime = getCrime();
  const punishment = getPunishment();

  return (
    <div className="poster-wrapper">
      <section className="poster">
        <h2 className="poster-title">Wanted: {name ? name : login}</h2>
        <h3 className="poster-subtitle">Have you seen this person?</h3>
        <div className="poster-sepia">
          <img
            className="poster-img"
            src={avatar_url}
            alt="profile pic of the criminal"
          />
        </div>
        <p>
          <span>Crime:</span> {crime}
        </p>
        <p>
          <span>Punishment:</span> {punishment}{" "}
        </p>
        <p>
          <span>Reward:</span> Guaranteed Graduate Job
        </p>
      </section>
      <section>
        <h2 className="hiding-places-title">Find their hiding spot</h2>
        <HidingPlaces />
      </section>
    </div>
  );
};

export default Poster;
