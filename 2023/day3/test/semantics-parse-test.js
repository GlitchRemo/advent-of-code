const assert = require("assert");
const { describe, it } = require("node:test");
const { parseSemantics } = require("../src/semantics-parser");

describe("semantics parser", () => {
    it("should parse numbers with coordinates of each digit for one line", () => {
        assert.deepStrictEqual(parseSemantics("467..114..").numbers, [
            { coordinates: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }], number: 467 },
            { coordinates: [{ x: 0, y: 5 }, { x: 0, y: 6 }, { x: 0, y: 7 }], number: 114 }
        ])
    })

    it("should parse numbers with coordinates of each digit for multiple lines", () => {
        assert.deepStrictEqual(parseSemantics("467..114..\n..._......\n..35..633.").numbers, {
            467: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }],
            114: [{ x: 0, y: 5 }, { x: 0, y: 6 }, { x: 0, y: 7 }],
            35: [{ x: 2, y: 2 }, { x: 2, y: 3 }],
            633: [{ x: 2, y: 6 }, { x: 2, y: 7 }, { x: 2, y: 8 }],

        })
    })

    it("should parse symbols with coordinates for multiple lines", () => {
        assert.deepStrictEqual(parseSemantics("467..114..\n..._......\n..35..633.").symbols, [
            { x: 1, y: 3 },
        ])

        assert.deepStrictEqual(parseSemantics('467..114..\n' +
            '..._......\n' +
            '..35..633.\n' +
            '......#...\n' +
            '617_......\n' +
            '.....+.58.\n' +
            '..592.....\n' +
            '......755.\n' +
            '...$.\\*....\n' +
            '.664.598..').numbers, {
            '35': [{ x: 2, y: 2 }, { x: 2, y: 3 }],
            '58': [{ x: 5, y: 7 }, { x: 5, y: 8 }],
            '114': [{ x: 0, y: 5 }, { x: 0, y: 6 }, { x: 0, y: 7 }],
            '467': [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }],
            '592': [{ x: 6, y: 2 }, { x: 6, y: 3 }, { x: 6, y: 4 }],
            '598': [{ x: 9, y: 5 }, { x: 9, y: 6 }, { x: 9, y: 7 }],
            '617': [{ x: 4, y: 0 }, { x: 4, y: 1 }, { x: 4, y: 2 }],
            '633': [{ x: 2, y: 6 }, { x: 2, y: 7 }, { x: 2, y: 8 }],
            '664': [{ x: 9, y: 1 }, { x: 9, y: 2 }, { x: 9, y: 3 }],
            '755': [{ x: 7, y: 6 }, { x: 7, y: 7 }, { x: 7, y: 8 }]
        })
        assert.deepStrictEqual(parseSemantics('467..114..\n' +
                '..._......\n' +
                '..35..633.\n' +
                '......#...\n' +
                '617_......\n' +
                '.....+.58.\n' +
                '..592.....\n' +
                '......755.\n' +
                '...$.\\*....\n' +
                '.664.598..').symbols, [
                { x: 1, y: 3 },
                { x: 3, y: 6 },
                { x: 4, y: 3 },
                { x: 5, y: 5 },
                { x: 8, y: 3 },
                { x: 8, y: 5 },
                { x: 8, y: 6 }
            ]
        )
    })
})