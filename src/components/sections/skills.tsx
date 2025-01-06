import Badge from "../ui/badge"
import Grid from "../grid"
import skills from "@/data/skills.json"

const Skills = () => {
  return (
    <section className="border" id="skills">
      <header className="border">
        <h2 className="py-2 px-4 lg:px-8">
          <span className="text-2xl lg:text-3xl text-primary font-extrabold mr-1">#</span>
          {skills.title}
        </h2>
      </header>

      <Grid data={skills.services} />

      <footer className="p-4 py-8 lg:p-10 border flex gap-4 flex-wrap justify-center lg:justify-start">
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
