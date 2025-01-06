import NavLink from "./navlink"
import Socials from "./socials"

const Footer = () => {
  return (
    <footer className="grid grid-cols-1 lg:grid-cols-6">
      <div className="border border-t-2 lg:border-2 lg:border-r-0 grid place-items-center py-2 lg:p-0">
        <img src="/logo-black.svg" alt="Dannesx" className="w-8" />
      </div>
      <ul className="lg:col-span-4 lg:border grid grid-cols-1 lg:grid-cols-4">
        <NavLink target="#skills">Skills</NavLink>
        <NavLink target="#projects">Projetos</NavLink>
        <NavLink target="#about">Sobre mim</NavLink>
        <NavLink target="#">Currículo</NavLink>
        <li className="lg:col-span-4 text-center text-sm opacity-80 px-2 py-4 lg:p-2 border">
          &copy; {new Date().getFullYear()}, dannesx · Todos os direitos
          reservados · Design por Elizaveta Khitrich
        </li>
      </ul>
      <div className="border lg:border-2 border-l-0 py-4 lg:p-0">
        <div className="grid place-items-center h-full">
          <Socials />
        </div>
      </div>
    </footer>
  )
}
export default Footer
