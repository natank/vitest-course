import {
  describe,
  beforeAll,
  beforeEach,
  afterAll,
  afterEach,
  it,
  expect,
} from "vitest";
import { add, subtract, multiply, divide } from "./calculator";

let data;

describe("Calculator Module", () => {
  beforeAll(() => {
    console.log("Setting up before all tests");
    data = { num1: 10, num2: 5 };
  });

  beforeEach(() => {
    console.log("Setting up before each test");
    data.result = 0;
  });

  afterAll(() => {
    console.log("Cleaning up after all tests");
    data = null;
  });

  afterEach(() => {
    console.log("Cleaning up after each test");
    delete data.result;
  });

  describe("add function", () => {
    it("adds two numbers", () => {
      data.result = add(data.num1, data.num2);
      expect(data.result).toBe(15);
    });
  });

  describe("subtract function", () => {
    it("subtracts two numbers", () => {
      data.result = subtract(data.num1, data.num2);
      expect(data.result).toBe(5);
    });
  });

  describe("multiply function", () => {
    it("multiplies two numbers", () => {
      data.result = multiply(data.num1, data.num2);
      expect(data.result).toBe(50);
    });
  });

  describe("divide function", () => {
    it("divides two numbers", () => {
      data.result = divide(data.num1, data.num2);
      expect(data.result).toBe(2);
    });

    it("throws error when dividing by zero", () => {
      expect(() => divide(data.num1, 0)).toThrow("Cannot divide by zero");
    });
  });
});
