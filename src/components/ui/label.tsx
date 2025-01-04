type Props = {
  children?: string
  htmlFor?: string
  className?: string
}

const Label = ({ children, htmlFor, className }: Props) => {
  return (
    <label htmlFor={htmlFor} className={className}>
      {children}
    </label>
  )
}
export default Label
