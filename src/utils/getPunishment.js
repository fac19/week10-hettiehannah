const punishmentArray = [
  "Do an extra week of Slack links clean-up",
  "Only talk in cathedral analogies for the rest of the month",
  "Present every challenge solution for a whole week",
  "Facilitate the next SGC",
];

function getPunishment() {
  const index = Math.floor(Math.random() * punishmentArray.length);
  return punishmentArray[index];
}

export default getPunishment;
