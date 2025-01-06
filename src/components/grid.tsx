import GridCell from "./grid-cell"

type Props = {
  data: string[] | number[]
}

const Grid = ({ data }: Props) => {
  return (
    <div className="grid lg:grid-cols-3">
      {data.map((item, index) => (
        <GridCell key={index}>{item}</GridCell>
      ))}
    </div>
  )
}
export default Grid
