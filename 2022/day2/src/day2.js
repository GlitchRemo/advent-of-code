const moveScore = 
{
  A: 1,
  B: 2,
  C: 3,
  X: 1,
  Y: 2,
  Z: 3
}

const sumOf = numbers => numbers.reduce((a, b) => a + b);

const nextIndexOf = (index, arraySize) => (index + 1) % arraySize;
const previousIndexOf = (index, arraySize) => (index - 1 + arraySize) % arraySize;

const hasWon = (opponentScore, myScore) => opponentScore - myScore === -1 || opponentScore - myScore === 2;
const isGameDrawn = (opponentScore, myScore) => opponentScore - myScore === 0;

const generateStrategyGuide = (guideData) => guideData.split("\n").map(roundData => roundData.split(" "));

const calculateRoundScore = ([opponentMove, myMove]) => {
  const myScore = moveScore[myMove];
  const opponentScore = moveScore[opponentMove];

  if(hasWon(opponentScore, myScore)) return myScore + 6;
  if(isGameDrawn(opponentScore, myScore)) return myScore + 3;
  return myScore;
}

const decrypt = ([opponentMove, myMove]) => {
  const opponentShapes = ['A', 'B', 'C'];
  const myShapes = ['X', 'Y', 'Z'];
  const indexOfOpponentMove = opponentShapes.indexOf(opponentMove);
  let legibleMyMove;
  
  switch(myMove) {
    case 'X' : legibleMyMove = myShapes[previousIndexOf(indexOfOpponentMove, 3)];break;
    case 'Y' : legibleMyMove = myShapes[indexOfOpponentMove]; break;
    case 'Z' : legibleMyMove = myShapes[nextIndexOf(indexOfOpponentMove, 3)]; break;
  }

  return [opponentMove, legibleMyMove];
}

const calculateGameScore = (guideData) => {
  const strategyGuide = generateStrategyGuide(guideData);
  const totalScores = strategyGuide.map(calculateRoundScore);
  return sumOf(totalScores);
}

const calculateGameScoreAfterDecryption = (guideData) => {
  const strategyGuide = generateStrategyGuide(guideData);
  const decryptedStrategyGuide = strategyGuide.map(decrypt);
  const totalScores = decryptedStrategyGuide.map(calculateRoundScore);
  return sumOf(totalScores);
}

module.exports = {calculateGameScoreAfterDecryption, calculateGameScore, calculateRoundScore, generateStrategyGuide, sumOf, hasWon, isGameDrawn, nextIndexOf, previousIndexOf, decrypt};

