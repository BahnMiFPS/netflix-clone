import React from "react"
import { Navigate } from "react-router-dom"
import MainLayout from "../components/MainLayout"
import { useAuth } from "../contexts/AuthContext"

function Home() {
	let auth = useAuth()
	console.log(auth.user)
	if (!auth.user) return <Navigate to="/login" replace={true} />
	return (
		<>
			<header>Header</header>
			<MainLayout />
			<footer>footer</footer>
		</>
	)
}

export default Home
