import { describe, expect, test } from "vitest"
import { sum } from "../lib/utils"

describe("sum", () => {
  test("should add two numbers", () => {
    const num1 = 5
    const num2 = 10
    const expectedResult = 15

    const result = sum(num1, num2)

    expect(result).toBe(expectedResult)
  })
})
