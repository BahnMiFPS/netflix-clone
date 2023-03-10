import { Add, PlayArrow, PlusOne } from "@mui/icons-material"
import { Button, Chip, Paper, Typography, useTheme } from "@mui/material"
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import apiService from "../../api/apiService"
import { API_KEY } from "../../api/requests"
import "./Banner.css"
function Banner({ movie, setMovie, movieId }) {
	const theme = useTheme()
	const paperTheme = {
		background: `linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5)100%) ,url(https://image.tmdb.org/t/p/original/${movie.backdrop_path}) center center`,
		backgroundSize: "cover",
		position: "relative",
		height: "650px",
		"&::after": {
			backgroundColor: "black",
			content: "",
		},
		marginBottom: theme.spacing(4),
	}
	const bannerContent = {
		position: "absolute",
		width: "100%",
		bottom: 0,
	}

	const bannerDetails = {
		position: "absolute",
		bottom: "50px",
		margin: theme.spacing(10, 5),
	}
	const bannerVignette = {
		background: "linear-gradient(180deg,transparent 10%,rgb(20, 20, 20))",
		width: "100%",
		height: "200px",
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
		marginBottom: theme.spacing(2),
		textShadow: "1px 1px 2px rgb(0 0 0 / 100%)",
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
	//## Movie id

	// for (let i = 0; i < movie.genre_ids.length; i++) {
	//   if (movie.genre_ids[i] === )
	// }

	const { media, id } = useParams()
	const [selectedMovie, setSelectedMovie] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await apiService.get(
					`https://api.themoviedb.org/3/${media}/${id}?api_key=${API_KEY}&language=en-US`
				)
				setMovie(response.data)
			} catch (error) {}
		}
		fetchData()
	}, [id])
	console.log(movie)
	return !movie ? (
		<Typography color="primary">Loading</Typography>
	) : (
		<>
			<Paper style={paperTheme}>
				<div style={bannerContent}>
					<div style={bannerDetails}>
						<Typography style={title}>{movie.title}</Typography>
						{/* {movie.genres_ids.slice(0, 3).map((elem) => (
            <Chip>{elem.name}</Chip>
          ))} */}
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
								// disabled={movie.video ? "false" : "true"}
							>
								Trailer
							</Button>
							<Button
								style={listBtn}
								variant="contained"
								startIcon={<Add />}
								size="large"
							>
								My List
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
