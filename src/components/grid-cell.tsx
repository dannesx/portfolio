type Props = {
  children: React.ReactNode
}

const GridCell = ({ children }: Props) => {
  return <p className="p-8 border leading-tight">{children}</p>
}
export default GridCell
