import socials from "@/data/socials.json"
import { Github, Linkedin, Instagram } from "lucide-react"

const Socials = () => {
  return (
    <div className="flex gap-3">
      {socials.map((social, index) => (
        <a
          className="border-2 p-2 hover:bg-primary transition-colors"
          key={index}
          href={social.href}
        >
          {social.name === "GitHub" && <Github className="h-5 w-5" />}
          {social.name === "LinkedIn" && <Linkedin className="h-5 w-5" />}
          {social.name === "Instagram" && <Instagram className="h-5 w-5" />}
        </a>
      ))}
    </div>
  )
}
export default Socials
