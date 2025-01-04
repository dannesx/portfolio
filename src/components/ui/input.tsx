import { Check } from "lucide-react"

type Props = {
  type?: string
  className?: string
  placeholder?: string
  id?: string
}

const Input = ({ type, className, placeholder, id }: Props) => {
  return (
    <div>
      <input
        type={type}
        data-type={type}
        className={`relative peer border-2 border-white bg-black p-2 outline-none appearance-none checked:bg-primary checked:border-primary data-[type="checkbox"]:cursor-pointer ${className}`}
        id={id}
        placeholder={placeholder}
      />
      <Check className="absolute hidden peer-checked:block h-4 w-4 -mt-6 ms-0.5 pointer-events-none text-black" />
    </div>
  )
}
export default Input
