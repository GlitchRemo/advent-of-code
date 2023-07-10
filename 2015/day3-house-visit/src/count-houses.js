const isEvenIndex = (index) => index % 2 === 0;

const valuesOfOddPositions = (list, predicate) => {
  return list.filter((_, i) => !predicate(i));
};

const valuesOfEvenPositions = (list, predicate) => {
  return list.filter((_, i) => predicate(i));
};

const partitionBy = (list, predicate) => {
  return {
    evens: valuesOfEvenPositions(list, predicate),
    odds: valuesOfOddPositions(list, predicate),
  };
};

const findNextCoordinate = ({ x, y }, direction) => {
  switch (direction) {
    case ">":
      return { x: x + 1, y: y + 0 };
    case "<":
      return { y: y + 0, x: x - 1 };
    case "^":
      return { x: x + 0, y: y + 1 };
    case "v":
      return { y: y - 1, x: x + 0 };
  }
};

const convertToString = ({ x, y }) => `${x}_${y}`;

const recordHousesVisited = (directions) => {
  let currentCoordinate = { x: 0, y: 0 };
  const housesVisited = new Set([convertToString(currentCoordinate)]);

  [...directions].forEach((direction) => {
    currentCoordinate = findNextCoordinate(currentCoordinate, direction);
    housesVisited.add(convertToString(currentCoordinate));
  });

  return housesVisited;
};

const countHousesVisited = (directions) => {
  return recordHousesVisited(directions).size;
};

const countHousesVisitedByTwoSantas = (directions) => {
  const { evens, odds } = partitionBy([...directions], isEvenIndex);

  const santaDirections = evens.join("");
  const roboSantaDirections = odds.join("");

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
  partitionBy,
};
