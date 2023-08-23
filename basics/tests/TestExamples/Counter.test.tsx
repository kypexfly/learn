import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import { expect, test } from "vitest"
import { Counter } from "../../src/examples/TestExamples/StateHook"

test("handles onClick", () => {
  render(<Counter />)

  const buttonElement = screen.getByText(/Add one/i)
  const divElement = screen.getByRole("contentinfo")

  fireEvent.click(buttonElement)

  expect(divElement).toHaveTextContent("Count is 1")
})
