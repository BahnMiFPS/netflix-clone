import { IconButton } from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"
import LogoNetflix from "../../assets/images/logo.png"
const Logo = () => {
	return (
		<IconButton disableRipple className="nav-logo logo-icon-btn">
			<Link to="/">
				<img alt="Logo" src={LogoNetflix} className="nav-logo" />
			</Link>
		</IconButton>
	)
}

export default Logo
