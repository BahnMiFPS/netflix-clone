import React from "react"
import { Navigate, Outlet } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"
import { useAuth } from "../contexts/AuthContext"

function Home() {
	let auth = useAuth()
	// if (!auth.user) return <Navigate to="/login" replace={true} />
	// return (
	// 	<>
	// 		<Navbar />
	// 		<Outlet />
	// 		<footer>footer</footer>
	// 	</>
	// )
	if (!auth.user) {
		return <Navigate to="/login" replace={true} />
	} else {
		return <Navigate to="/browse" replace={true} />
	}
}

export default Home
