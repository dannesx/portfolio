import { ArrowRightCircle } from "lucide-react"

type Props = {
  data: {
    title: string
    description: string
    bgColor: string
    image: string
    link: string
  }
}

const Project = ({ data }: Props) => {
  return (
    <div
      className="relative aspect-square border p-8 data-[bg=primary]:bg-primary data-[bg=secondary]:bg-secondary"
      data-bg={data.bgColor}
    >
      <h3 className="font-normal text-base">{data.title}</h3>
      <p className="font-bold text-2xl uppercase tracking-wide">
        {data.description}
      </p>

      <a
        className="absolute bottom-0 left-0 px-8 py-4 bg-white border-t-2 border-r-2 uppercase tracking-wide font-medium flex gap-2"
        href={data.link}
      >
        Mais detalhes
        <ArrowRightCircle strokeWidth={1.5} />
      </a>
    </div>
  )
}
export default Project
