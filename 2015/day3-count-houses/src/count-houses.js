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

const partition = (directions) => {
  if (directions.length === 0) return { even: "", odd: "" };
  return { even: "", odd: directions };
};

const countHousesVisitedByTwoSantas = (directions) => {
  const { even: santaDirections, odd: roboSantaDirections } =
    partition(directions);

  const housesVisitedBySanta = recordHousesVisited(santaDirections);
  const housesVisitedByRoboSanta = recordHousesVisited(roboSantaDirections);

  const uniqueHousesVisited = new Set([
    ...housesVisitedBySanta,
    ...housesVisitedByRoboSanta,
  ]);

  return uniqueHousesVisited.size;
};

module.exports = {
  countHousesVisited,
  findNextCoordinate,
  countHousesVisitedByTwoSantas,
  recordHousesVisited,
};
