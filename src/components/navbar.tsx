import { Menu } from "lucide-react"
import NavLink from "./navlink"

const Navbar = () => {
  return (
    <nav className="border">
      <ul className="grid grid-cols-2 lg:grid-cols-6 items-stretch">
        <NavLink
          target="#"
          className="bg-black hover:bg-black col-span-2 lg:col-span-1"
        >
          <img src="/logo-white.svg" className="w-6" />
        </NavLink>
        <div className="border col-span-2 lg:col-span-1 grid place-items-center p-3 lg:hidden">
          <Menu />
        </div>
        <NavLink target="#skills" hiddenOnMobile>
          Skills
        </NavLink>
        <NavLink target="#projects" hiddenOnMobile>
          Projetos
        </NavLink>
        <NavLink target="#about" hiddenOnMobile>
          Sobre mim
        </NavLink>
        <NavLink target="#contact" hiddenOnMobile>
          Contatos
        </NavLink>
        <NavLink target="" hiddenOnMobile>
          Currículo
        </NavLink>
      </ul>
    </nav>
  )
}
export default Navbar
