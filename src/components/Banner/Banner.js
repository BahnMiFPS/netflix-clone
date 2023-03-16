import {
	Add,
	CalendarMonth,
	PlayArrow,
	PlusOne,
	Remove,
} from "@mui/icons-material"
import {
	Box,
	Button,
	Chip,
	Grid,
	Paper,
	Typography,
	useTheme,
} from "@mui/material"
import axios from "axios"
import React, { useEffect, useState } from "react"
import {
	Link,
	useOutletContext,
	useParams,
	useSearchParams,
} from "react-router-dom"
import { API_KEY } from "../../api/requests"
import "./Banner.css"
import ImdbRating from "./ImdbRating"
function Banner({ movie, setMovie, movieId, setIsMovieDetail, isMovieDetail }) {
	const theme = useTheme()
	const paperTheme = {
		backgroundColor: `linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5) 100%)`,
		backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
		backgroundPosition: "center",
		boxShadow: "none",
		backgroundSize: "cover",
		position: "relative",
		height: "650px",
		"&::after": {
			backgroundColor: "black",
			content: "",
		},
		marginBottom: theme.spacing(1),
	}
	const bannerContent = {
		position: "absolute",
		width: "100%",
		bottom: 0,
		boxShadow: "none",
	}

	const bannerDetails = {
		position: "absolute",
		bottom: "50px",

		margin: theme.spacing(10, 5),
	}
	const bannerVignette = {
		background: "linear-gradient(180deg,transparent 10%,rgb(20, 20, 20))",
		width: "100%",
		height: "400px",
	}
	const title = {
		fontSize: "40px",
		letterSpacing: "2px",
		textShadow: "2px 2px 4px rgb(0 0 0 / 45%)",
		flexGrow: 1,
		marginBottom: theme.spacing(2),
	}
	const desc = {
		display: "flex",

		alignItems: "center",
		textShadow: "1px 1px 2px rgb(0 0 0 / 100%)",
		marginBottom: theme.spacing(2),
	}
	const playBtn = {
		fontWeight: 700,
		marginRight: theme.spacing(4),
		"&:hover": {
			backgroundColor: "rgba(255, 255, 255, 0.75)",
		},
		textTransform: "capitalize",
	}
	const listBtn = {
		backgroundColor: "rgba(109, 109, 110, 0.7)",
		fontWeight: 700,
		color: "#fff",
		"&:hover": {
			backgroundColor: "rgba(109, 109, 110, 0.4)",
		},
		textTransform: "capitalize",
	}

	const [
		handleAddToList,
		handleRemoveFromList,
		favoriteMovies,
		setFavoriteMovies,
	] = useOutletContext()
	const { media, id } = useParams()
	const [selectedMovie, setSelectedMovie] = useState(null)

	let [searchParams, setSearchParams] = useSearchParams()
	const handleClick = (e) => {
		setSearchParams({ q: e.target.innerText })
	}
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					`https://api.themoviedb.org/3/${media}/${id}?api_key=${API_KEY}&language=en-US`
				)

				setMovie(response.data)
				setSelectedMovie(response.data)
				setIsMovieDetail(true)

				// Check if the movie already exists in the array
			} catch (error) {}
		}

		fetchData()
	}, [id, media, isMovieDetail])

	const movieExistsFromBanner = favoriteMovies.some(
		(item) => item.id === movie.id
	)

	return !movie ? (
		<Typography color="primary">Doesnt have movie</Typography>
	) : (
		<>
			<Paper style={paperTheme}>
				<div style={bannerContent}>
					<div style={bannerDetails}>
						<Typography style={title}>
							{movie.title ? movie.title : movie.name}
						</Typography>
						<Grid
							sx={{
								display: "flex",
								alignItems: "center",
								textShadow: "1px 1px 2px rgb(0 0 0 / 100%)",
								flexWrap: "wrap",
								gap: 1,
								marginBottom: theme.spacing(2),
							}}
						>
							<ImdbRating
								rating={movie.vote_average.toFixed(1)}
								style={{
									textShadow: "initial",
									marginRight: theme.spacing(1),
								}}
							/>
							{movie.release_date ? (
								<Chip
									icon={<CalendarMonth fontSize="small" />}
									label={movie.release_date}
								/>
							) : (
								""
							)}
							{movie.genres
								? movie.genres.map((genre) => (
										<Chip
											key={genre.id}
											label={genre.name}
											onClick={handleClick}
										/>
								  ))
								: ""}
						</Grid>
						<Typography style={desc}>
							{movie.overview.length > 150
								? `${movie.overview.slice(0, 150)}...`
								: movie.overview}
						</Typography>

						<div>
							<Button
								style={playBtn}
								variant="contained"
								component={Link}
								startIcon={<PlayArrow />}
								size="large"
								to={`/video/${(!movieId && id) || movieId}`}
							>
								Trailer
							</Button>

							<Button
								variant="contained"
								style={listBtn}
								startIcon={movieExistsFromBanner ? <Remove /> : <Add />}
								onClick={() =>
									movieExistsFromBanner
										? handleRemoveFromList(movie, favoriteMovies)
										: handleAddToList(movie)
								}
							>
								{movieExistsFromBanner ? "Remove from List" : "Add to List"}
							</Button>
						</div>
					</div>

					<div style={bannerVignette}></div>
				</div>
			</Paper>
		</>
	)
}

export default Banner
