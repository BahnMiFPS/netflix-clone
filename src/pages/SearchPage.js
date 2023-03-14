import {
	Box,
	Card,
	CardContent,
	CardHeader,
	Container,
	Grid,
	Typography,
} from "@mui/material"
import axios from "axios"
import React, { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import apiService from "../api/apiService"
import { API_KEY } from "../api/requests"
import MultipleSelectPlaceholder from "../components/MultipleSelectPlaceholder"
import MovieCard from "../components/Rows/MovieCard"
import SearchContent from "../components/SearchContent/SearchContent"
import theme from "../utils/theme"
import "./css/Search.css"
const desc = {
	display: "flex",

	alignItems: "center",
	textShadow: "1px 1px 2px rgb(0 0 0 / 100%)",
	marginBottom: theme.spacing(2),
}
function SearchPage({ searchParam }) {
	let [searchParams, setSearchParams] = useSearchParams()
	const [movies, setMovies] = useState([])
	const [genreList, setGenreList] = useState(null)
	const [errorMessage, setErrorMessage] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					`https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${searchParam}`
				)
				const data = await response.json()
				console.log("data from search / searchpage.js", data.results)
				if (data.results.length > 1) {
					setMovies(data.results)
					setErrorMessage(null)
				} else {
					setErrorMessage(
						"Data Not Found. Try Search again with another keyword."
					)
					setMovies(data.results)
				}
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

	console.log("movie card from search page", movies)
	return (
		<Container maxWidth sx={{ marginTop: theme.spacing(10) }}>
			<Grid
				container
				flexDirection="row"
				justifyContent="space-between"
				alignItems="baseline"
				xs={12}
				gap={2}
			>
				<Typography variant="h5" fontWeight="500" color="white">
					Keyword: {searchParam}
				</Typography>
				<MultipleSelectPlaceholder
					genreList={genreList}
					setSearchParams={setSearchParams}
				/>
			</Grid>
			{errorMessage ? (
				<Typography variant="h5" color={"error"}>
					{" "}
					{errorMessage}
				</Typography>
			) : (
				<SearchContent movies={movies} />
			)}
		</Container>
	)
}

export default SearchPage
