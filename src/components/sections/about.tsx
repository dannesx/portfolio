import Badge from "../ui/badge"
import Grid from "../grid"
import about from "@/data/about.json"

const About = () => {
  return (
    <section className="border">
      <header className="border">
        <h2 className="py-2 px-8">{about.title}</h2>
      </header>

      <Grid data={about.cells} />

      <footer className="p-8 border flex gap-4 flex-wrap">
        {about.keywords.map((keyword, index) => (
          <Badge key={index} index={index}>
            {keyword}
          </Badge>
        ))}
      </footer>
    </section>
  )
}
export default About
