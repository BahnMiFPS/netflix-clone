import {
	Box,
	Card,
	CardContent,
	CardHeader,
	Grid,
	Typography,
} from "@mui/material"
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
		<Grid
			container
			spacing={{ xs: 2, md: 4 }}
			columns={{ xs: 4, sm: 8, md: 12 }}
		>
			{movies
				.filter((movie) => movie.poster_path != null)
				.map((movie) => (
					<Grid item sm={12} md={6}>
						<Card
							key={movie.id}
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
					</Grid>
				))}
		</Grid>
	)
}

export default SearchContent
