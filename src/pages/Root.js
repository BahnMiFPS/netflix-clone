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

function Root() {
	let auth = useAuth()
	let [params] = useSearchParams()
	let searchParam = params.get("q")

	const [favoriteMovies, setFavoriteMovies] = useState([])

	const handleAddToList = (movie) => {
		const itemsFromStorage =
			JSON.parse(window.localStorage.getItem("my-list")) || []
		// Get the current items from localStorage

		// Check if the movie already exists in the array
		const movieExists = itemsFromStorage.find((item) => item.id === movie.id)

		// If the movie already exists, skip adding it
		if (movieExists) {
			alert("Movie already existed")
			return
		}
		// Otherwise, add the new movie to the array
		const newFavorite = [...itemsFromStorage, { ...movie }]
		setFavoriteMovies(newFavorite)

		// Update the localStorage with the new array of items
		window.localStorage.setItem("my-list", JSON.stringify(newFavorite))
	}

	const handleRemoveFromList = (movie) => {
		// Get the current items from localStorage
		const itemsFromStorage =
			JSON.parse(window.localStorage.getItem("my-list")) || []
		// Filter out the movie with the matching id
		const updatedItems = itemsFromStorage.filter((item) => item.id !== movie.id)

		// Update the state and localStorage with the new array of items
		setFavoriteMovies(updatedItems)
		window.localStorage.setItem("my-list", JSON.stringify(updatedItems))
	}

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
					<Outlet context={[handleAddToList, handleRemoveFromList]} />
				)}
				<Footer />
			</Box>
		)
	}
}

export default Root
