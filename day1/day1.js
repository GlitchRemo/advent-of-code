const fs = require("fs");

const compareFn = (a, b) => {
  if(a>b) return -1;
  if(a<b) return 1;
  return 0;
}

const firstThreeMax = list => list.slice(0).sort(compareFn).slice(0,3);

const toNumber = stringifiedNumber =>  +stringifiedNumber;

const sumAll = list => list.reduce((a,b) => a+b);

const parseElfData = caloriesCarriedByElf => caloriesCarriedByElf.split("\n").map(toNumber);

const groupCaloriesCarriedByElves = (caloriesData) => caloriesData.split("\n\n").map(parseElfData);

const getMostCalories = (caloriesCarriedByElves) => {
  const totalCalories = caloriesCarriedByElves.map(sumAll);
  return Math.max(...totalCalories);
};

const sumOfFirstThree = (caloriesCarriedByElves) => {
  const totalCalories = caloriesCarriedByElves.map(sumAll);
  const topThreeCalories = firstThreeMax(totalCalories);
  return sumAll(topThreeCalories);
}

const main = (inputFilePath) => {
  fs.readFile(inputFilePath, "utf-8", (err, caloriesData) => {
    const caloriesCarriedByElves = groupCaloriesCarriedByElves(caloriesData);

    const mostCalorie = getMostCalories(caloriesCarriedByElves);
    console.log(mostCalorie);

    // const totalOfTopThree = sumOfFirstThree(caloriesCarriedByElves);
    // console.log(totalOfTopThree);
  });
};

main(process.argv[2]);


