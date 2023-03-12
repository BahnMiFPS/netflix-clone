import React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import Tooltip from "@mui/material/Tooltip"
import MenuItem from "@mui/material/MenuItem"
import AdbIcon from "@mui/icons-material/Adb"
import { Search, SearchRounded } from "@mui/icons-material"
import styled from "styled-components"
import { alpha, InputBase, useTheme } from "@mui/material"
import SearchBar from "./SearchBar"
import avatarImage from "./../../assets/images/pdp.png"
import { useAuth } from "./../../contexts/AuthContext"
import { useNavigate } from "react-router-dom"
function RightPages() {
	let auth = useAuth()
	const settings = ["Logout"]

	const [anchorElUser, setAnchorElUser] = React.useState(null)
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget)
	}

	const handleCloseUserMenu = () => {
		setAnchorElUser(null)
	}
	let navigate = useNavigate()
	const handleLogOut = () => {
		auth.signout(() => {
			navigate("/login", { replace: true })
		})
	}
	return (
		<Box sx={{ flexGrow: 0, flexDirection: "row", display: "flex" }}>
			<SearchBar />
			<Tooltip title="Open settings">
				<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
					<Avatar variant="rounded" alt="Remy Sharp" src={avatarImage} />
				</IconButton>
			</Tooltip>
			<Menu
				sx={{ mt: "45px" }}
				id="menu-appbar"
				anchorEl={anchorElUser}
				anchorOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				keepMounted
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				open={Boolean(anchorElUser)}
				onClose={handleCloseUserMenu}
			>
				{settings.map((setting) => (
					<MenuItem key={setting} onClick={handleCloseUserMenu}>
						<Typography textAlign="center" onClick={handleLogOut}>
							{setting}
						</Typography>
					</MenuItem>
				))}
			</Menu>
		</Box>
	)
}

export default RightPages
