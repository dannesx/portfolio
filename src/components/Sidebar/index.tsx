import {
	Gear,
	GithubLogo,
	House,
	InstagramLogo,
	LinkedinLogo,
	List,
	Phone,
	XLogo,
} from '@phosphor-icons/react'
import Avatar from './Avatar'
import Link from './Link'
import SocialLink from './SocialLink'

function Sidebar() {
	return (
		<aside className="w-full h-screen bg-gray-950 px-8 select-none border-r border-gray-900">
			<div className="grid place-items-center py-10">
				<Avatar />
				<h1 className="font-medium text-xl mb-1 tracking-wider">
					Daniel Antunes
				</h1>
				<span className="font-thin">instrutor de informática &</span>
				<span className="font-thin">dev fullstack</span>

				<div className="flex gap-2 mt-3">
					<SocialLink href="https://github.com/dannesx" IconEl={GithubLogo} />
					<SocialLink
						href="https://instagram.com/dannesx_"
						IconEl={InstagramLogo}
					/>
					<SocialLink href="https://twitter.com/dannesx_" IconEl={XLogo} />
					<SocialLink
						href="https://linkedin.com/in/dannesx/"
						IconEl={LinkedinLogo}
					/>
				</div>
			</div>

			<div className="flex flex-col gap-1">
				<Link href="/" text="Página Inicial" IconEl={House} />
				<Link href="/about" text="Sobre Mim" IconEl={List} />
				<Link href="/projects" text="Projetos" IconEl={Gear} />
				<Link href="/contact" text="Contato" IconEl={Phone} />
			</div>
		</aside>
	)
}

export default Sidebar
