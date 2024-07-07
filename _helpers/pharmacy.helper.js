import {
  checkExpiresInBetweenMinMaxValue,
  isBenefitEqualsFifty,
  isExpiredAndBenefitEqualsZero,
  isExpiredOrEqualsOrSmallerThanZero,
  isExpiredSmallerThanZero,
  updateBenefitMaxValue,
} from "../_utils/pharmacy.utils";

export const updateDrug = (drug) => {
  switch (drug.name) {
    case "Herbal Tea":
      return checkHerbalTeaDrug(drug);
    case "Fervex":
      return checkFervexDrug(drug);
    case "Magic Pill":
      return;
    case "Dafalgan":
      return checkNormalDrug(drug, 2);
    default:
      return checkNormalDrug(drug, 1);
  }
};
const checkNormalDrug = (drug, decreaseTime) => {
  drug.expiresIn -= 1;
  if (!isExpiredSmallerThanZero(drug.expiresIn)) {
    drug.benefit = updateBenefitMaxValue((drug.benefit -= 1 * decreaseTime));
  } else {
    drug.benefit = updateBenefitMaxValue((drug.benefit -= 2 * decreaseTime));
  }
  return;
};
const checkHerbalTeaDrug = (drug) => {
    if (!isExpiredOrEqualsOrSmallerThanZero(drug.expiresIn)) {
        drug.benefit = updateBenefitMaxValue((drug.benefit += 1));
    } else {
        drug.benefit = updateBenefitMaxValue((drug.benefit += 2));
    }
    drug.expiresIn -= 1;
  return;
};
const checkFervexDrug = (drug) => {
  drug.expiresIn -= 1;
  if (isExpiredAndBenefitEqualsZero(drug.expiresIn, drug.benefit)) {
    return;
  }
  if (isExpiredSmallerThanZero(drug.expiresIn)) {
    drug.benefit = 0;
    return;
  }
  if (isBenefitEqualsFifty(drug.benefit)) {
    return;
  }
  if (
    !isExpiredOrEqualsOrSmallerThanZero(drug.expiresIn) &&
    checkExpiresInBetweenMinMaxValue(drug.expiresIn, { min: 10 })
  ) {
    drug.benefit += 1;
  } else if (
    !isExpiredOrEqualsOrSmallerThanZero(drug.expiresIn) &&
    checkExpiresInBetweenMinMaxValue(drug.expiresIn, { min: 5, max: 10 })
  ) {
    drug.benefit = updateBenefitMaxValue((drug.benefit += 2));
  } else {
    drug.benefit = updateBenefitMaxValue((drug.benefit += 3));
  }
  return;
};
