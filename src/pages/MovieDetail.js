import { CircularProgress, Stack } from "@mui/material"
import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { API_KEY } from "../api/requests"
import Banner from "../components/Banner/Banner"
import Row from "../components/Rows/Row"
import VideoContainer from "../components/Video/VideoContainer"
import "./css/Search.css"
const stackStyle = {
	alignItems: "center",
	justifyContent: "center",
	width: "100vw",
	height: "100vh",
	color: "text.secondary",
}

function MovieDetail({ mediaType }) {
	const [isMovieDetail, setIsMovieDetail] = useState(false)
	const { media, id } = useParams()
	const [selectedMovie, setSelectedMovie] = useState(null)
	const [onMovieDetailPage, setOnMovieDetailPage] = useState(null)
	const [casts, setCasts] = useState(null)
	const [videos, setVideos] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const isCastCard = true

	const moreURL = `https://api.themoviedb.org/3/${media}/${id}/similar?api_key=a7267ab151b0952338cfa979a59790b6&language=en-US&page=1`

	useEffect(() => {
		const fetchSelectedMovie = async () => {
			try {
				const response = await axios.get(
					`https://api.themoviedb.org/3/${media}/${id}?api_key=${API_KEY}&language=en-US`
				)
				setSelectedMovie(response.data)
			} catch (error) {}
		}
		const fetchMovieCast = async () => {
			try {
				const response = await axios.get(
					`https://api.themoviedb.org/3/${media}/${id}/credits?api_key=${API_KEY}&language=en-US`
				)
				if (response.data.cast[0].profile_path) {
					setCasts(response.data.cast)
				}
			} catch (error) {}
		}
		const fetchMovieVideo = async () => {
			try {
				const response = await axios.get(
					`https://api.themoviedb.org/3/${media}/${id}/videos?api_key=${API_KEY}&language=en-US`
				)
				if (response.data.results[0].id) {
					setVideos(response.data.results)
				}
			} catch (error) {}
		}

		const loadData = async () => {
			try {
				// set loading to true before fetching data
				setIsLoading(true)

				// wait for all data to finish loading before setting loading to false
				await Promise.all([
					fetchSelectedMovie(),
					fetchMovieCast(),
					fetchMovieVideo(),
				])
			} catch (error) {
			} finally {
				setIsLoading(false)
			}
		}

		loadData()
	}, [id, media])
	return (
		<>
			{isLoading ? (
				<Stack style={stackStyle}>
					<CircularProgress />
				</Stack>
			) : selectedMovie ? (
				<>
					<Banner
						movie={selectedMovie}
						setMovie={setSelectedMovie}
						setIsMovieDetail={setIsMovieDetail}
						isMovieDetail={isMovieDetail}
						setOnMovieDetailPage={setOnMovieDetailPage}
						onMovieDetailPage={onMovieDetailPage}
					/>
					{casts ? (
						<Row url={moreURL} casts={casts} isCastCard={isCastCard} />
					) : (
						""
					)}

					{videos !== null ? <VideoContainer videos={videos} /> : ""}

					<Row title="More Like This" url={moreURL} />
				</>
			) : (
				<Stack style={stackStyle}>
					Requested Movie Was Deleted or Not Found
				</Stack>
			)}
		</>
	)
}

export default MovieDetail
