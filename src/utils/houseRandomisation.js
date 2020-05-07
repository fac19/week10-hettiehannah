const houseRandomisation = () => {
  const index = Math.floor(Math.random() * 3);
  if (index == 0) {
    return true;
  } else {
    return false;
  }
};

export default houseRandomisation;
