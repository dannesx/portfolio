import { Outlet } from 'react-router-dom'

function Root() {
	return (
		<div className="grid grid-cols-[300px_1fr] text-white">
			<main className="p-10 col-start-2 min-h-screen">
				<Outlet />
			</main>
		</div>
	)
}

export default Root
