const { readFileSync } = require("fs");
const {
  countHousesVisited,
  countHousesVisitedByTwoSantas,
} = require("./src/count-houses");

const main = () => {
  const directions = readFileSync("./resources/directions.txt", "utf-8");
  console.log(countHousesVisited(directions));
  console.log(countHousesVisitedByTwoSantas(directions));
};

main();
