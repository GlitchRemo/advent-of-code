const nonSymbols = ["0", "1", "2", '3', '4', '5', '6', '7', '8', '9', "."];
const isSymbol = (char) => !nonSymbols.includes(char);

const parseDigits = (digits) => {
    return digits.reduce(([number, coordinates], [digit, coordinate]) => {
        number += digit
        return [number, [...coordinates, coordinate]]
    }, ['', []])

};
const parseLines = (semantics) => semantics.trim().split("\n").map(line => [...line])

const isNumber = (character) => !isNaN(+character);
const parseSemantics = (semantics) => {
    const numbers = {};
    const symbols = []
    const lines = parseLines(semantics)
    let digits = [];

    for (let row = 0; row < lines.length; row++) {
        if (digits.length !== 0) {
            const [number, coordinates] = parseDigits(digits);
            const id = `${ number }_${ coordinates[0].x }_${ coordinates[0].y }`
            numbers[id] = coordinates
            digits = [];
        }
        for (let column = 0; column < lines[row].length; column++) {
            const character = lines[row][column]

            if (character === '.') {
                if (digits.length !== 0) {
                    const [number, coordinates] = parseDigits(digits);
                    const id = `${ number }_${ coordinates[0].x }_${ coordinates[0].y }`
                    numbers[id] = coordinates
                    digits = [];
                }
                continue
            }

            if (isSymbol(character)) {
                if (digits.length !== 0) {
                    const [number, coordinates] = parseDigits(digits);
                    const id = `${ number }_${ coordinates[0].x }_${ coordinates[0].y }`
                    numbers[id] = coordinates
                    digits = [];
                }
                symbols.push({ x: row, y: column })
                continue
            }

            digits.push([character, { x: row, y: column }])
        }
    }

    return { numbers, symbols }
};

module.exports = { parseSemantics }