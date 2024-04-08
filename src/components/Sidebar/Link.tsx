import { Icon } from '@phosphor-icons/react'

interface ILink {
	href: string
	text: string
	IconEl?: Icon
}

function Link({ href, text, IconEl }: ILink) {
	return (
		<a
			href={href}
			className="flex gap-3 items-center p-3 w-full rounded transition-all opacity-75 hover:bg-gray-900 hover:opacity-100 "
		>
			{IconEl ? <IconEl weight="fill" size={24} /> : null}
			<span className="">{text}</span>
		</a>
	)
}

export default Link
