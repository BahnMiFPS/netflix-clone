import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import theme from "./utils/theme"
import { ThemeProvider } from "@mui/material"
import { AuthProvider } from "./contexts/AuthContext"

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
