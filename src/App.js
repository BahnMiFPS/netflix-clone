import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import Browse from "./pages/Browse"
import Home from "./pages/Home"
import HomePage from "./pages/HomePage"
import Login from "./pages/Login"
import MovieDetail from "./pages/MovieDetail"
import Movies from "./pages/Movies"
import MyList from "./pages/MyList"
import Root from "./pages/Root"
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
				element: <HomePage />,
			},
			{
				path: "/:media/:id",
				element: <MovieDetail />,
			},

			{
				path: "/video/:id",
				element: <Video />,
			},
			{
				path: "/mylist",
				element: <MyList />,
			},
			{
				path: "/browse",
				element: <Browse />,
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
