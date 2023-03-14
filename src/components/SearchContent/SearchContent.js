import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material"
import React from "react"
import MovieCard from "../Rows/MovieCard"

function SearchContent({ movies }) {
	function convertDateFormat(dateString) {
		const date = new Date(dateString)
		const options = { month: "long", day: "numeric", year: "numeric" }
		const formattedDate = date.toLocaleDateString("en-US", options)
		return formattedDate
	}
	return (
		<Box className="search-content">
			{movies
				.filter((movie) => movie.poster_path != null)
				.map((movie) => (
					<>
						<Card
							sx={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "space-between",
								margin: 0,
								width: "100%",
								height: "250px",
								overflow: "hidden",
							}}
						>
							<Box sx={{ display: "flex", flexDirection: "column" }}>
								<CardHeader
									title={movie.title ? movie.title : movie.name}
									subheader={convertDateFormat(
										movie.release_date
											? movie.release_date
											: movie.first_air_date
									)}
								/>
								<CardContent sx={{ flex: "1 0 auto" }}>
									<Typography
										variant="subtitle1"
										color="text.secondary"
										component="Text"
										sx={{}}
									>
										{movie.overview.length > 150
											? `${movie.overview.slice(0, 150)}...`
											: movie.overview}
									</Typography>
								</CardContent>
							</Box>
							<MovieCard
								key={movie.id}
								id={movie.id}
								rating={movie.vote_average}
								img={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
								title={movie.original_title}
								mediaType={movie.media_type}
							/>
						</Card>
					</>
				))}
		</Box>
	)
}

export default SearchContent
