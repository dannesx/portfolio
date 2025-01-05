import Badge from "../ui/badge"
import Grid from "../grid"
import skills from "@/data/skills.json"

const Skills = () => {
  return (
    <section className="border">
      <header className="border">
        <h2 className="py-2 px-8">{skills.title}</h2>
      </header>

      <Grid data={skills.services} />

      <footer className="p-8 border flex gap-4 flex-wrap">
        {skills.tags.map((tag, index) => (
          <Badge key={index} index={index}>
            {tag}
          </Badge>
        ))}
      </footer>
    </section>
  )
}
export default Skills
