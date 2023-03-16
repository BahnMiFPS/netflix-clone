import { CircularProgress, Stack } from "@mui/material"
import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { requests, requestsMovies, requestsTVShows } from "../api/requests"
import Banner from "../components/Banner/Banner"
import Row from "../components/Rows/Row"

function MediaPage() {
	let { media } = useParams()
	const [movie, setMovie] = useState(null)
	const [requestObject, setRequestObject] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		let bannerUrl

		switch (media) {
			case "movies":
				bannerUrl = requests[0].url
				setRequestObject(requestsMovies)
				break
			case "tv":
				bannerUrl = requests[1].url
				setRequestObject(requestsTVShows)
				break
			default:
				bannerUrl = requests[2].url
				setRequestObject(requests)
				break
		}
		// Pick a random trending movie to make it banner
		let getRandomNumbers = Math.floor(Math.random() * 20)
		try {
			const fetchData = async () => {
				const response = await axios.get(`${bannerUrl}`)
				const firstMovie = response.data.results[getRandomNumbers]
				setMovie(firstMovie)
				setIsLoading(false)
			}

			fetchData()
		} catch (error) {
			setIsLoading(false)
		}
	}, [media])
	return isLoading ? (
		<Stack
			alignItems="center"
			justifyContent={"center"}
			width={"100vw"}
			height={"100vh"}
		>
			<CircularProgress />
		</Stack>
	) : movie ? (
		<>
			<Banner movie={movie} setMovie={setMovie} movieId={movie.id} />
			{requestObject.map((category, index) => {
				return <Row title={category.name} url={category.url} key={index} />
			})}
		</>
	) : (
		""
	)
}

export default MediaPage
