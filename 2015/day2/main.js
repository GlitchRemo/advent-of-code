const fs = require("fs");
const { GiftBox } = require("./src/giftbox");
const { parseDimensions } = require("./src/dimensions-parser");
const { MaterialCalculator } = require("./src/material-calculator");

const readDimensions = () =>
  fs.readFileSync("./resources/presents-dimensions.txt", "utf-8");

const main = () => {
  const rawDimensions = readDimensions();
  const giftBoxesDimensions = parseDimensions(rawDimensions);
  const materialCalculator = new MaterialCalculator();

  materialCalculator.createGiftBoxes(giftBoxesDimensions);
  const giftBoxesWrapperArea = materialCalculator.calculateTotalWrapperArea();
  const giftBoxesRibbonLength = materialCalculator.calculateTotalRibbonLength();

  console.log(`Wrapping Material Area is ${giftBoxesWrapperArea} sq. feet`);
  console.log(`Ribbon Material Length is ${giftBoxesRibbonLength} feet`);
};

main();
