import { CircularProgress, Stack } from "@mui/material"
import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import apiService from "../api/apiService"
import { API_KEY } from "../api/requests"
import ReactPlayer from "react-player/lazy"

import theme from "../utils/theme"
import "./css/Video.css"
function Video() {
	const navigate = useNavigate()
	const { id } = useParams()
	const [video, setVideo] = useState(null)
	const [videoSite, setVideoSite] = useState(null)
	let url = null
	// `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
	useEffect(() => {
		const fetchData = async () => {
			const data = await apiService.get(
				`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`
			)
			// setVideo(data)
			const result = data.data.videos.results
			// let propSymb = Object.getOwnPropertySymbols(result)
			// console.log(propSymb.length)
			// console.log(result[propSymb.length])
			const length = Object.keys(result).length
			const lastResult = result[length - 1]

			setVideo(lastResult.key)
			setVideoSite(lastResult.site)
		}
		fetchData()
	}, [])

	// const videoKey = video.results[0].key
	const youtubeVideoURL = `https://www.youtube.com/watch?v=`
	const vimeoURL = `https://vimeo.com/`

	if (videoSite === "YouTube") {
		url = `${youtubeVideoURL}${video}`
	} else if (videoSite === "Vimeo") {
		url = `${vimeoURL}${video}`
	} else url = null
	return (
		<>
			{url ? (
				<div className="player-wrapper" sx={{ marginTop: theme.spacing(8) }}>
					<ReactPlayer
						url={url}
						className="react-player"
						width={"100%"}
						height={"100%"}
						controls={true}
					/>
				</div>
			) : (
				<Stack
					alignItems="center"
					justifyContent={"center"}
					width={"100vw"}
					height={"100vh"}
				>
					<CircularProgress />
				</Stack>
			)}
		</>
	)
}

export default Video
