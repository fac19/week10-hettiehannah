import React from "react";
import "./header.css";
import getUser from "../utils/getUser";
import Poster from "./poster";

const Header = () => {
  const [username, setUsername] = React.useState("");
  const [userData, setUserData] = React.useState({});

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username) {
      getUser(username).then((res) => {
        setUserData(res);
      });
    }
  };

  const { avatar_url, name, login } = userData;
  return (
    <div>
      <header className="header-wrapper">
        <h1 className="header-heading">Crimes Against The Cohort</h1>
        <form className="header-form" onSubmit={handleSubmit}>
          <label className="header-form__label" htmlFor="username">
            Select a FAC member to play the game:
          </label>
          <select
            onChange={handleUsername}
            id="username"
            className="header-form__input"
          >
            <option value="">Choose a name</option>
            <option value="akomiqaia">Ako</option>
            <option value="CampbellDocherty">Cammy</option>
            <option value="Chloeh24">Chloe</option>
            <option value="sofer">Dan</option>
            <option value="glrta">Gio</option>
            <option value="Albadylic">Gregor</option>
            <option value="hannahgooding">Hannah</option>
            <option value="HettieM">Hettie</option>
            <option value="Ivo-Evans">Ivo</option>w{" "}
            <option value="itsina96">Ina</option>
            <option value="jackherizsmith">Jack</option>
            <option value="jamesj-0">James</option>
            <option value="Joepock123">Joe</option>
            <option value="Alexreid95">Kat</option>
            <option value="Lizzy-j">Lizzy</option>
            <option value="oliverjam">Oli</option>
            <option value="Roger-Heathcote">Roger</option>
            <option value="tacotoemeck">Tom</option>
            <option value="VatsKan">Vatsal</option>
            <option value="yvonne-liu">Yvonne</option>
          </select>
          <button className="header-form__submit-btn" type="submit">
            Play
          </button>
        </form>
      </header>
      <main>
        {Object.keys(userData).length ? (
          <Poster avatar_url={avatar_url} name={name} username={login} />
        ) : null}
      </main>
    </div>
  );
};

export default Header;
