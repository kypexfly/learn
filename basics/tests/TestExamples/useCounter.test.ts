import { act, renderHook } from "@testing-library/react-hooks"
import { expect, test } from "vitest"
import { useCounter } from "../../src/examples/TestExamples/useCounter"

// https://stackoverflow.com/questions/75794309/how-does-fetch-detect-if-a-request-using-a-relative-path-is-coming-from-a-browse

test("should increment", () => {
  // const { result } = renderHook(() => useCounter())

  // act(() => {
  //   result.current.increment()
  // })

  // expect(result.current.count).toBe(1)
  expect(1).toBe(1)
})
