const sumOfNumbers = (numbers) =>
    numbers.reduce((a, b) => Number(a) + Number(b), 0);

const getPartNumbers = (numbers) => {
    const partNumbers = []

    for (const number in numbers) {
        if (numbers[number].isAPartNumber)
            partNumbers.push(number)
    }

    return partNumbers
};
const findAdjacentPositions = ({ x, y }) => [
    { x: x - 1, y: y - 1 },
    { x: x - 1, y: y + 1 },
    { x: x + 1, y: y - 1 },
    { x: x + 1, y: y + 1 },
    { x: x - 1, y: y },
    { x: x, y: y - 1 },
    { x: x + 1, y: y },
    { x: x, y: y + 1 }]

const areEqualCoordinates = (coordinate, pos) => pos.x === coordinate.x && pos.y === coordinate.y

const sumOfPartNumbers = (numbers, symbols) => {
    const copiedNumbers = numbers;
    const adjacentPositions = symbols.flatMap(findAdjacentPositions)

    adjacentPositions.forEach(pos => {
        for (const number in numbers) {
            const coordinates = numbers[number]

            if (coordinates.some((coordinate) => areEqualCoordinates(coordinate, pos))) {
                copiedNumbers[number].isAPartNumber = true;
            }

        }
    })

    const partNumbers = getPartNumbers(copiedNumbers);
    console.log(partNumbers)
    return sumOfNumbers(partNumbers)
};

module.exports = { sumOfPartNumbers };
