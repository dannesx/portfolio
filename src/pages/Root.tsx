import Sidebar from '@/components/Sidebar'
import { Outlet } from 'react-router-dom'

function Root() {
	return (
		<div className="grid grid-cols-[300px_1fr] bg-gray-950 text-white">
			<Sidebar />
			<main className="p-10">
				<Outlet />
			</main>
		</div>
	)
}

export default Root
