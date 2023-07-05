const { deepStrictEqual, strictEqual, ok } = require('assert');
const { describe,it } = require('node:test');
const { generateStrategyGuide, calculateRoundScore, sumOf, hasWon, isGameDrawn, calculateGameScore } = require('../src/day2');

describe('generateStrategyGuide', () => {
it('should create moves guide of the game', () => {
    const actual = generateStrategyGuide('A Y\nB X');
    const expected = [['A', 'Y'],['B', 'X']];
    deepStrictEqual(actual, expected);
  })
})

describe('calculateGameScore', () => {
it('should calculate the game score according to strategy guide', () => {
   const actual = calculateGameScore(`A Y\nB X\nC Z`);
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