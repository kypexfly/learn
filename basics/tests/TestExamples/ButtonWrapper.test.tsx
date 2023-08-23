import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import { expect, test, vi } from "vitest"
import { ButtonWrapper } from "../../src/examples/TestExamples/EventHandlerTest"

test("handles onClick", () => {
  const onClick = vi.fn()
  const title = "Add item"
  render(<ButtonWrapper onClick={onClick} title={title} />)

  const buttonElement = screen.getByRole("button")
  fireEvent.click(buttonElement)
  // buttonElement.click()

  expect(onClick).toHaveBeenCalledTimes(1)
})
