export const getRandomAffordability = () => {
  const affordabilityMax =
    Math.round((Math.random() * 6 + 4 + Number.EPSILON) * 10) / 10;
  const affordabilityMin =
    Math.round((Math.random() * 4 + 1 + Number.EPSILON) * 10) / 10;
  const affordability = {
    min: affordabilityMin,
    max: affordabilityMax,
  };
  return affordability;
};
