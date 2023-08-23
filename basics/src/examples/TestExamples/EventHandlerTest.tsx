interface Button extends React.HTMLAttributes<HTMLButtonElement> {
  title: string
}

export const ButtonWrapper = ({ title, ...props }: Button) => {
  return <button {...props}>{title}</button>
}
