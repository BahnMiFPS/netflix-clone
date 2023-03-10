import React from "react"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
import MenuItem from "@mui/material/MenuItem"
import { Button } from "@mui/material"
import { Link } from "react-router-dom"

const pages = ["Documentary", "Pricing", "Blog"]

function LeftPages({}) {
	const [anchorElNav, setAnchorElNav] = React.useState(null)

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget)
	}

	const handleCloseNavMenu = () => {
		setAnchorElNav(null)
	}

	return (
		<>
			<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
				<IconButton
					size="large"
					aria-label="account of current user"
					aria-controls="menu-appbar"
					aria-haspopup="true"
					onClick={handleOpenNavMenu}
					color="inherit"
				>
					<MenuIcon />
				</IconButton>
				<Menu
					id="menu-appbar"
					anchorEl={anchorElNav}
					anchorOrigin={{
						vertical: "bottom",
						horizontal: "left",
					}}
					keepMounted
					transformOrigin={{
						vertical: "top",
						horizontal: "left",
					}}
					open={Boolean(anchorElNav)}
					onClose={handleCloseNavMenu}
					sx={{
						display: { xs: "block", md: "none" },
					}}
				>
					{pages.map((page) => (
						<MenuItem key={page} onClick={handleCloseNavMenu}>
							<Link to={page}>
								<Typography textAlign="center">{page}</Typography>
							</Link>
						</MenuItem>
					))}
				</Menu>
			</Box>

			<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
				{pages.map((page) => (
					<Button
						key={page}
						onClick={handleCloseNavMenu}
						sx={{ my: 2, color: "white", display: "block" }}
					>
						<Link to={page}>{page}</Link>
					</Button>
				))}
			</Box>
		</>
	)
}

export default LeftPages
