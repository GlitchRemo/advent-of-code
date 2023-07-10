const fs = require("fs");
const { countHousesVisited, countHousesVisitedByTwoSantas } = require("./src/count-houses");

const main = () => {
  const directions = fs.readFileSync("./resources/directions.txt", "utf-8");
  const countOfHousesVisitedByOneSanta = countHousesVisited(directions);
  const countOfHousesVisitedByTwoSantas = countHousesVisitedByTwoSantas(directions);

  console.log(
    `One Santa delivers present to ${countOfHousesVisitedByOneSanta} houses at least once`
  );
  console.log(
    `Two Santas deliver present to ${countOfHousesVisitedByTwoSantas} houses at least once`
  );
};

main();
