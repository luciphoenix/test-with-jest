const fun = require("./app.js");
const capitalize = require("./capitalize");
const reverseString = require("./reverseString");
const calculator = require("./calculator");
const ceaserCipher = require("./ceaserCipher");
const analyzeArray = require("./analyzeArray");

test("two plus two", () => {
  expect(fun(2, 2)).toBe(4);
});

test("capitalized", () => {
  expect(capitalize("elvis")).toBe("Elvis");
});

test("reverse string", () => {
  expect(reverseString("Book")).toBe("kooB");
});
test("multiply 2 by 3", () => {
  expect(calculator.multiply(2, 3)).toEqual(6);
});
test("Divide 2 by 3", () => {
  expect(calculator.divide(2, 3)).toBeCloseTo(0.666);
});
test("add 2 to 3", () => {
  expect(calculator.add(2, 3)).toEqual(5);
});
test("substract 2 from 3", () => {
  expect(calculator.substract(3, 2)).toBe(1);
});

test("ceaser cipher", () => {
  expect(ceaserCipher("GrRa ZPsz g!@#$%^&*", 678)).toBe("ItTc BRub i!@#$%^&*");
});

test("analyse data", () => {
  expect(analyzeArray([2, 1, 3, 5, 4])).toStrictEqual({
    average: 3,
    length: 5,
    min: 1,
    max: 5,
  });
});
