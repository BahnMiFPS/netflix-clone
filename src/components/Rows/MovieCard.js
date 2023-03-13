import React from "react"
import "./style.css"
import { Link, useSearchParams } from "react-router-dom"
import { Box, Card, CardActionArea, Container, Typography } from "@mui/material"
import theme from "../../utils/theme"

function MovieCard({
	key,
	id,
	rating,
	img,
	title,
	mediaType,
	isCastCard,
	castName,
}) {
	let [searchParams, setSearchParams] = useSearchParams()
	if (!isCastCard) {
		return (
			<Link
				className="movie-card-container"
				to={`/${mediaType === "tv" ? "tv" : "movie"}/${id}`}
			>
				<Card className="movie-card">
					<CardActionArea>
						{/* <div className="movie-card-clone">
						<div>{title} </div>
						<img src={img} alt={title} className="movie-card-clone-img" />
						<div>{title} </div>
					</div> */}
						<img className="movie-card-img" src={img} alt={title} />
					</CardActionArea>
				</Card>
			</Link>
		)
	} else {
		return (
			<div className="cast-container">
				<Card className="movie-card cast-card">
					<CardActionArea
						onClick={(e) => {
							setSearchParams({ q: castName })
						}}
					>
						{/* <div className="movie-card-clone">
			<div>{title} </div>
			<img src={img} alt={title} className="movie-card-clone-img" />
			<div>{title} </div>
		</div> */}
						<img className="movie-card-img" src={img} alt={title} />
					</CardActionArea>
				</Card>
				<Typography className="class-title" color="white" textAlign={"center"}>
					{castName}
				</Typography>
			</div>
		)
	}
}

export default MovieCard
