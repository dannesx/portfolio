import NavLink from "./navlink"
import Socials from "./socials"

const Footer = () => {
  return (
    <footer className="grid grid-cols-6">
      <div className="border-2 border-r-0 grid place-items-center">
        <img src="/logo-black.svg" alt="Dannesx" className="w-8"/>
      </div>
      <ul className="col-span-4 border grid grid-cols-4">
        <NavLink target="#skills">Skills</NavLink>
        <NavLink target="#projects">Projetos</NavLink>
        <NavLink target="#about">Sobre mim</NavLink>
        <NavLink target="#">Currículo</NavLink>
        <span className="col-span-4 text-center text-sm opacity-80 p-2 border">
          &copy; {new Date().getFullYear()}, dannesx · Todos os direitos
          reservados · Design por Elizaveta Khitrich
        </span>
      </ul>
      <div className="border-2 border-l-0 ">
        <div className="grid place-items-center h-full">
          <Socials />
        </div>
      </div>
      
    </footer>
  )
}
export default Footer
