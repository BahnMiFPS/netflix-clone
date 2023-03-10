import { Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import apiService from "../api/apiService"
import { API_KEY, BASE_URL } from "../api/requests"
import Banner from "../components/Banner/Banner"
import Row from "../components/Rows/Row"

function Movie({ mediaType }) {
	const { media, id } = useParams()
	const [selectedMovie, setSelectedMovie] = useState(null)
	const moreURL = `https://api.themoviedb.org/3/${media}/${id}/similar?api_key=a7267ab151b0952338cfa979a59790b6&language=en-US&page=1`
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await apiService.get(
					`https://api.themoviedb.org/3/${media}/${id}?api_key=${API_KEY}&language=en-US`
				)
				setSelectedMovie(response.data)
			} catch (error) {}
		}
		fetchData()
	}, [])

	return (
		<>
			{selectedMovie ? (
				<>
					<Banner movie={selectedMovie} setMovie={setSelectedMovie} />
					<Row title="More Like This" url={moreURL} />
				</>
			) : (
				<Typography>No Movie Yet</Typography>
			)}
		</>
	)
}

export default Movie
