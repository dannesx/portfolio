type Props = {
  children: React.ReactNode
  index: number
}

const Badge = ({ children, index }: Props) => {
  return (
    <div
      className="uppercase py-1 px-4 rounded-full border-2 font-medium data-[color=0]:bg-primary data-[color=1]:bg-secondary data-[color=2]:bg-white"
      data-color={index % 3}
    >
      {children}
    </div>
  )
}
export default Badge
