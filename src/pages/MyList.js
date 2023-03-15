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
import { useOutletContext } from "react-router-dom"
import MovieCard from "../components/Rows/MovieCard"
import theme from "../utils/theme"
import "./css/Search.css"
function MyList() {
	const [
		handleAddToList,
		handleRemoveFromList,
		favoriteMovies,
		setFavoriteMovies,
	] = useOutletContext()
	// const [favoriteMovies, setFavoriteMovies] = useState([])

	// useEffect(() => {
	// 	const moviesFromStorage = JSON.parse(localStorage.getItem("my-list"))
	// 	if (moviesFromStorage) {
	// 		setFavoriteMovies(moviesFromStorage)
	// 	} else {
	// 		window.localStorage.setItem("my-list", JSON.stringify(favoriteMovies))
	// 	}
	// }, [favoriteMovies])

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
									onClick={() => handleRemoveFromList(movie, favoriteMovies)}
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
