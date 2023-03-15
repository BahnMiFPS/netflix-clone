import React, { useState } from "react"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Container from "@mui/material/Container"
import LeftPages from "./LeftPages"
import RightPages from "./RightPages"
import Logo from "./Logo"
import "./Nav.css"
import { useTheme } from "@mui/material"

function Navbar() {
	const theme = useTheme()
	const [navBackground, setNavBackground] = useState(false)

	const changeBackground = () => setNavBackground(window.scrollY > 20)
	window.addEventListener("scroll", changeBackground)
	const navAppbar = {
		padding: theme.spacing(0, 3),
		backgroundImage:
			"linear-gradient(to bottom,rgba(0,0,0,.7) 10%,rgba(0,0,0,0))",
		transition: ".4s",
		backgroundColor: navBackground ? "rgb(20, 20, 20)" : "rgba(0, 0, 0, 0)",
	}
	const toolbarStyle = {
		display: "flex",
		alignItems: "center",
		justifyContents: "center",
		textAlign: "center",
	}
	return (
		<AppBar position="fixed" style={navAppbar} elevation={0} component="nav">
			<Toolbar disableGutters style={toolbarStyle}>
				<Logo />
				<LeftPages />
				<RightPages />
			</Toolbar>
		</AppBar>
	)
}
export default Navbar
