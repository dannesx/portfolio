import hero from "@/data/hero.json"
import PosterButton from "../poster-button"

const Hero = () => {
  return (
    <section id="topo" className="wrap grid items-center gap-8 py-8 lg:grid-cols-[1.08fr_0.92fr] lg:py-14">
      <div>
        <p className="mb-4 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[12.5px] font-medium uppercase tracking-[0.06em]">
          <span className="size-2.5 rounded-full bg-pop shadow-[0_0_0_4px_rgba(226,58,43,0.16)]" aria-hidden="true" />
          {hero.eyebrow.split(" · ").map((part, index, parts) => (
            <span key={part} className={index === parts.length - 1 ? "whitespace-nowrap" : undefined}>
              {part}
              {index < parts.length - 1 ? " · " : null}
            </span>
          ))}
        </p>
        <h1 className="font-display text-[64px] leading-[0.8] tracking-[-0.025em] sm:text-[88px] lg:text-[108px]">
          {hero.name[0]}
          <br />
          {hero.name[1]}
        </h1>
        <svg className="my-3 block w-[220px]" viewBox="0 0 220 28" aria-hidden="true">
          <path
            d="M4 18 C 30 8, 60 24, 100 14 S 170 6, 216 16"
            fill="none"
            stroke="#e23a2b"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
        <p className="max-w-[34ch] text-lg leading-snug sm:text-xl">{hero.description}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {hero.links.map((link) => (
            <PosterButton key={link.href} href={link.href} tone={link.tone === "ink" ? "ink" : "card"}>
              {link.label}
            </PosterButton>
          ))}
        </div>
        <p className="mt-4 inline-block -rotate-3 font-hand text-[26px] text-pop">{hero.hand}</p>
      </div>

      <div className="relative min-h-[280px] sm:min-h-[420px]">
        <svg
          className="animate-drift absolute left-1 top-1 z-[2] motion-reduce:animate-none"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          aria-hidden="true"
        >
          <path
            d="M27 2 L32 20 L50 22 L36 33 L40 51 L27 41 L14 51 L18 33 L4 22 L22 20 Z"
            fill="#e23a2b"
            stroke="#1a120c"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
        <svg
          className="absolute right-0 top-2 z-[2] hidden sm:block"
          width="78"
          height="48"
          viewBox="0 0 78 48"
          aria-hidden="true"
        >
          <path
            d="M4 30 C 24 8, 40 10, 58 22"
            fill="none"
            stroke="#1a120c"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M50 12 L66 22 L48 30"
            fill="none"
            stroke="#1a120c"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="absolute left-0 top-6 size-[140px] rounded-full bg-sun sm:size-[210px]" aria-hidden="true">
          <span className="absolute inset-[18px] rounded-full border-2 border-dashed border-ink/35" />
        </div>
        <figure className="relative z-[1] ml-auto mt-8 w-[min(420px,92%)] -rotate-[4.5deg] rounded-[26px] border-[3px] border-ink bg-black shadow-sticker transition-transform duration-200 hover:-rotate-[1.5deg] motion-reduce:transition-none motion-reduce:hover:-rotate-[4.5deg]">
          <span
            className="absolute -top-3.5 left-1/2 h-[26px] w-[92px] -translate-x-1/2 rotate-[3deg] border border-ink/15 bg-sun/80"
            aria-hidden="true"
          />
          <img
            src={hero.portrait}
            alt="Ilustração de Daniel Antunes, de fone, com um arco-íris atrás"
            width="460"
            height="460"
            className="block aspect-square w-full rounded-[22px] object-cover"
          />
        </figure>
        <p className="absolute bottom-2 left-0 z-[2] rotate-[5deg] rounded-2xl border-2 border-ink bg-card px-3 py-2 font-mono text-xs font-medium uppercase leading-snug tracking-[0.04em] shadow-hard-md sm:bottom-8">
          <strong className="block font-medium">{hero.badge[0]}</strong>
          {hero.badge[1]}
        </p>
      </div>
    </section>
  )
}

export default Hero
