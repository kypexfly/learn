import React from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import Heading from "../src/components/Heading"

describe("heading", () => {
  test("render on screen", () => {
    const content = "Heading"
    render(<Heading text={content} />)
    expect(screen.getByText("Heading"))
  })
})
