import { cn } from "@/lib/utils"

interface Button extends React.HTMLAttributes<HTMLButtonElement> {}

export const Button = ({ className, ...props }: Button) => {
  return <button className={cn("rounded-md bg-blue-600 px-4 py-2 font-bold text-white", className)} {...props} />
}
