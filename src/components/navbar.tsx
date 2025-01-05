import NavLink from "./navlink"

const Navbar = () => {
  return (
    <nav className="border-2">
      <ul className="grid grid-cols-6 items-stretch">
        <NavLink selected>
          <img src="/logo-white.svg" className="w-6"/>
        </NavLink>
        <NavLink>Skills</NavLink>
        <NavLink>Projetos</NavLink>
        <NavLink>Sobre mim</NavLink>
        <NavLink>Contatos</NavLink>
        <NavLink last>Currículo</NavLink>
      </ul>
    </nav>
  )
}
export default Navbar
