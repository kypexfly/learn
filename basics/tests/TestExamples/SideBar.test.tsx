import React from "react"
import { render, screen } from "@testing-library/react"
import { expect, test } from "vitest"
import { SideBar } from "../../src/examples/TestExamples/MultipleElements"

test("renders anchors", () => {
  const items = [
    {
      name: "test",
      href: "/test",
    },
  ]
  render(<SideBar items={items} />)
  const anchorElements = screen.getAllByRole("link")
  expect(anchorElements[0]).toHaveTextContent(items[0].name)
  expect(anchorElements[0]).toHaveAttribute("href", items[0].href)
})
