export const isExpiredAndBenefitEqualsZero = (expired, benefit) => {
  return expired <= 0 && benefit === 0;
};
export const isBenefitEqualsFifty = (benefit) => {
  return benefit === 50;
};
export const updateBenefitMaxValue = (benefit) => {
  if (benefit > 50) {
    return (benefit = 50);
  }
  if (benefit < 0) {
    return (benefit = 0);
  }
  return benefit;
};
export const checkExpiresInBetweenMinMaxValue = (expiresIn, options = {}) => {
  if (!options.min && !options.max) {
    return false;
  }
  if (!options.min) {
    return expiresIn < options.max;
  }
  if (!options.max) {
    return options.min <= expiresIn;
  }
  if (options.min && options.max) {
    return options.min <= expiresIn && expiresIn <= options.max;
  }
};
export const isExpiredOrEqualsOrSmallerThanZero = (expired) => {
  return expired <= 0;
};
export const isExpiredSmallerThanZero = (expired) => {
  return expired < 0;
};
