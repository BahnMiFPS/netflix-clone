import * as React from "react"
import PropTypes from "prop-types"
import CircularProgress from "@mui/material/CircularProgress"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

export default function CircularProgressWithLabel({ rating }) {
	return (
		<Box sx={{ position: "relative", display: "inline-flex" }}>
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
					background: "red",
				}}
			>
				<Typography variant="caption" component="div" color="text.secondary">
					{`${Math.round(rating)}%`}
				</Typography>
			</Box>
		</Box>
	)
}
