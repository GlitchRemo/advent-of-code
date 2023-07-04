const fs = require("fs");

const sumAll = list => list.reduce((a,b) => a+b);

const generateStrategyGuide = (guideData) => {
  return guideData.split("\n").map(roundData => roundData.split(" "));
}

const hasWon = (opponentScore, myScore) => opponentScore - myScore === -1 || opponentScore - myScore === 2;
const hasDrawn = (opponentScore, myScore) => opponentScore - myScore === 0;

const moveScore = 
{
  A: 1,
  B: 2,
  C: 3,
  X: 1,
  Y: 2,
  Z: 3
}

const calculateRoundScore = ([opponentShape, myShape]) => {
  const myScore = moveScore[myShape];
  const opponentScore = moveScore[opponentShape];

  if(hasWon(opponentScore, myScore)) return myScore + 6;
  if(hasDrawn(opponentScore, myScore)) return myScore + 3;
  return myScore;
}


const main = (inputFilePath) => {
  fs.readFile(inputFilePath, "utf-8", (err, guideData) => {
    const strategyGuide = generateStrategyGuide(guideData);
    const totalScores = strategyGuide.map(calculateRoundScore);
    console.log(sumAll(totalScores));
  });
};

main(process.argv[2]);