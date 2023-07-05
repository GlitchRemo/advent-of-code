const { deepStrictEqual, strictEqual, ok } = require('assert');
const { describe,it } = require('node:test');
const { generateStrategyGuide, calculateGameScore, calculateRoundScore, sumOf, hasWon, isGameDrawn, nextIndexOf, previousIndexOf, calculateGameScoreAfterDecryption, decrypt} = require('../src/day2');

describe('generateStrategyGuide', () => {
it('should create moves guide of the game', () => {
    const actual = generateStrategyGuide('A Y\nB X');
    const expected = [['A', 'Y'],['B', 'X']];
    deepStrictEqual(actual, expected);
  })
})

describe('calculateGameScoreAfterDecryption', () => {
it('should calculate the game score after decrypting the strategy guide', () => {
   const actual = calculateGameScoreAfterDecryption('A Y\nB X\nC Z');
   const expected = 12;
   strictEqual(actual, expected);
  })
})

describe('calculateGameScore', () => {
it('should calculate the game score according to strategy guide', () => {
   const actual = calculateGameScore('A Y\nB X\nC Z');
   const expected = 15;
   strictEqual(actual, expected);
  })
})

describe('calculateRoundScore', () => {
it('should calculate each round score based on opponent move and my move', () => {
    const actual = calculateRoundScore(['A', 'Y']);
    const expected = 8;
    strictEqual(actual, expected);
  })
})

describe('decrypt', () => {
it('should change my shape according to decryption guide', () => {
   const actual = decrypt(['A', 'Y']);
   const expected = ['A', 'X'];
   deepStrictEqual(actual, expected);
  })
})

describe('sumOf', () => {
it('should add all numbers of a list', () => {
   const actual = sumOf([1, 2, 3]);
   const expected = 6;
   strictEqual(actual, expected);
  })
})

describe('hasWon', () => {
it('should give true if opponent plays rock and I play paper', () => {
   const actual = hasWon(1, 2);
   ok(actual)
  })
})

describe('hasWon', () => {
it('should give true if opponent plays scissor and I play rock', () => {
   const actual = hasWon(3, 1);
   ok(actual)
  })
})

describe('hasWon', () => {
it('should give true if opponent plays paper and I play scissor', () => {
   const actual = hasWon(2, 3);
   ok(actual)
  })
})

describe('isGameDrawn', () => {
it('should give true if opponent and I play the same move', () => {
   const actual = isGameDrawn(1, 1);
   ok(actual)
  })
})

describe('nextIndexOf', () => {
it('0 of an array of size 3 is 1', () => {
   const actual = nextIndexOf(0, 3);
   const expected = 1;
   strictEqual(actual, expected);
  })
})

describe('nextIndexOf', () => {
it('2 of an array of size 3 is 0', () => {
   const actual = nextIndexOf(2, 3);
   const expected = 0;
   strictEqual(actual, expected);
  })
})

describe('previousIndexOf', () => {
it('0 of an array of size 3 is 2', () => {
   const actual = previousIndexOf(0, 3);
   const expected = 2;
   strictEqual(actual, expected);
  })
})