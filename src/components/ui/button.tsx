type Props = {
  children?: React.ReactNode
  className?: string
  type?: "submit" | "reset" | "button"
}

const Button = ({ children, className, type }: Props) => {
  return (
    <button
      className={`bg-primary text-black p-3 uppercase tracking-wide font-bold ${className}`}
      type={type}
    >
      {children}
    </button>
  )
}
export default Button
