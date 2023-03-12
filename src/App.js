import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import { useAuth } from "./contexts/AuthContext"
import Browse from "./pages/Browse"
import Documentary from "./pages/Documentary"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Movie from "./pages/Movie"
import Movies from "./pages/Movies"
import MyList from "./pages/MyList"
import Root from "./pages/Root"
import SearchPage from "./pages/SearchPage"
import TVShows from "./pages/TVShows"
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
				path: "/movies",
				element: <Movies />,
			},
			{
				path: "/tv",
				element: <TVShows />,
			},
			{
				path: "/home",
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
			{
				path: "/mylist",
				element: <MyList />,
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
