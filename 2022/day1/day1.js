const fs = require("fs");

const takeRight = (quantity, list) => list.slice(-quantity);

const sort = list => list.slice().sort((a, b) => a - b);

const toNumber = stringifiedNumber =>  +stringifiedNumber;

const sumAll = list => list.reduce((a,b) => a+b);

const generateInventory = calories => calories.split("\n").map(toNumber);

const segregateInventories = (elvesInventories) => elvesInventories.split("\n\n").map(generateInventory);

const getMostCalories = (totalCalories) => {
  return Math.max(...totalCalories);
};

const main = (inputFilePath) => {
  fs.readFile(inputFilePath, "utf-8", (_, elvesInventories) => {
    const caloriesCarriedByElves = segregateInventories(elvesInventories);
    const totalCalories = caloriesCarriedByElves.map(sumAll);

    const mostCalorie = getMostCalories(totalCalories);
    const totalOfTopThree = sumAll(takeRight(3, sort(totalCalories)));

    console.log("Most Calorie:-", mostCalorie, "Sum Of Top Three:-", totalOfTopThree);
  });
};

main(process.argv[2]);


