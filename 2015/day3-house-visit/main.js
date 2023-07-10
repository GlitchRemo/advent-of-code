const fs = require("fs");
const { countHousesVisited, countHousesVisitedByTwoSantas } = require("./src/count-houses");

const part1 = (directions) => {
  const housesVisitedByOneSanta = countHousesVisited(directions);
  console.log(`One Santa delivers present to ${housesVisitedByOneSanta} houses at least once`);
};

const part2 = (directions) => {
  const housesVisitedByTwoSantas = countHousesVisitedByTwoSantas(directions);
  console.log(`Two Santas deliver present to ${housesVisitedByTwoSantas} houses at least once`);
};

const main = () => {
  const directions = fs.readFileSync("./resources/directions.txt", "utf-8");

  part1(directions);
  part2(directions);
};

main();
