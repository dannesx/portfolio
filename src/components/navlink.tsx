type Props = {
  children: React.ReactNode
  selected?: boolean
  target: string
}

const NavLink = ({ children, selected, target }: Props) => {
  return (
    <li
      className=" data-[selected]:bg-black data-[selected]:text-white uppercase hover:bg-secondary hover:data-[last]:bg-secondary transition-colors cursor-pointer "
      data-selected={selected}
    >
      <a href={target} className="p-3 border flex justify-center text-lg tracking-wide font-bold">{children}</a>
    </li>
  )
}
export default NavLink
