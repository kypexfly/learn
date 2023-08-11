interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ ...props }: InputProps) => {
  return <input className="border bg-slate-100 px-1 py-3 text-lg" {...props} />
}
