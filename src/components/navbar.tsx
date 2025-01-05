import NavLink from "./navlink"

const Navbar = () => {
  return (
    <nav className="border">
      <ul className="grid grid-cols-6 items-stretch">
        <NavLink target="#" selected>
          <img src="/logo-white.svg" className="w-6"/>
        </NavLink>
        <NavLink target="#skills">Skills</NavLink>
        <NavLink target="#projects">Projetos</NavLink>
        <NavLink target="#about">Sobre mim</NavLink>
        <NavLink target="#contact">Contatos</NavLink>
        <NavLink target="">Currículo</NavLink>
      </ul>
    </nav>
  )
}
export default Navbar
