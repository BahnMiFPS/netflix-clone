import React, { useEffect, useState } from "react"
import axios from "axios"

import { requests } from "../../api/requests"
import MovieCard from "./MovieCard"
import "./style.css"
function Row({ title, url, isSearch }) {
	const [movies, setMovies] = useState(null)

	useEffect(() => {
		async function getTrendingMovies() {
			try {
				const response = await axios.get(url)
				const responseMovies = response.data.results
				setMovies(responseMovies)
			} catch (error) {
				console.error(error)
			}
		}
		getTrendingMovies()
	}, [])
	return (
		<div className="row">
			<div className="row-title">{title}</div>
			{movies ? (
				<div className="row-posters">
					{movies.map((movie) => (
						<MovieCard
							key={movie.id}
							id={movie.id}
							rating={movie.vote_average}
							img={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
							title={movie.name}
							mediaType={movie.media_type}
						/>
					))}
				</div>
			) : (
				<div> no has movie</div>
			)}
		</div>
	)
}

export default Row
