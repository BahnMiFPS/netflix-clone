import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./pages/Login"
import MovieDetail from "./pages/MovieDetail"
import MyList from "./pages/MyList"
import Root from "./pages/Root"
import Video from "./pages/Video"
import MediaPage from "./pages/MediaPage"
import Browse from "./pages/Browse"

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				index: true,
				element: <MediaPage />,
			},
			{
				path: "/:media",
				element: <MediaPage />,
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
