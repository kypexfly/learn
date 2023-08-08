import { expect, describe, it } from "vitest";

export const fib = (n: number): number => (n <= 1 ? n : fib(n - 1) + fib(n - 2));

const testCases = [
  { input: 0, expected: 0 },
  { input: 1, expected: 1 },
  { input: 2, expected: 1 },
  { input: 5, expected: 5 },
  { input: 10, expected: 55 },
];

describe("fibonacci", () => {
  testCases.forEach(({ input, expected }) => {
    it(`fib(${input}) should return ${expected}`, () => {
      const result = fib(input);
      expect(result).toBe(expected);
    });
  });
});
