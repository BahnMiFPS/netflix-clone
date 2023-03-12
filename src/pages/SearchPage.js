import { Container, Typography } from "@mui/material"
import axios from "axios"
import React, { useEffect, useState } from "react"
import apiService from "../api/apiService"
import { API_KEY } from "../api/requests"
import MovieCard from "../components/Rows/MovieCard"
import theme from "../utils/theme"
import "./css/Search.css"
function SearchPage({ searchParam }) {
	console.log(searchParam)
	const [movies, setMovies] = useState([])
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					`https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${searchParam}`
				)
				const data = await response.json()
				setMovies(Object.values(data)[1])
			} catch (error) {
				console.log(error)
			}
		}
		fetchData()
	}, [searchParam])
	console.log(movies)

	return (
		<Container maxWidth sx={{ marginTop: theme.spacing(10) }}>
			<Typography variant="h5" fontWeight="500" color="white">
				Keyword: {searchParam}
			</Typography>
			<div className="search-content">
				{movies
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

export default SearchPage
