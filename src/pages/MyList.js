import { Remove } from "@mui/icons-material"
import {
	Button,
	Card,
	CardContent,
	CardHeader,
	Container,
	Grid,
	Typography,
} from "@mui/material"
import React, { useEffect, useState } from "react"
import MovieCard from "../components/Rows/MovieCard"
import theme from "../utils/theme"
import "./css/Search.css"
function MyList() {
	const [favoriteMovies, setFavoriteMovies] = useState([])

	useEffect(() => {
		const movies = JSON.parse(localStorage.getItem("my-list"))
		if (movies) {
			setFavoriteMovies(movies)
		}
	}, [])

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
	return (
		<Container maxWidth sx={{ marginTop: theme.spacing(10) }}>
			<Typography variant="h5" fontWeight="500" color="white">
				My List
			</Typography>
			<Grid Container>
				<div className="search-content">
					{favoriteMovies
						.filter((movie) => movie.poster_path != null)
						.map((movie) => (
							<Card
								sx={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
								}}
							>
								<MovieCard
									key={movie.id}
									id={movie.id}
									rating={movie.vote_average}
									img={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
									title={movie.original_title}
									mediaType={movie.media_type}
								/>
								<Button
									startIcon={<Remove />}
									sx={{ width: "100%" }}
									onClick={() => handleRemoveFromList(movie)}
								>
									Remove
								</Button>
							</Card>
						))}
				</div>
			</Grid>
		</Container>
	)
}

export default MyList
