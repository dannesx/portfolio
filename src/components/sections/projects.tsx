import projects from "@/data/projects.json"
import Project from "../project"
import Marquee from "../marquee"

const Projects = () => {
  return (
    <section className="border" id="projects">
      <header className="border">
        <h2 className="px-4 lg:px-8 py-2">
          <span className="text-2xl lg:text-3xl text-primary font-extrabold mr-1">
            #
          </span>
          {projects.title}
        </h2>
      </header>

      <div className="grid lg:grid-cols-2">
        {projects.relevants.map((project, index) => (
          <Project key={index} data={project} />
        ))}
      </div>

      <Marquee />
    </section>
  )
}
export default Projects
