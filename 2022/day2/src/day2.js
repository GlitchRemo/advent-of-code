const moveScore = 
{
  A: 1,
  B: 2,
  C: 3,
  X: 1,
  Y: 2,
  Z: 3
}

const sumOf = numbers => numbers.reduce((a,b) => a+b);

const hasWon = (opponentScore, myScore) => opponentScore - myScore === -1 || opponentScore - myScore === 2;
const isGameDrawn = (opponentScore, myScore) => opponentScore - myScore === 0;

const generateStrategyGuide = (guideData) => {
  return guideData.split("\n").map(roundData => roundData.split(" "));
}

const calculateRoundScore = ([opponentMove, myMove]) => {
  const myScore = moveScore[myMove];
  const opponentScore = moveScore[opponentMove];

  if(hasWon(opponentScore, myScore)) return myScore + 6;
  if(isGameDrawn(opponentScore, myScore)) return myScore + 3;
  return myScore;
}

const calculateGameScore = (guideData) => {
  const strategyGuide = generateStrategyGuide(guideData);
  const totalScores = strategyGuide.map(calculateRoundScore);
  return sumOf(totalScores);
}

module.exports = {calculateGameScore, calculateRoundScore, generateStrategyGuide, sumOf, hasWon, isGameDrawn};