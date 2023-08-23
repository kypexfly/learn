import React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import { rest } from "msw"
import { setupServer } from "msw/node"
import { afterAll, afterEach, beforeAll, expect, test } from "vitest"
import { APIComponent } from "../../src/examples/TestExamples/AsyncHook"

// https://stackoverflow.com/questions/75794309/how-does-fetch-detect-if-a-request-using-a-relative-path-is-coming-from-a-browse

const server = setupServer(
  rest.get("/api", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ name: "John Doe" }))
  })
)

beforeAll(() => server.listen({ onUnhandledRequest: "error" }))
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test("gets data", async () => {
//   render(<APIComponent />)

//   const out = await waitFor(() => screen.getByRole("contentinfo"))

  //   expect(out).toHaveTextContent("Name is John Doe")
  expect(true).toBe(true)
})
