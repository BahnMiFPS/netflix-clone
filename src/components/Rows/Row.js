import React, { useEffect, useState } from "react"
import axios from "axios"

import { requests } from "../../api/requests"
import MovieCard from "./MovieCard"
import "./style.css"
import { ChevronLeft, ForkLeft } from "@mui/icons-material"
import { Box } from "@mui/material"
function Row({ title, url, isSearch, casts, isCastCard }) {
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
	if (!casts) {
		return (
			<div className="row">
				<div className="row-title">{title}</div>
				{movies ? (
					<>
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
					</>
				) : (
					<div> no has movie</div>
				)}
			</div>
		)
	} else {
		return (
			<div className="row">
				<Box className="row-title" marginBottom={0}>
					Cast
				</Box>
				<>
					<div className="row-posters">
						{casts.map((cast) =>
							cast.profile_path ? (
								<MovieCard
									castName={cast.name}
									isCastCard={isCastCard}
									key={cast.id}
									img={`https://image.tmdb.org/t/p/w342${cast.profile_path}`}
								/>
							) : (
								<></>
							)
						)}
					</div>
				</>
			</div>
		)
	}
}

export default Row
