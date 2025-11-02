import { it, test, expect } from "vitest";
import { add } from "./math.js";

//  AAA Pattern  - Arrange , Act , Assert
it("should return the sum if an array of numbers is passed", () => {
  // Arrange
  const numbers = [1, 2, 3, 4, 5];
  const expectedResult = numbers.reduce((acc, cur) => acc + cur);
  // Actions
  const result = add(numbers);
  // Assertion
  expect(result).toBe(expectedResult);
});

it("it should return NaN if at least one invalid number is provided", () => {
  // Arrange
  const numbers = [1, 2, "invalid", 4, 5];
  // Actions
  const result = add(numbers);
  // Assertion
  expect(result).toBeNaN();
});

it("it should provide correct sum if an numeric array is provided", () => {
  // Arrange
  const numbers = ["1", "3", "3"];
  const expectedResult = numbers.reduce((acc, cur) => +acc + +cur);
  // Actions
  const result = add(numbers);
  // Assertion
  expect(result).toBe(expectedResult);
});

it("it should throw an error if no argument is provided", () => {
  const resultFn = () => add();
  expect(resultFn).toThrow();
});

it("it should throw an error if multiple  arguments is provided", () => {
  const resultFn = () => add(1, 2, 3);
  expect(resultFn).toThrow();
});
