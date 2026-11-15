import Logo from "./logo"
import Socials from "./socials"

const links = [
  { href: "#skills", label: "Skills" },
  { href: "#projetos", label: "Projetos" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
]

const Footer = () => {
  return (
    <footer className="bg-ink text-card">
      <div className="wrap grid gap-8 py-10 lg:grid-cols-[auto_1fr_auto] lg:items-center">
        <a href="#topo" className="text-sun" aria-label="Daniel Antunes, início">
          <Logo className="size-10" />
        </a>
        <nav aria-label="Rodapé">
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="inline-flex h-11 items-center font-mono text-sm uppercase tracking-[0.06em]">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <Socials />
      </div>
      <p className="wrap border-t border-card/15 py-4 text-center font-mono text-xs leading-relaxed text-card/80">
        © {new Date().getFullYear()}, dannesx · Todos os direitos reservados · Design por Elizaveta Khitrich
      </p>
    </footer>
  )
}

export default Footer
