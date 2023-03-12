import { Facebook, Instagram, Twitter } from "@mui/icons-material"
import { Box, Container, Grid, Typography, useTheme } from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"
import "./Footer.css"
const Footer = () => {
	const theme = useTheme()
	const style = {
		footer: {
			paddingTop: theme.spacing(8),
		},
		socialIcon: {
			color: "grey",
			cursor: "pointer",
			"&:hover": {
				color: "#fff",
			},
			marginRight: theme.spacing(1),
			transition: ".1s",
		},
	}
	return (
		<Container maxWidth="md" className="footer" style={style.footer} fixed>
			<Grid container spacing={6}>
				<Grid item xs={12}>
					<Box>
						<Link To="https://www.facebook.com/tunflix">
							<Facebook className="socialIcon" fontSize="large" />
						</Link>
						<Link To="https://www.instagram.com/tunflix">
							<Instagram className="socialIcon" fontSize="large" />
						</Link>
						<Link To="https://www.twitter.com/tunflix">
							<Twitter className="socialIcon" fontSize="large" />
						</Link>
					</Box>
				</Grid>
				<Grid item xs={12}>
					<Grid container>
						<Grid item xs={4}>
							<Typography color="textPrimary">Audio Description</Typography>
							<Typography
								component={Link}
								color="textSecondary"
								display="block"
								to="http://ir.netflix.com/"
							>
								Investor Relations
							</Typography>
							<Typography
								component={Link}
								color="textSecondary"
								display="block"
							>
								Privacy
							</Typography>
							<Typography
								component={Link}
								color="textSecondary"
								display="block"
							>
								Contact Us
							</Typography>
							<Typography
								component={Link}
								color="textSecondary"
								display="block"
							>
								Blog
							</Typography>
						</Grid>
						<Grid item xs={4}>
							<Typography color="textPrimary">Help Center</Typography>
							<Typography
								component={Link}
								color="textSecondary"
								display="block"
							>
								Jobs
							</Typography>
							<Typography
								component={Link}
								color="textSecondary"
								display="block"
							>
								Legal Notices
							</Typography>
							<Typography
								component={Link}
								color="textSecondary"
								display="block"
							>
								Cookies Preferences
							</Typography>
						</Grid>
						<Grid item xs={4}>
							<Typography color="textPrimary">Gift Cards</Typography>
							<Typography
								component={Link}
								color="textSecondary"
								display="block"
							>
								Netflix Shop
							</Typography>
							<Typography
								component={Link}
								color="textSecondary"
								display="block"
							>
								Corporate Information
							</Typography>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Typography color="textPrimary">© 2023 Vuflix, Inc.</Typography>
				</Grid>
			</Grid>
		</Container>
	)
}

export default Footer
