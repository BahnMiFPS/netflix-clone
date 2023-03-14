import React, { useEffect, useState } from "react"
import axios from "axios"

import { requests } from "../../api/requests"
import MovieCard from "./MovieCard"
import "./style.css"
import { ChevronLeft, ForkLeft } from "@mui/icons-material"
import { Box } from "@mui/material"
import BlurDiv from "./BlurDiv"
import theme from "../../utils/theme"
function Row({ title, url, isSearch, casts, isCastCard }) {
	const [movies, setMovies] = useState(null)
	useEffect(() => {
		async function getTrendingMovies() {
			try {
				const response = await axios.get(url)
				const responseMovies = response.data.results
				if (response.data.results[0].poster_path) {
					setMovies(responseMovies)
				}
			} catch (error) {
				console.error(error)
			}
		}
		getTrendingMovies()
	}, [url])

	const [navBackground, setNavBackground] = useState(true)

	function handleScroll(event) {
		const slider = event.target
		const scrollLeft = slider.scrollLeft
		if (scrollLeft < 200) {
			setNavBackground(true)
		} else {
			setNavBackground(false)
		}
	}
	const navAppbar = {
		position: "absolute",
		right: theme.spacing(2),
		height: "250px",
		width: "50px",
		padding: theme.spacing(0, 6),
		backgroundImage: navBackground
			? `linear-gradient(to right, rgb(20,20,20,0) 0%, rgb(20,20,20,1) 100%)`
			: `linear-gradient(to right, rgba(255,255,255,0) 100%, #fff 100%)`,
		transition: ".4s",
	}
	if (!casts) {
		return (
			<div className="row">
				{movies ? (
					<>
						<div className="row-title">{title}</div>
						<div className="row-posters" onScroll={handleScroll}>
							{movies.map((movie) =>
								movie.media_type !== null ? (
									movie.poster_path ? (
										<MovieCard
											key={movie.id}
											id={movie.id}
											rating={movie.vote_average}
											img={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
											title={movie.name}
											mediaType={movie.media_type}
										/>
									) : (
										""
									)
								) : (
									<></>
								)
							)}
							<div id="slide" style={navAppbar}></div>
						</div>
					</>
				) : (
					<div> no has movie</div>
				)}
			</div>
		)
	} else {
		return casts !== null ? (
			<div className="row">
				<Box className="row-title" marginBottom={0}>
					Cast
				</Box>
				<>
					<div className="row-posters cast-posters">
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
		) : (
			<></>
		)
	}
}

export default Row
