import React from "react"
import "./style.css"
import { Link } from "react-router-dom"
import { Card, CardActionArea, Typography } from "@mui/material"

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
	if (!isCastCard) {
		return (
			<Link to={`/${mediaType === "tv" ? "tv" : "movie"}/${id}`}>
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
					<CardActionArea>
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
