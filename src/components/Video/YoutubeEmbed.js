import React from "react"
import "./style.css"
import { Card, CardContent, CardMedia, Typography } from "@mui/material"

function YoutubeEmbed({ embedId, title, publishedAt }) {
	function convertISOToUS(dateString) {
		const date = new Date(dateString)
		const month = date.getMonth() + 1
		const day = date.getDate()
		const year = date.getFullYear()

		return `${month}/${day}/${year}`
	}

	return (
		<Card sx={{ height: "100%" }}>
			<CardMedia
				component="iframe"
				src={`https://www.youtube.com/embed/${embedId}`}
				allowFullScreen
				frameBorder={0}
			/>
			<CardContent
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
				}}
			>
				<Typography gutterBottom variant="h7" component="div">
					{title}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					Published Date: {convertISOToUS(publishedAt)}
				</Typography>
			</CardContent>
		</Card>
	)
}

export default YoutubeEmbed
