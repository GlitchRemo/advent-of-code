const isEven = (a) => a % 2 === 0;
const isOdd = (a) => a % 2 === 1;

const divideDirections = ([...directions]) => {
  const santaDirections = directions.filter((_, i) => isEven(i)).join("");
  const roboSantaDirections = directions.filter((_, i) => isOdd(i)).join("");
  return { santaDirections, roboSantaDirections };
};

const findNextCoordinate = ({ x, y }, direction) => {
  switch (direction) {
    case ">":
      return { x: x + 1, y: y + 0 };
    case "<":
      return { x: x - 1, y: y + 0 };
    case "^":
      return { x: x + 0, y: y + 1 };
    case "v":
      return { x: x + 0, y: y - 1 };
  }
};

const recordHousesVisited = (directions) => {
  let currentCoordinate = { x: 0, y: 0 };
  const housesVisited = new Set([JSON.stringify(currentCoordinate)]);

  [...directions].forEach((direction) => {
    currentCoordinate = findNextCoordinate(currentCoordinate, direction);
    housesVisited.add(JSON.stringify(currentCoordinate));
  });

  return housesVisited;
};

const countHousesVisited = (directions) => {
  return recordHousesVisited(directions).size;
};

const countHousesVisitedByTwoSantas = (directions) => {
  const { santaDirections, roboSantaDirections } = divideDirections(directions);

  const housesVisitedBySanta = recordHousesVisited(santaDirections);
  const housesVisitedByTwoSantas = recordHousesVisited(roboSantaDirections);
  const uniqueHousesVisited = new Set([...housesVisitedBySanta, ...housesVisitedByTwoSantas]);

  return uniqueHousesVisited.size;
};

module.exports = {
  countHousesVisited,
  findNextCoordinate,
  countHousesVisitedByTwoSantas,
  recordHousesVisited,
  divideDirections,
};
