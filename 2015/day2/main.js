const { Box } = require("./src/box");

const main = () => {
  const dimensions = "2x3x4";
  const [length, width, heigth] = dimensions.split("x");
  const box = new Box(length, width, heigth);
  const wrapperArea = box.calculateSurfaceArea();
  const slackArea = box.calculateSmallestArea();
  const totalArea = wrapperArea + slackArea;
  console.log(totalArea);
};

main();
