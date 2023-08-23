import React from "react"
import { render, screen } from "@testing-library/react"
import { expect, test } from "vitest"
import { Person } from "../../src/examples/TestExamples/SingleElement"

test("renders a name", () => {
  const name = "Ricardo"
  render(<Person name={name} />)
  //   const element = screen.getByText(/Ricardo/i)
  const element = screen.getByRole("contentinfo")
  expect(element).toHaveTextContent(name)
  expect(element).toHaveAttribute("role", "contentinfo")
})
