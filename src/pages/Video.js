import { CircularProgress, Stack } from "@mui/material"
import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { API_KEY } from "../api/requests"
import ReactPlayer from "react-player/lazy"

import "./css/Video.css"
import axios from "axios"

const stackStyle = {
	alignItems: "center",
	justifyContent: "center",
	width: "100vw",
	height: "100vh",
	color: "text.secondary",
}

function Video() {
	const { id } = useParams()
	const [video, setVideo] = useState(null)
	const [videoSite, setVideoSite] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	let url = null

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await axios.get(
					`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`
				)
				const result = data.data.videos.results
				const length = Object.keys(result).length
				const lastResult = result[length - 1]
				setVideo(lastResult.key)
				setVideoSite(lastResult.site)
				setIsLoading(false)
			} catch (error) {
				console.error(error)
				setIsLoading(false)
			}
		}
		fetchData()
	}, [])

	const youtubeVideoURL = `https://www.youtube.com/watch?v=`
	const vimeoURL = `https://vimeo.com/`

	if (videoSite === "YouTube") {
		url = `${youtubeVideoURL}${video}`
	} else if (videoSite === "Vimeo") {
		url = `${vimeoURL}${video}`
	} else url = null

	return (
		<>
			{isLoading ? (
				<Stack style={stackStyle}>
					<CircularProgress />
				</Stack>
			) : url ? (
				<div className="player-wrapper">
					<ReactPlayer
						url={url}
						className="react-player"
						width={"100%"}
						height={"100%"}
						controls={true}
					/>
				</div>
			) : (
				<Stack style={stackStyle}>
					Sorry, we could not find any videos for this movie.
				</Stack>
			)}
		</>
	)
}

export default Video
