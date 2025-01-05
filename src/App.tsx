import Skills from "./components/sections/skills"
import Hero from "./components/sections/hero"
import Navbar from "./components/navbar"
import WhiteSpace from "./components/white-space"
import ContactForm from "./components/sections/contact-form"
import Projects from "./components/sections/projects"
import About from "./components/sections/about"

const sections = [Hero, Skills, ContactForm, Projects, About, ContactForm]

const App = () => {
  return (
    <main className="container max-w-screen-xl mx-auto p-14 mt-8 select-none">
      <Navbar />

      {sections.map((Section, index) => (
        <>
          <Section key={index} />
          <WhiteSpace />
        </>
      ))}
    </main>
  )
}
export default App
