import About from "./components/sections/about"
import Contact from "./components/sections/contact"
import Hero from "./components/sections/hero"
import Projects from "./components/sections/projects"
import Skills from "./components/sections/skills"
import Footer from "./components/footer"
import Navbar from "./components/navbar"
import Ticker from "./components/ticker"

const App = () => {
  return (
    <>
      <div className="stripes" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="grain" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
