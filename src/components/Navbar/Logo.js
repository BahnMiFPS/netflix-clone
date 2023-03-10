import React from "react"
import { Link } from "react-router-dom"
import LogoNetflix from "../../assets/images/logo.png"
const Logo = () => {
	return (
		<Link to="/">
			<img alt="Logo" src={LogoNetflix} className="nav-logo" />
		</Link>
	)
}

export default Logo
