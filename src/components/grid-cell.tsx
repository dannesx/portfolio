type Props = {
  children: React.ReactNode
}

const GridCell = ({ children }: Props) => {
  return <div className="p-8 border">{children}</div>
}
export default GridCell
