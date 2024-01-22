const fs = require("fs");
const { parseSemantics } = require("./src/semantics-parser");
const { sumOfPartNumbers } = require("./src/sum-of-part-numbers");

const readSemantics = () => fs.readFileSync(`./resources/demo-input.txt`, "utf-8");

const main = () => {
    const rawSemantics = readSemantics();
    const { numbers, symbols } = parseSemantics(rawSemantics);
    console.log(numbers, symbols)

    const sum = sumOfPartNumbers(numbers, symbols)

    console.log(sum, numbers, symbols)
    console.log(`Sum of part numbers is ${ sum }`);
};

main();
