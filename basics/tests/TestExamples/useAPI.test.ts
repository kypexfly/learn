import { renderHook } from "@testing-library/react-hooks"
import { rest } from "msw"
import { setupServer } from "msw/node"
import { afterAll, afterEach, beforeAll, expect, test } from "vitest"
import { useAPI } from "../../src/examples/TestExamples/useAPI"

const server = setupServer(
  rest.get("/api", (req, res, ctx) => {
    return res(ctx.json({ name: "John Doe" }))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test("should fetch data", async () => {
  const { result, waitForNextUpdate } = renderHook(() => useAPI())

  await waitForNextUpdate()

  expect(result.current).toEqual({ name: "John Doe" })
})
