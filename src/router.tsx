import { createBrowserRouter } from 'react-router-dom'
import Root from '@/pages/Root'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Error404 from '@/pages/Error404'
import Projects from '@/pages/Projects'
import Contact from '@/pages/Contact'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <Error404 />,
		children: [
			{
				path: '',
				element: <Home />,
			},
			{
				path: 'about',
				element: <About />,
			},
			{
				path: 'projects',
				element: <Projects />,
			},
			{
				path: 'contact',
				element: <Contact />,
			},
		],
	},
])

export default router
