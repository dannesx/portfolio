import about from "@/data/about.json"
import Socials from "../socials"

const tilts = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "-rotate-[1.5deg]"]

const About = () => {
  return (
    <section id="sobre" className="bg-pop py-14 text-ink lg:py-20">
      <div className="wrap">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.14em] text-card">{about.kicker}</p>
        <h2 className="font-display text-5xl leading-[0.85] tracking-[-0.03em] text-card lg:text-[68px]">
          {about.title}
        </h2>
        <div className="mt-8 grid items-start gap-5 lg:grid-cols-2">
          <article className="rounded-[22px] border-[3px] border-ink bg-card p-6 shadow-hard-lg sm:p-8">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mb-4 text-base leading-relaxed last:mb-0 sm:text-lg">
                {paragraph}
              </p>
            ))}
          </article>
          <ol className="grid gap-3">
            {about.timeline.map((item, index) => (
              <li
                key={item.what}
                className={`rounded-2xl border-2 border-ink bg-card px-4 py-3 shadow-hard ${tilts[index] ?? ""}`}
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-pop">{item.when}</p>
                <p className="mt-1 text-lg font-semibold leading-snug">{item.what}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="mt-8">
          <Socials />
        </div>
      </div>
    </section>
  )
}

export default About
