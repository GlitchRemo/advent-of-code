const moveScore = 
{
  A: 1,
  B: 2,
  C: 3,
  X: 1,
  Y: 2,
  Z: 3
}

const sumOf = list => list.reduce((a,b) => a+b);

const hasWon = (opponentScore, myScore) => opponentScore - myScore === -1 || opponentScore - myScore === 2;
const hasDrawn = (opponentScore, myScore) => opponentScore - myScore === 0;

const generateStrategyGuide = (guideData) => {
  return guideData.split("\n").map(roundData => roundData.split(" "));
}

const calculateRoundScore = ([opponentMove, myMove]) => {
  const myScore = moveScore[myMove];
  const opponentScore = moveScore[opponentMove];

  if(hasWon(opponentScore, myScore)) return myScore + 6;
  if(hasDrawn(opponentScore, myScore)) return myScore + 3;
  return myScore;
}

module.exports = {calculateRoundScore, generateStrategyGuide, sumOf};