import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import { useAuth } from "./contexts/AuthContext"
import Browse from "./pages/Browse"
import Documentary from "./pages/Documentary"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Movie from "./pages/Movie"
import Root from "./pages/Root"
import Video from "./pages/Video"

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "/documentary",
				element: <Documentary />,
			},
			{
				path: "/browse",
				element: <Browse />,
			},
			{
				path: "/:media/:id",
				element: <Movie />,
			},
			{
				path: "/video/:id",
				element: <Video />,
			},
		],
	},

	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "*",
		element: <div>not found</div>,
	},
])
function App() {
	return <RouterProvider router={router} />
}

export default App
