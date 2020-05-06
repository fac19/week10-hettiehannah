import React from "react";

const Poster = (props) => {
  const name = props.name;
  const avatar_url = props.avatar_url;
  return (
    <section className="poster">
      <h2 className="poster-title">Wanted: {name}</h2>
      <h3 className="poster-subtitle">Have you seen this person?</h3>
      <img className="poster-img" src={avatar_url} alt="profile pic of the criminal" />
      <p>Crime: </p>
      <p>Punishment: </p>
      <p>Reward: Guaranteed Graduate Job</p>
    </section>
  );
};

export default Poster;
