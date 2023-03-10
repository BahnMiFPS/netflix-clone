import React, { useEffect, useState } from "react"
import apiService from "../api/apiService"
import { requests, requestsGenreList } from "../api/requests"
import Banner from "../components/Banner/Banner"
import Row from "../components/Rows/Row"

function Browse() {
	const TrendingMovieURL = requests[0].url
	const [movie, setMovie] = useState(null)

	useEffect(() => {
		let getRandomNumbers = Math.floor(Math.random() * 20)
		try {
			const fetchData = async () => {
				const response = await fetch(`${TrendingMovieURL}`)
				const data = await response.json()
				const firstMovie = data.results[getRandomNumbers]
				setMovie(firstMovie)
			}

			fetchData()
		} catch (error) {
			console.log(error)
		}
	}, [])
	console.log(movie)
	// return movie ? <Banner movie={movie} /> : <div>Loading</div>
	return movie ? (
		<>
			<Banner movie={movie} setMovie={setMovie} movieId={movie.id} />
			{/* splice 4 rows, each rows with different url and title as from requests */}
			<Row title={requests[0].name} url={requests[0].url} />
			<Row title={requests[1].name} url={requests[1].url} />
			<Row title={requests[2].name} url={requests[2].url} />
		</>
	) : (
		<div>hello</div>
	)
}

export default Browse
