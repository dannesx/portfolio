import socials from "@/data/socials.json"
import { Github, Instagram, Linkedin } from "lucide-react"

const icons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Instagram: Instagram,
}

const Socials = () => {
  return (
    <ul className="flex flex-wrap gap-3">
      {socials.map((social) => {
        const Icon = icons[social.name as keyof typeof icons]
        return (
          <li key={social.name}>
            <a
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.name}
              className="inline-flex size-11 items-center justify-center rounded-full border-2 border-ink bg-card text-ink shadow-hard transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0_#1A120C] motion-reduce:transition-none"
            >
              {Icon ? <Icon className="size-5" aria-hidden="true" /> : social.name}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default Socials
