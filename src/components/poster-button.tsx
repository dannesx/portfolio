import type { ReactNode } from "react"

type Tone = "ink" | "sun" | "card"

const tones: Record<Tone, string> = {
  ink: "bg-ink text-card",
  sun: "bg-sun text-ink",
  card: "bg-card text-ink",
}

type Props = {
  href: string
  tone?: Tone
  children: ReactNode
  className?: string
  external?: boolean
  onClick?: () => void
}

const PosterButton = ({
  href,
  tone = "card",
  children,
  className = "",
  external = true,
  onClick,
}: Props) => {
  const externalProps = external
    ? { target: "_blank", rel: "noreferrer" }
    : {}

  return (
    <a
      href={href}
      onClick={onClick}
      className={`inline-flex h-11 items-center justify-center gap-2 rounded-full border-2 border-ink px-4 text-[15px] font-semibold shadow-hard transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0_#1A120C] motion-reduce:transition-none motion-reduce:hover:translate-x-0 motion-reduce:hover:translate-y-0 ${tones[tone]} ${className}`}
      {...externalProps}
    >
      {children}
    </a>
  )
}

export default PosterButton
