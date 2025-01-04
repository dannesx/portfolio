import NavLink from "./navlink"

const Navbar = () => {
  return (
    <nav className="border-2">
      <ul className="grid grid-cols-6 items-stretch">
        <NavLink selected>Dannesx</NavLink>
        <NavLink>Sobre</NavLink>
        <NavLink>Habilidades</NavLink>
        <NavLink>Projetos</NavLink>
        <NavLink>Depoimentos</NavLink>
        <NavLink last>Contato</NavLink>
      </ul>
    </nav>
  )
}
export default Navbar
