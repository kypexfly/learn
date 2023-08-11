import { FormEvent, useRef, useState } from "react"
import { Input } from "./ui/Input"

type FormShape = {
  fullname: string
  age: number
  country: string
  address: string
  agree: boolean
}

const UncontrolledForm = () => {
  const [result, setResult] = useState<FormShape>()

  const form = useRef<HTMLFormElement | null>(null)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!form.current) return

    const formData = new FormData(form.current)

    const data: FormShape = {
      fullname: formData.get("fullname") as string,
      age: parseInt(formData.get("age") as string, 10),
      country: formData.get("country") as string,
      address: formData.get("address") as string,
      agree: formData.get("agree") === "on",
    }

    setResult(data)
    alert("Form submitted")
  }

  return (
    <form ref={form} onSubmit={handleSubmit} className="space-y-3 rounded border p-3">
      <h1 className="text-xl font-bold">Uncontrolled Form (FormData API)</h1>
      <FormGroup>
        <label htmlFor="fullname">Fullname</label>
        <Input type="text" name="fullname" />
      </FormGroup>
      <FormGroup>
        <label htmlFor="age">Age</label>
        <Input type="number" name="age" />
      </FormGroup>
      <FormGroup>
        <label htmlFor="country">Country</label>
        <Input type="text" name="country" />
      </FormGroup>
      <FormGroup>
        <label htmlFor="address">Address</label>
        <Input type="text" name="address" />
      </FormGroup>
      <FormGroup>
        <label htmlFor="agree">Agree with terms</label>
        <Input type="checkbox" name="agree" />
      </FormGroup>

      <button type="submit" className="rounded-md bg-slate-300 px-4 py-2">
        Submit
      </button>

      <div>
        Result:
        <pre>{JSON.stringify(result, null, 2)}</pre>
      </div>
    </form>
  )
}

const FormGroup = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col gap-3 text-center">{children}</div>
}

export default UncontrolledForm
