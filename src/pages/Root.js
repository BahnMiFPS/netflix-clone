import { Box } from "@mui/material"
import React from "react"
import { Navigate, Outlet, useNavigate } from "react-router-dom"
import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"
import { useAuth } from "../contexts/AuthContext"
import "./css/Root.css"

function Root() {
	let auth = useAuth()
	const style = {
		height: "100vh",
	}
	if (!auth.user) {
		return <Navigate to="/login" replace={true} />
	} else {
		// return <Navigate to="/browse" replace={true} />
		return (
			<Box sx={style}>
				<Navbar />
				<Outlet />
				<Footer />
			</Box>
		)
	}
}

export default Root
