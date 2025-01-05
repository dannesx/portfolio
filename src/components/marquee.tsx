import { ArrowRightCircle } from "lucide-react"
import { marquee } from "@/data/projects.json"

const Marquee = () => {
  return (
    <div className="relative overflow-hidden bg-black text-white py-4">
      <a
        href="#"
        className="flex items-center gap-6 whitespace-nowrap animate-marquee"
      >
        {Array.from({ length: 20 }).map((_, index) => (
          <div className="flex items-center gap-6" key={index}>
            <span className="uppercase tracking-wide font-bold">{marquee}</span>
            <ArrowRightCircle strokeWidth={1.5} />
          </div>
        ))}
      </a>
    </div>
  )
}

export default Marquee
