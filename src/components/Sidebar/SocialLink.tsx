import { Icon } from '@phosphor-icons/react'

interface ISocialLink {
	href: string
	IconEl: Icon
}

function SocialLink({ href, IconEl }: ISocialLink) {
	return (
		<a href={href}>
			<IconEl size={24}/>
		</a>
	)
}

export default SocialLink
