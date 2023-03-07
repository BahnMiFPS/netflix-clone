import { Box, Container, ThemeProvider, Typography } from "@mui/material"
import React from "react"
import Form from "../components/Form"
import theme from "../utils/theme"

function Login() {
	const loginPageStyle = {
		backgroundColor: "#111",
		height: "100vh",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	}

	return (
		<Box sx={loginPageStyle}>
			<Form />
		</Box>
	)
}

export default Login
