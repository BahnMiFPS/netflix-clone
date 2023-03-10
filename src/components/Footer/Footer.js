import { Facebook, Instagram, Twitter } from "@mui/icons-material"
import { Box, Container, Grid, Typography } from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"
import { useTheme } from "styled-components"
import "./Footer.css"
const Footer = () => {
	const theme = useTheme()
	return (
		<Container maxWidth="md" className="footer" theme={theme} fixed>
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
							<Typography color="textPrimary">Mentions légales</Typography>
							<Typography
								component={Link}
								color="textSecondary"
								display="block"
							>
								Qui sommes nous?
							</Typography>
							<Typography
								component={Link}
								color="textSecondary"
								display="block"
							>
								Comment nous contacter?
							</Typography>
							<Typography
								component={Link}
								color="textSecondary"
								display="block"
							>
								Notre vision
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
							<Typography color="textPrimary">Mentions légales</Typography>
							<Typography
								component={Link}
								color="textSecondary"
								display="block"
							>
								Mentions légales
							</Typography>
							<Typography
								component={Link}
								color="textSecondary"
								display="block"
							>
								Centre d'aide
							</Typography>
							<Typography
								component={Link}
								color="textSecondary"
								display="block"
							>
								Préférences de cookies
							</Typography>
						</Grid>
						<Grid item xs={4}>
							<Typography color="textPrimary">Mentions légales</Typography>
							<Typography
								component={Link}
								color="textSecondary"
								display="block"
							>
								Nous rejoindre
							</Typography>
							<Typography
								component={Link}
								color="textSecondary"
								display="block"
							>
								Devenir développeur
							</Typography>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Typography color="textPrimary">© 2021 Tunflix, Inc.</Typography>
				</Grid>
			</Grid>
		</Container>
	)
}

// const useStyles = makeStyles((theme) => ({
// 	footer: {
// 		paddingTop: theme.spacing(8),
// 	},
// 	socialIcon: {
// 		color: "grey",
// 		cursor: "pointer",
// 		"&:hover": {
// 			color: "#fff",
// 		},
// 		transition: ".1s",
// 		marginRight: theme.spacing(1),
// 	},
// }))

export default Footer
