import React from "react";
import getUser from "../utils/getUser";
import Poster from "./poster";

const Header = () => {
  const [username, setUsername] = React.useState("");
  const [userData, setUserData] = React.useState({});

  const handleUsername = (event) => setUsername(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    getUser(username).then((res) => {
      setUserData(res);
    });
  };

  const { avatar_url, name } = userData;
  return (
    <div>
      <header className="header-wrapper">
        <h1 className="header-heading">Crimes Against The Cohort</h1>
        <form className="header-form" onSubmit={handleSubmit}>
          <label className="header-form__label" htmlFor="username">
            Please enter GitHub username:
          </label>
          <input
            className="header-form__input"
            type="text"
            id="username"
            onChange={handleUsername}
            value={username}
          />
          <button className="header-form__submit-btn" type="submit">
            Submit
          </button>
        </form>
      </header>
      <main className="poster-wrapper">
        { Object.keys(userData).length ? <Poster avatar_url={avatar_url} name={name} /> : null }
      </main>
    </div>
  );
};

export default Header;
