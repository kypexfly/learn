import "@/styles/globals.css"
import { useState } from "react"

const Accordion = () => {
  return (
    <div className="w-96 border border-zinc-200">
      <AccordionItem />
      <AccordionItem />
      <AccordionItem />
    </div>
  )
}

type AccordionItemProps = {
  children?: React.ReactNode
}

const AccordionItem = ({ children }: AccordionItemProps) => {
  const [active, setActive] = useState<boolean>(false)
  return (
    <div>
      {children}
      <div
        className="flex cursor-pointer justify-between bg-blue-300 px-4 py-2 font-bold"
        onClick={() => setActive(!active)}
      >
        Header <span>{active ? "-" : "+"}</span>
      </div>
      <div className={`${active ? "block" : "hidden"} px-4 py-2`}>Content</div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Accordion />
    </div>
  )
}

export default App
