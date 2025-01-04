import About from "./components/sections/about"
import Hero from "./components/sections/hero"
import Navbar from "./components/navbar"
import WhiteSpace from "./components/white-space"
import ContactForm from "./components/sections/contact-form"
import Projects from "./components/sections/projects"

const sections = [Hero, About, ContactForm, Projects]

const App = () => {
  return (
    <main className="container max-w-screen-xl mx-auto p-14 mt-8">
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
