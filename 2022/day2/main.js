const fs = require("fs");
const {sumOf, generateStrategyGuide, calculateRoundScore, calculateGameScore} = require("./src/day2");

const main = (inputFilePath) => {
  fs.readFile(inputFilePath, "utf-8", (_, guideData) => {
    const totalScore = calculateGameScore(guideData);
    console.log("Total score according to strategy guide is", totalScore);
  });
};

main(process.argv[2]);