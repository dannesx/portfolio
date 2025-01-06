import { Github } from "lucide-react"
import hero from "@/data/hero.json"

const Hero = () => {
  return (
    <section className="grid lg:grid-cols-2 border-2 border-t-0">
      <div className="border-r-2 flex flex-col order-2 lg:order-1">
        <div className="p-4 py-8 lg:p-10 flex-1 flex flex-col justify-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-4">{hero.title}</h1>
          <p className="mb-4">{hero.description}</p>
          <div className="flex gap-3">
            {hero.skills.map((skill) => (
              <img key={skill.name} src={skill.src} alt={skill.name} />
            ))}
          </div>
        </div>
        <footer className="border-t-2 bg-primary hover:bg-secondary transition-colors cursor-pointer">
          <a
            href={hero.cta.href}
            className="flex gap-1.5 items-center justify-center py-4 uppercase tracking-wide text-center font-bold"
          >
            {hero.cta.label}
            <Github  className="h-5 w-5"/>
          </a>
        </footer>
      </div>

      <img
        src="https://github.com/dannesx.png"
        alt="Daniel Antunes"
        className="w-full order-1 lg:order-2 aspect-video lg:aspect-square object-cover"
      />
    </section>
  )
}
export default Hero
