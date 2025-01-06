type Props = {
  children: React.ReactNode
}

const GridCell = ({ children }: Props) => {
  return <p className="p-4 py-6 lg:p-10 border leading-tight">{children}</p>
}
export default GridCell
