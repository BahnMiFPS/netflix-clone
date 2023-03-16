import React, { useEffect, useState } from "react"
import axios from "axios"
import { Box, Container, CircularProgress } from "@mui/material"
import { styled } from "@mui/material/styles"
import MovieCard from "./MovieCard"
import theme from "../../utils/theme"

const RowFade = styled("div")(({ fadeBackgroundImage }) => ({
	position: "absolute",
	right: theme.spacing(1),
	height: "250px",
	width: "50px",
	padding: theme.spacing(0, 6),
	backgroundImage: fadeBackgroundImage
		? `linear-gradient(to right, rgb(20,20,20,0) 0%, rgb(20,20,20,1) 100%)`
		: `linear-gradient(to right, rgba(255,255,255,0) 100%, #fff 100%)`,
	opacity: fadeBackgroundImage ? 1 : 0, // Set opacity to 1 when fadeBackgroundImage is true, 0 otherwise
	transition: "background-image .4s ease-in-out, opacity .4s ease-in-out", // Add transition for opacity
}))

function Row({ title, url, isSearch, casts, isCastCard }) {
	const [movies, setMovies] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [fadeBackgroundImage, setFadeBackgroundImage] = useState(true)

	useEffect(() => {
		async function getTrendingMovies() {
			try {
				const response = await axios.get(url)
				const responseMovies = response.data.results
				if (response.data.results[0].poster_path) {
					setMovies(responseMovies)
				}
				setIsLoading(false)
			} catch (error) {
				console.error(error)
				setIsLoading(false)
			}
		}
		getTrendingMovies()
	}, [url])

	function handleScroll(event) {
		const slider = event.target
		const scrollLeft = slider.scrollLeft
		if (scrollLeft < 200) {
			setFadeBackgroundImage(true)
		} else {
			setFadeBackgroundImage(false)
		}
	}

	if (casts) {
		return casts !== null ? (
			<Container maxWidth="false">
				<div className="row">
					<Box className="row-title" marginBottom={0}>
						Cast
					</Box>
					<div className="row-posters cast-posters">
						{casts.map(
							(cast) =>
								cast.profile_path && (
									<MovieCard
										castCharacter={cast.character}
										castName={cast.name}
										isCastCard={isCastCard}
										key={cast.id}
										img={`https://image.tmdb.org/t/p/w342${cast.profile_path}`}
									/>
								)
						)}
					</div>
				</div>
			</Container>
		) : null
	}

	return (
		<Container maxWidth="false">
			{isLoading ? (
				<Box sx={{ display: "flex", justifyContent: "center" }}>
					<CircularProgress />
				</Box>
			) : movies.length > 1 ? (
				<div className="row">
					<div className="row-title">{title}</div>
					<div className="row-posters" onScroll={handleScroll}>
						{movies.map(
							(movie) =>
								movie.media_type !== null &&
								movie.poster_path && (
									<MovieCard
										key={movie.id}
										id={movie.id}
										rating={movie.vote_average}
										img={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
										title={movie.name}
										mediaType={movie.media_type}
									/>
								)
						)}
						<RowFade fadeBackgroundImage={fadeBackgroundImage}></RowFade>
					</div>
				</div>
			) : (
				""
			)}
		</Container>
	)
}

export default Row
