import skills from "@/data/skills.json"

const Skills = () => {
  return (
    <section id="skills" className="bg-ink py-14 text-card lg:py-20">
      <div className="wrap">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.14em] text-sun">{skills.kicker}</p>
        <h2 className="font-display text-5xl leading-[0.85] tracking-[-0.03em] lg:text-[68px]">
          {skills.title}
        </h2>
        <ol className="mt-8 max-w-3xl">
          {skills.services.map((service, index) => (
            <li key={service} className="flex gap-4 border-b border-card/15 py-4 text-lg leading-snug">
              <span className="w-8 shrink-0 font-mono text-sm text-sun" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{service}</span>
            </li>
          ))}
        </ol>
        <ul className="mt-8 flex flex-wrap gap-2">
          {skills.tags.map((tag) => (
            <li key={tag}>
              <span className="inline-flex h-10 items-center rounded-full bg-sun px-3 font-mono text-xs uppercase tracking-[0.04em] text-ink">
                {tag}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills
