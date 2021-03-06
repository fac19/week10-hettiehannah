const accessToken = process.env.REACT_APP_GITHUB_TOKEN;

const checkResponse = (response) => {
  if (response.status !== 200) {
    console.error(`Error with request! ${response.status}`);
    return;
  }
  return response.json();
};

const getUser = (username) => {
  return fetch(`https://api.github.com/users/${username}?`, {
    Authorization: `token ${accessToken}`,
  })
    .then(checkResponse)
    .catch((error) => {
      throw new Error(`Fetch getUserData failed ${error}`);
    });
};

export default getUser;
