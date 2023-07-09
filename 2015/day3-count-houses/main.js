const { countHousesVisited } = require("./src/count-houses");

const main = () => {
  const directions = "<^^>";
  console.log(countHousesVisited(directions));
};

main();
