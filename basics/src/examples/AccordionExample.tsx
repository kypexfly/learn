import { Accordion, AccordionContent, AccordionHeader, AccordionItem } from "../components/Accordion"

const AccordionExample = () => {
  return (
    <Accordion>
      <AccordionItem index={0}>
        <AccordionHeader>Header 1</AccordionHeader>
        <AccordionContent>Content 1</AccordionContent>
      </AccordionItem>

      <AccordionItem index={1}>
        <AccordionHeader>Header 2</AccordionHeader>
        <AccordionContent>Content 2</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default AccordionExample
