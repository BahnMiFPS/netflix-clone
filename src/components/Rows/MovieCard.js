import React from "react"
import "./style.css"
import { Link } from "react-router-dom"
import { Card, CardActionArea } from "@mui/material"

function MovieCard({ id, rating, img, title, mediaType }) {
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
}

export default MovieCard
