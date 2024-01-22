const assert = require("assert");
const { describe, it } = require("node:test");
const { sumOfPartNumbers } = require("../src/sum-of-part-numbers");

describe("sum of part numbers", () => {
    it("should be zero for an no number is adjacent to any pattern in engine semantics", () => {
        assert.strictEqual(sumOfPartNumbers(
            [

                {
                    coordinates: [
                        { x: 0, y: 0 },
                        { x: 0, y: 1 }
                    ], number: 46
                }]

            ,
            [
                { x: 0, y: 3 }
            ]), 0);
    });

    it("should be the number if only one number is a part number", () => {
        assert.strictEqual(sumOfPartNumbers(
            [{
                coordinates:
                    [
                        { x: 0, y: 0 },
                        { x: 1, y: 0 }
                    ], number: 46
            }

                , {
                coordinates:
                    [
                        { x: 4, y: 2 },
                        { x: 3, y: 2 }
                    ], number: 47
            }]

            ,
            [
                { x: 0, y: 1 }
            ]), 46
        )
    });

    // it("should be the number if only one number is a part number", () => {
    //     assert.strictEqual(sumOfPartNumbers(
    //         {
    //             '35': [{ x: 2, y: 2 }, { x: 2, y: 3 }],
    //             '58': [{ x: 5, y: 7 }, { x: 5, y: 8 }],
    //             '114': [{ x: 0, y: 5 }, { x: 0, y: 6 }, { x: 0, y: 7 }],
    //             '467': [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }],
    //             '592': [{ x: 6, y: 2 }, { x: 6, y: 3 }, { x: 6, y: 4 }],
    //             '598': [{ x: 9, y: 5 }, { x: 9, y: 6 }, { x: 9, y: 7 }],
    //             '617': [{ x: 4, y: 0 }, { x: 4, y: 1 }, { x: 4, y: 2 }],
    //             '633': [{ x: 2, y: 6 }, { x: 2, y: 7 }, { x: 2, y: 8 }],
    //             '664': [{ x: 9, y: 1 }, { x: 9, y: 2 }, { x: 9, y: 3 }],
    //             '755': [{ x: 7, y: 6 }, { x: 7, y: 7 }, { x: 7, y: 8 }]
    //         },
    //         [
    //             { x: 1, y: 3 },
    //             { x: 3, y: 6 },
    //             { x: 4, y: 3 },
    //             { x: 5, y: 5 },
    //             { x: 8, y: 3 },
    //             { x: 8, y: 5 },
    //             { x: 8, y: 6 }
    //         ]
    //     ), 4361);
    // })
})
