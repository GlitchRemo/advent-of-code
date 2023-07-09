const nextCoordinateInEast = ({ x, y }, direction) => ({ x: x + 1, y: y + 0 });

const countHouses = (directions) => {
  let currentCoordinate = { x: 0, y: 0 };
  const housesVisited = new Set([JSON.stringify(currentCoordinate)]);

  [...directions].forEach((direction) => {
    currentCoordinate = nextCoordinateInEast(currentCoordinate, direction);
    housesVisited.add(JSON.stringify(currentCoordinate));
  });

  return housesVisited.size;
};

module.exports = { countHouses, nextCoordinateInEast };
