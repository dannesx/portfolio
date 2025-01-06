import about from "@/data/about.json"
import { Github, Instagram, Linkedin } from "lucide-react"
import socials from "@/data/socials.json"

const About = () => {
  return (
    <section className="border grid lg:grid-cols-2" id="about">
      <header className="lg:col-span-2 border">
        <h2 className="py-2 px-4 lg:px-8">
          <span className="text-2xl lg:text-3xl text-primary font-extrabold mr-1">
            #
          </span>
          {about.title}
        </h2>
      </header>

      <div className="flex flex-col order-2 lg:order-1">
        <article className="border p-4 py-8 lg:p-10 flex-1 flex flex-col justify-center hyphens-auto">
          {about.paragraphs.map((paragraph, index) => (
            <p key={index} className="mb-4 indent-4">
              {paragraph}
            </p>
          ))}
        </article>

        <div className="grid grid-cols-3">
          {socials.map((social, index) => (
            <a
              className="border px-4 lg:px-8 py-4 uppercase font-bold tracking-wide flex justify-center items-center gap-1 hover:bg-primary transition-colors"
              key={index}
              href={social.href}
            >
              {social.name === "GitHub" && <Github className="h-4 w-4 hidden lg:block" />}
              {social.name === "LinkedIn" && <Linkedin className="h-4 w-4 hidden lg:block" />}
              {social.name === "Instagram" && <Instagram className="h-4 w-4 hidden lg:block" />}
              {social.name}
            </a>
          ))}
        </div>
      </div>

      <img
        src="https://github.com/dannesx.png"
        alt="Daniel Antunes"
        className="w-full order-1 lg:order-2 aspect-video lg:aspect-square object-cover"
      />
    </section>
  )
}
export default About
