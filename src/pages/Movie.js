import {
	Box,
	CircularProgress,
	Container,
	Stack,
	Typography,
} from "@mui/material"
import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import apiService from "../api/apiService"
import { API_KEY, BASE_URL } from "../api/requests"
import Banner from "../components/Banner/Banner"
import MovieCard from "../components/Rows/MovieCard"
import Row from "../components/Rows/Row"
import theme from "../utils/theme"
import "./css/Search.css"
function Movie({ mediaType }) {
	const [isMovieDetail, setIsMovieDetail] = useState(false)
	const { media, id } = useParams()
	const [selectedMovie, setSelectedMovie] = useState(null)
	const [onMovieDetailPage, setOnMovieDetailPage] = useState(null)
	const [casts, setCasts] = useState(null)
	const isCastCard = true
	const moreURL = `https://api.themoviedb.org/3/${media}/${id}/similar?api_key=a7267ab151b0952338cfa979a59790b6&language=en-US&page=1`
	useEffect(() => {
		const fetchData = async () => {
			const response = await apiService.get(
				`https://api.themoviedb.org/3/${media}/${id}?api_key=${API_KEY}&language=en-US`
			)
			setSelectedMovie(response.data)
		}
		const fetchMovieCast = async () => {
			const response = await axios.get(
				`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
			)
			console.log("moviecast response", response)
			setCasts(response.data.cast)
		}
		fetchMovieCast()
		fetchData()
	}, [id])
	console.log("this movie casts", casts)
	return (
		<>
			{selectedMovie ? (
				<>
					<Banner
						movie={selectedMovie}
						setMovie={setSelectedMovie}
						setIsMovieDetail={setIsMovieDetail}
						isMovieDetail={isMovieDetail}
						setOnMovieDetailPage={setOnMovieDetailPage}
						onMovieDetailPage={onMovieDetailPage}
						casts={casts}
					/>
					<Row url={moreURL} casts={casts} isCastCard={isCastCard} />
					<Row title="More Like This" url={moreURL} />
				</>
			) : (
				<Stack
					alignItems="center"
					justifyContent={"center"}
					width={"100vw"}
					height={"100vh"}
				>
					<CircularProgress />
				</Stack>
			)}
		</>
	)
}

export default Movie
