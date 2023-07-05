const fs = require("fs");
const {calculateGameScore, calculateGameScoreAfterDecryption} = require("./src/day2");

const main = (inputFilePath) => {
  fs.readFile(inputFilePath, "utf-8", (_, guideData) => {
    const totalScore = calculateGameScore(guideData);
    const totalScoreAfterDecryption = calculateGameScoreAfterDecryption(guideData)
    console.log("Total score according to strategy guide is", totalScore);
    console.log("Total score according to strategy guide after decryption is", totalScoreAfterDecryption);
  });
};

main(process.argv[2]);