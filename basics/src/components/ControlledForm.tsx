import { FormEvent, useReducer } from 'react'
import { Input } from './ui/Input';

// Inspired from:
// https://medium.com/swlh/usereducer-form-example-16675fa60229
// https://dev.to/craigaholliday/using-the-usereducer-hook-in-react-with-typescript-27m1
// https://github.com/Klerith/ts-react-hooks/blob/main/src/components/ContadorRed.tsx

type FormState = typeof initialState

type FormAction =
  | { type: 'HANDLE_INPUT_TEXT'; payload: string; field: string }
  | { type: 'HANDLE_INPUT_NUMBER'; payload: number; field: string }
  | { type: 'TOGGLE_CHECKBOX' }

const initialState = {
  fullname: '',
  age: 0,
  country: '',
  address: '',
  isAgree: false,
}

const formReducer = (state: FormState, action: FormAction) => {
  switch (action.type) {
    case 'HANDLE_INPUT_TEXT':
      return {
        ...state,
        [action.field]: action.payload,
      }
    case 'HANDLE_INPUT_NUMBER':
      return {
        ...state,
        [action.field]: action.payload,
      }
    case 'TOGGLE_CHECKBOX':
      return {
        ...state,
        isAgree: !state.isAgree,
      }
    default:
      return state
  }
}

const ControlledForm = () => {
  const [formState, dispatch] = useReducer(formReducer, initialState)

  const handleTextChange = (e: FormEvent<HTMLInputElement>) => {
    dispatch({
      type: 'HANDLE_INPUT_TEXT',
      field: e.currentTarget.name,
      payload: e.currentTarget.value,
    })
  }
  const handleNumberChange = (e: FormEvent<HTMLInputElement>) => {
    dispatch({
      type: 'HANDLE_INPUT_NUMBER',
      field: e.currentTarget.name,
      payload: +e.currentTarget.value,
    })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    alert('Form submitted')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 rounded border p-3">
      <h1 className="text-xl font-bold">Controlled Form (useReducer)</h1>

      <FormGroup>
        <label htmlFor="fullname">Fullname</label>
        <Input value={formState.fullname} onChange={handleTextChange} type="text" name="fullname" />
      </FormGroup>

      <FormGroup>
        <label htmlFor="age">Age</label>
        <Input value={formState.age} onChange={handleNumberChange} type="number" name="age" />
      </FormGroup>

      <FormGroup>
        <label htmlFor="country">Country</label>
        <Input value={formState.country} onChange={handleTextChange} type="text" name="country" />
      </FormGroup>

      <FormGroup>
        <label htmlFor="address">Address</label>
        <Input value={formState.address} onChange={handleTextChange} type="text" name="address" />
      </FormGroup>

      <FormGroup>
        <label htmlFor="agree">Agree with terms</label>
        <Input
          checked={formState.isAgree}
          onChange={() => dispatch({ type: 'TOGGLE_CHECKBOX' })}
          type="checkbox"
          name="agree"
        />
      </FormGroup>

      <button type="submit" className="rounded-md bg-slate-300 px-4 py-2">
        Submit
      </button>

      <div>
        Result:
        <pre>{JSON.stringify(formState, null, 2)}</pre>
      </div>
    </form>
  )
}

const FormGroup = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col gap-3 text-center">{children}</div>
}

export default ControlledForm
