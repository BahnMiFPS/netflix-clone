import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import theme from "./utils/theme"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<React.StrictMode>
		<AuthProvider>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</AuthProvider>
	</React.StrictMode>
)
