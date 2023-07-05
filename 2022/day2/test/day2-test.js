const { deepStrictEqual, strictEqual } = require('assert');
const { describe,it } = require('node:test');
const { generateStrategyGuide, calculateRoundScore } = require('../src/day2');


describe('generateStrategyGuide', () => {
it('should create moves guide of the game', () => {
    const actual = generateStrategyGuide('A Y\nB X');
    const expected = [['A','Y'],['B','X']];
    deepStrictEqual(actual, expected);
  })
})

describe('calculateRoundScore', () => {
it('should calculate each round score based on opponent move and my move', () => {
    const actual = calculateRoundScore(['A','Y']);
    const expected = 8;
    strictEqual(actual, expected);
  })
})