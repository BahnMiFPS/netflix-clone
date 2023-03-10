import { Modal, Typography } from "@mui/material"
import { Box } from "@mui/system"
import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import apiService from "../api/apiService"
import { API_KEY } from "../api/requests"

function Video() {
	const style = {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: 400,
		bgcolor: "background.paper",
		border: "2px solid #000",
		boxShadow: 24,
		p: 4,
	}
	const navigate = useNavigate()
	const { id } = useParams()
	const [video, setVideo] = useState(null)

	const [open, setOpen] = React.useState(false)
	useEffect(() => {
		const fetchData = async () => {
			const data = await apiService.get(
				`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
			)
			setVideo(data)
		}
		fetchData()
	}, [])
	const handleClose = () => {
		navigate(-1)
	}
	return (
		<Modal
			open={true}
			onClose={handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={style}>
				<Typography id="modal-modal-title" variant="h6" component="h2">
					{id}
				</Typography>
			</Box>
		</Modal>
	)
}

export default Video
