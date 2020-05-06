const crimesArray = [
  "Not ticking themselves on Zoom after check-in",
  "Forgetting to co-author their friends",
  "Taking screenshots without consent",
  "Working late in a coding black hole",
  "Not leaving time to write a README.md",
  "Not muting themselves on Zoom",
  "Confusing Gregor with an unrelated codename on Zoom",
  "Non-intuitive variable naming",
  "Non-intuitive function naming",
  "Using ES6 and old syntax in the same JS file",
  "Not pushing their commits to GitHub for a whole day",
  "Ignoring pull requests",
  "Not pulling the master branch before pushing their branch to GitHub",
  "Pushing straight to master branch on GitHub",
  "Ignoring the CSS on a project",
  "Writing an inaccessible webpage",
  "Using BEM incorrectly",
  "Console logging everything instead of debugging",
  "Not using camelCase",
  "Using HTML attributes in JSX",
  "Boring answers to ice-breakers",
  "Taking icebreak questions too seriously",
  "Pretending their internet connection is poor so they don't have to keep their video on",
];

function getCrime() {
  const index = Math.floor(Math.random() * crimesArray.length);
  return crimesArray[index];
}

export default getCrime;
