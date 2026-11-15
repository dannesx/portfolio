import projects from "@/data/projects.json"
import Paw from "../paw"
import PosterButton from "../poster-button"

const Projects = () => {
  const { featured } = projects

  return (
    <section id="projetos" className="bg-sun py-12 lg:py-16">
      <div className="wrap">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="mb-1 font-mono text-xs uppercase tracking-[0.14em]">{projects.kicker}</p>
            <h2 className="font-display text-5xl leading-[0.85] tracking-[-0.03em] lg:text-[68px]">
              {projects.title}
            </h2>
          </div>
          <p className="hidden -rotate-[4deg] font-hand text-[30px] lg:block">{projects.hand}</p>
        </div>

        <div className="grid items-stretch gap-5 lg:grid-cols-[1.45fr_0.9fr]">
          <article className="flex flex-col items-start rounded-[22px] border-[3px] border-ink bg-card p-6 shadow-hard-lg sm:p-7">
            <Paw />
            <h3 className="mb-2 mt-5 font-display text-5xl leading-[0.86] tracking-[-0.03em] lg:text-[64px]">
              {featured.title}
            </h3>
            <p className="max-w-[46ch] text-[17px] leading-relaxed">{featured.description}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {featured.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border-2 border-ink bg-sun px-2.5 py-1.5 font-mono text-xs uppercase tracking-[0.04em]"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <div className="mt-auto flex flex-wrap gap-2 pt-6">
              {featured.links.map((link) => (
                <PosterButton key={link.href} href={link.href} tone={link.tone === "ink" ? "ink" : "card"}>
                  {link.label}
                </PosterButton>
              ))}
            </div>
          </article>

          <div className="grid gap-5">
            {projects.lab.map((item) => (
              <article
                key={item.href}
                className="flex flex-col items-start rounded-[22px] border-[3px] border-ink bg-card p-6 shadow-hard-lg"
              >
                <div className="flex w-full items-start justify-between gap-3">
                  <span className="font-mono text-xs uppercase tracking-[0.08em]">{item.label}</span>
                  <span className="-rotate-6 rounded-lg border-2 border-pop px-2 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-pop">
                    {item.status}
                  </span>
                </div>
                <h3 className="mb-2 mt-4 font-display text-[34px] leading-[0.9] tracking-[-0.03em]">
                  {item.title}
                </h3>
                <p className="text-[15px] leading-relaxed">{item.description}</p>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto pt-4 font-mono text-[13px] font-medium underline decoration-2 underline-offset-4"
                >
                  Ver repositório →
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
