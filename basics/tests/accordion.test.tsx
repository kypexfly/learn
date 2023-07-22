import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import AccordionExample from "../src/examples/AccordionExample"

describe("accordion", () => {
  test("render on screen", () => {
    render(<AccordionExample />)
    expect(screen.getByText("Header 1"))
  })
})
