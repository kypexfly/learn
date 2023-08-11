import ControlledForm from "@/components/ControlledForm"
import UncontrolledForm from "@/components/UncontrolledForm"

function FormExample() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-3">
      <ControlledForm />
      <UncontrolledForm />
    </main>
  )
}

export default FormExample
