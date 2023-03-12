import { Container, Typography } from "@mui/material"
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
	return (
		<Container maxWidth sx={{ marginTop: theme.spacing(10) }}>
			<Typography variant="h5" fontWeight="500" color="white">
				My List
			</Typography>
			<div className="search-content">
				{favoriteMovies
					.filter((movie) => movie.poster_path != null)
					.map((movie) => (
						<MovieCard
							key={movie.id}
							id={movie.id}
							rating={movie.vote_average}
							img={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
							title={movie.original_title}
							mediaType={movie.media_type}
						/>
					))}
			</div>
		</Container>
	)
}

export default MyList
