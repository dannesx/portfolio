import { Menu, X } from "lucide-react"
import { useEffect, useId, useRef, useState } from "react"
import Logo from "./logo"
import PosterButton from "./poster-button"

const links = [
  { href: "#skills", label: "Skills" },
  { href: "#projetos", label: "Projetos" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const titleId = useId()

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)")
    const onChange = () => {
      if (media.matches) setOpen(false)
    }
    media.addEventListener("change", onChange)
    return () => media.removeEventListener("change", onChange)
  }, [])

  useEffect(() => {
    if (!open) return
    const root = menuRef.current
    if (!root) return

    const previouslyFocused = document.activeElement
    const focusable = () =>
      [...root.querySelectorAll<HTMLElement>("a[href], button:not([disabled])")]

    focusable()[0]?.focus()

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false)
        return
      }
      if (event.key !== "Tab") return
      const items = focusable()
      if (items.length === 0) return
      const first = items[0]
      const last = items[items.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    document.addEventListener("keydown", onKey)

    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = previousOverflow
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus()
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className="sticky top-0 z-30 border-b border-ink/10 bg-paper/95 backdrop-blur-sm">
      <a
        href="#topo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-sun focus:px-3 focus:py-2"
      >
        Ir para o conteúdo
      </a>
      <div className="wrap flex h-[4.5rem] items-center gap-6">
        <a href="#topo" className="text-ink" aria-label="Daniel Antunes, início">
          <Logo />
        </a>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Seções">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-flex h-11 items-center px-3 font-mono text-[13px] font-medium uppercase tracking-[0.04em] hover:text-pop"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <div className="hidden lg:block">
            <PosterButton href="#contato" tone="sun" external={false}>
              Conversar
            </PosterButton>
          </div>
          <button
            ref={buttonRef}
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border-2 border-ink bg-card shadow-hard lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <Menu className="size-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="fixed inset-0 z-50 flex flex-col bg-paper px-6 py-5 lg:hidden"
        >
          <div className="flex items-center justify-between">
            <p id={titleId} className="font-mono text-xs uppercase tracking-[0.14em]">
              Menu
            </p>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-full border-2 border-ink bg-card shadow-hard"
              onClick={close}
            >
              <X className="size-5" aria-hidden="true" />
              <span className="sr-only">Fechar</span>
            </button>
          </div>
          <nav className="mt-10 flex flex-col gap-2" aria-label="Seções">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                className="border-b-2 border-ink py-3 font-display text-5xl leading-none tracking-[-0.03em]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <PosterButton
            href="#contato"
            tone="sun"
            external={false}
            className="mt-8 w-full"
            onClick={close}
          >
            Conversar
          </PosterButton>
        </div>
      ) : null}
    </header>
  )
}

export default Navbar
