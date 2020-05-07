const houseRandomisation = () => {
  const index = Math.floor(Math.random() * 3);
  if (index === 0) {
    return "saloon";
  } else if (index === 1) {
    return "cactus";
  } else {
    return "carriage";
  }
};

export default houseRandomisation;
