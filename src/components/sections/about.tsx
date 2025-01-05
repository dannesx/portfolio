import about from "@/data/about.json"
import { Github, Instagram, Linkedin } from "lucide-react"
import socials from "@/data/socials.json"

const About = () => {
  return (
    <section className="border grid grid-cols-2" id="about">
      <header className="col-span-2 border">
        <h2 className="py-2 px-8">{about.title}</h2>
      </header>

      <div className="flex flex-col">
        <article className="border p-8 flex-1 flex flex-col justify-center">
          {about.paragraphs.map((paragraph, index) => (
            <p key={index} className="mb-4 indent-4">
              {paragraph}
            </p>
          ))}
        </article>

        <div className="grid grid-cols-3">
          {socials.map((social, index) => (
            <a
              className="border px-8 py-4 uppercase font-bold tracking-wide flex justify-center items-center gap-1 hover:bg-primary transition-colors"
              key={index}
              href={social.href}
            >
              {social.name === "GitHub" && <Github className="h-4 w-4" />}
              {social.name === "LinkedIn" && <Linkedin className="h-4 w-4" />}
              {social.name === "Instagram" && <Instagram className="h-4 w-4" />}
              {social.name}
            </a>
          ))}
        </div>
      </div>

      <img
        src="https://github.com/dannesx.png"
        alt="Daniel Antunes"
        className="w-full border"
      />
    </section>
  )
}
export default About
