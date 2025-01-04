type Props = {
  children: React.ReactNode
  selected?: boolean
  last?: boolean
}

const NavLink = ({ children, selected, last }: Props) => {
  return (
    <li
      className="p-3 border-r-2 text-center text-lg tracking-wide data-[selected]:font-medium data-[selected]:bg-black data-[selected]:text-white data-[last]:border-0 data-[last]:bg-primary uppercase hover:bg-secondary hover:data-[last]:bg-secondary transition-colors cursor-pointer "
      data-selected={selected}
      data-last={last}
    >
      {children}
    </li>
  )
}
export default NavLink
