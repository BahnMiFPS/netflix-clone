import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import { useAuth } from "./contexts/AuthContext"
import Home from "./pages/Home"
import Login from "./pages/Login"

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
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
	let auth = useAuth()
	console.log(auth.user)
	// if (!auth.user) return <Navigate to="/login" />
	return <RouterProvider router={router} />
}

export default App
