const fs = require("fs");
const {sumOf, generateStrategyGuide, calculateRoundScore} = require("./src/day2");

const main = (inputFilePath) => {
  fs.readFile(inputFilePath, "utf-8", (_, guideData) => {
    const strategyGuide = generateStrategyGuide(guideData);
    const totalScores = strategyGuide.map(calculateRoundScore);

    console.log("Total score according to strategy guide is", sumOf(totalScores));
  });
};

main(process.argv[2]);