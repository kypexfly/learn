import React, { createContext, useContext, useState } from "react"

type AccordionContextProps = {
  openIndex: number
  toggle: (index: number) => void
}

const AccordionContext = createContext<AccordionContextProps>({
  openIndex: -1,
  toggle: () => {},
})

const useAccordionContext = () => {
  const context = useContext(AccordionContext)

  if (!context) {
    throw new Error("useAccordionContext must be used within an AccordionContext Provider")
  }

  const { openIndex, toggle } = context

  return { openIndex, toggle }
}

export const Accordion = (props: { children?: React.ReactNode }) => {
  const [openIndex, setOpenIndex] = useState<number>(-1)

  const toggle = (index: number) => {
    if (index === openIndex) {
      setOpenIndex(-1)
    } else {
      setOpenIndex(index)
    }
  }

  return (
    <AccordionContext.Provider value={{ openIndex, toggle }}>
      <div className="max-w-lg border">{props.children}</div>
    </AccordionContext.Provider>
  )
}

type AccordionItemProps = { index: number; children: React.ReactElement[] }

export const AccordionItem = ({ index, children }: AccordionItemProps) => {
  const { openIndex, toggle } = useAccordionContext();

  let header: React.ReactElement | null = null;
  let content: React.ReactElement | null = null;

  React.Children.forEach(children, (child) => {
    if (child.type === AccordionHeader) {
      if (header) {
        throw new Error(
          "AccordionItem should only have one AccordionHeader child element"
        );
      }
      header = child;
    } else if (child.type === AccordionContent) {
      if (content) {
        throw new Error(
          "AccordionItem should only have one AccordionContent child element"
        );
      }
      content = child;
    } else {
      throw new Error(
        "AccordionItem should only have AccordionHeader and AccordionContent child elements"
      );
    }
  });

  return (
    <div className="border">
      {header &&
        React.cloneElement(header, {
          isOpen: openIndex === index,
          onClick: () => toggle(index),
        })}
      {content &&
        React.cloneElement(content, {
          isOpen: openIndex === index,
        })}
    </div>
  );
};

type AccordionHeaderProps = {
  isOpen: boolean
  onClick: () => void
  children?: React.ReactNode
}

export const AccordionHeader = ({ children, isOpen, onClick }: AccordionHeaderProps) => {
  return (
    <div className="flex cursor-pointer justify-between bg-zinc-200 px-4 py-2" onClick={onClick}>
      <div>{children}</div>
      <span>{isOpen ? "-" : "+"}</span>
    </div>
  )
}

type AccordionContentProps = {
  isOpen: boolean
  children?: React.ReactNode
}

export const AccordionContent = ({ isOpen, children }: AccordionContentProps) => {
  return isOpen && <div className="px-4 py-2">{children}</div>
}
