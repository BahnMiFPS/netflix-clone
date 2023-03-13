import { Container, Grid, Typography } from "@mui/material"
import axios from "axios"
import React, { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import apiService from "../api/apiService"
import { API_KEY } from "../api/requests"
import MultipleSelectPlaceholder from "../components/MultipleSelectPlaceholder"
import MovieCard from "../components/Rows/MovieCard"
import theme from "../utils/theme"
import "./css/Search.css"
function SearchPage({ searchParam }) {
	let [searchParams, setSearchParams] = useSearchParams()
	const [movies, setMovies] = useState([])
	const [genreList, setGenreList] = useState(null)
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
		const fetchGenreList = async () => {
			try {
				const response = await axios.get(
					`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
				)
				setGenreList(response.data.genres)
			} catch (error) {
				console.log(error)
			}
		}
		fetchGenreList()

		fetchData()
	}, [searchParam])

	console.log(genreList)
	return (
		<Container maxWidth sx={{ marginTop: theme.spacing(10) }}>
			<Grid
				container
				flexDirection="row"
				justifyContent="space-between"
				alignItems="baseline"
			>
				<Typography variant="h5" fontWeight="500" color="white">
					Keyword: {searchParam}
				</Typography>
				<MultipleSelectPlaceholder
					genreList={genreList}
					setSearchParams={setSearchParams}
				/>
			</Grid>
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
