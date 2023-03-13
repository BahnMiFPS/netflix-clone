import { Box } from "@mui/material"
import React, { createContext, useContext, useEffect, useState } from "react"
import {
	Navigate,
	Outlet,
	useNavigate,
	useSearchParams,
} from "react-router-dom"
import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"
import { useAuth } from "../contexts/AuthContext"
import Browse from "./Browse"
import "./css/Root.css"
import SearchPage from "./SearchPage"

function Root() {
	let auth = useAuth()
	let [params] = useSearchParams()
	let searchParam = params.get("q")

	const [favoriteMovies, setFavoriteMovies] = useState([])
	const handleAddToList = (movie) => {
		const newFavorite = [...favoriteMovies, { ...movie }]
		setFavoriteMovies(newFavorite)
		window.localStorage.setItem("my-list", JSON.stringify(favoriteMovies))
	}

	useEffect(() => {
		const myList = JSON.parse(window.localStorage.getItem("my-list"))
		if (myList) {
			setFavoriteMovies(myList)
		} else setFavoriteMovies([])
	}, [])
	console.log(favoriteMovies)

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
				{searchParam ? (
					<Browse searchParam={searchParam} />
				) : (
					<Outlet context={handleAddToList} />
				)}
				<Footer />
			</Box>
		)
	}
}

export default Root
