import { accessToken } from "../../token";

const checkResponse = (response) => {
  if (response.status !== 200) {
    console.error(`Error with request! ${response.status}`);
    return;
  }
  return response.json();
};

export const getData = (username) => {
  return fetch(
    `https://api.github.com/users/${username}?access_token=${accessToken}`
  )
    .then(checkResponse)
    .catch((error) => {
      throw new Error(`Fetch getUserData failed ${error}`);
    });
};
