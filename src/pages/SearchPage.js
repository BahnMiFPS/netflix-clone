import { Container, Grid, Typography } from "@mui/material"
import axios from "axios"
import React, { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { API_KEY } from "../api/requests"
import MultipleSelectPlaceholder from "../components/MultipleSelectPlaceholder"
import SearchContent from "../components/SearchContent/SearchContent"
import theme from "../utils/theme"
import "./css/Search.css"

function SearchPage({ searchParam }) {
	let [searchParams, setSearchParams] = useSearchParams()
	const [movies, setMovies] = useState([])
	const [genreList, setGenreList] = useState(null)
	const [errorMessage, setErrorMessage] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					`https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${searchParam}`
				)
				const data = response.data.results
				console.log(data)
				if (data.length > 1) {
					setMovies(data)
					setErrorMessage(null)
				} else {
					setErrorMessage("Something went wrong. Try searching again.")
					setMovies(data)
				}
			} catch (error) {
				setErrorMessage(error)
			}
		}
		const fetchGenreList = async () => {
			try {
				const response = await axios.get(
					`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
				)
				setGenreList(response.data.genres)
			} catch (error) {}
		}
		fetchGenreList()
		fetchData()
	}, [searchParam])

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
					{errorMessage}
				</Typography>
			) : (
				<SearchContent movies={movies} />
			)}
		</Container>
	)
}

export default SearchPage
