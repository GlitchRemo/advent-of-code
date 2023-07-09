const fs = require("fs");
const { parseDimensions } = require("./src/dimensions-parser");
const { MaterialCalculator } = require("./src/material-calculator");

const readDimensions = () =>
  fs.readFileSync("./resources/presents-dimensions.txt", "utf-8");

const main = () => {
  const rawDimensions = readDimensions();
  const giftBoxesDimensions = parseDimensions(rawDimensions);
  const materialCalculator = new MaterialCalculator();

  materialCalculator.createGiftBoxes(giftBoxesDimensions);
  const wrapperArea = materialCalculator.calculateWrapperArea();
  const ribbonLength = materialCalculator.calculateRibbonLength();

  console.log(`Wrapping Material Area is ${wrapperArea} sq. feet`);
  console.log(`Ribbon Material Length is ${ribbonLength} feet`);
};

main();
