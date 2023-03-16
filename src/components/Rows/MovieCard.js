import React from "react"
import "./style.css"
import { Link, useSearchParams } from "react-router-dom"
import {
	Box,
	Card,
	CardActionArea,
	CardHeader,
	CircularProgress,
	Typography,
} from "@mui/material"
import { Percent } from "@mui/icons-material"

function MovieCard({
	id,
	rating,
	img,
	title,
	mediaType,
	isCastCard,
	castName,
	castCharacter,
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
						<img className="movie-card-img" src={img} alt={title} />
					</CardActionArea>
				</Card>
				{rating !== 0 || null ? (
					<>
						<Box className="circular-progress ">
							<CircularProgress variant="determinate" value={rating} />
							<Box
								sx={{
									top: 0,
									left: 0,
									bottom: 0,
									right: 0,
									position: "absolute",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<Typography
									variant="caption"
									component="div"
									color="text.primary"
									sx={{ position: "relative" }}
								>
									{`${Math.round(rating * 10)}`}
									<Typography
										component={"span"}
										fontSize={"8px"}
										sx={{ position: "relative", top: -2 }}
									>
										<Percent fontSize="xs" />
									</Typography>
								</Typography>
							</Box>
						</Box>
						<div className="circular-progress progress-background">
							<CircularProgress
								value={rating * 10}
								variant="determinate"
								thickness={5}
							/>
						</div>
					</>
				) : (
					""
				)}
			</Link>
		)
	} else {
		return (
			<div className="cast-container">
				<Card className="movie-card cast-card cast-container">
					<CardActionArea
						onClick={(e) => {
							setSearchParams({ q: castName })
						}}
					>
						<img className="movie-card-img" src={img} alt={title} />
					</CardActionArea>
					<CardHeader
						title={castName}
						subheader={castCharacter}
						className="cast-card-header"
					/>
				</Card>
			</div>
		)
	}
}

export default MovieCard
