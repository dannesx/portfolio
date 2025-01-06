type Props = {
  children: React.ReactNode
  className?: string
  hiddenOnMobile?: boolean
  target: string
}

const NavLink = ({ children, className, target, hiddenOnMobile }: Props) => {
  return (
    <li
      className={`uppercase hover:bg-secondary transition-colors cursor-pointer data-[hidden]:hidden  lg:data-[hidden]:block ${className}`}
      data-hidden={hiddenOnMobile}
    >
      <a
        href={target}
        className="p-3 border flex justify-center text-lg tracking-wide font-bold"
      >
        {children}
      </a>
    </li>
  )
}
export default NavLink
