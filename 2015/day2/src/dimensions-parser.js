const toNumber = (n) => +n;

const parseBoxDimensions = (dimension) => dimension.split("x").map(toNumber);

const parseDimensions = (rawDimensions) => {
  if (rawDimensions.length === 0) return [];

  const giftBoxesDimensions = rawDimensions.trim().split("\n");
  return giftBoxesDimensions.map(parseBoxDimensions);
};

module.exports = { parseDimensions };
