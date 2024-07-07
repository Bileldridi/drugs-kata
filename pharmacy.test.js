import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the expiresIn by 1 and increase benefit by 1", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", 1, 4)],
    );
  });
  it("should decrease the expiresIn by 1 and set benefit to 50", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 2, 50)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", 1, 50)],
    );
  });
  it("should decrease the expiresIn by 1 and increase benefit by 3", () => {
    expect(new Pharmacy([new Drug("Fervex", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 1, 6)],
    );
  });
  it("should decrease the expiresIn by 1 and increase benefit by 2", () => {
    expect(new Pharmacy([new Drug("Fervex", 6, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 5, 5)],
    );
  });
  it("should decrease the expiresIn by 1 and increase benefit by 1", () => {
    expect(new Pharmacy([new Drug("Fervex", 12, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 11, 4)],
    );
  });
  it("should decrease the expiresIn by 1 and benefit to 0", () => {
    expect(new Pharmacy([new Drug("Fervex", -1, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", -2, 0)],
    );
  });
  it("should not change", () => {
    expect(new Pharmacy([new Drug("Magic Pill", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Magic Pill", 2, 3)],
    );
  });
  it("should decrease the benefit by 2 and expiresIn by 1", () => {
    expect(new Pharmacy([new Drug("Dafalgan", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", 1, 1)],
    );
  });
  it("should decrease the benefit by 4 and expiresIn by 1", () => {
    expect(new Pharmacy([new Drug("Dafalgan", -1, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", -2, 0)],
    );
  });
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)],
    );
  });
});
