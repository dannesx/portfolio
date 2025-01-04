import projects from "@/data/projects.json"
import Project from "../project"
import Marquee from "../marquee"

const Projects = () => {
  return (
    <section className="border">
      <header className="border">
        <h2 className="px-8 py-2">{projects.title}</h2>
      </header>

      <div className="grid grid-cols-2">
        {projects.relevants.map((project, index) => (
          <Project key={index} data={project} />
        ))}
      </div>

      <Marquee />
    </section>
  )
}
export default Projects
