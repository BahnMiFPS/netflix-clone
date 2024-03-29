import { Container, Grid } from "@mui/material"
import React from "react"
import theme from "../../utils/theme"
import YoutubeEmbed from "./YoutubeEmbed"

function VideoContainer({ videos }) {
	if (videos["0"] !== null) {
		return (
			<Container maxWidth="false" sx={{ marginBottom: theme.spacing(4) }}>
				<div className="row-title related-videos">Related Videos</div>
				<Grid
					container
					spacing={{ xs: 2, md: 3 }}
					columns={{ xs: 4, sm: 8, md: 12 }}
					height={"100%"}
				>
					{videos ? (
						videos.slice(0, 3).map((video, index) => (
							<Grid item xs={12} sm={12} md={4} key={index} marginTop={2}>
								<YoutubeEmbed
									embedId={video.key}
									title={video.name}
									publishedAt={video.published_at}
								/>
							</Grid>
						))
					) : (
						<></>
					)}
				</Grid>
			</Container>
		)
	} else {
		return <></>
	}
}

export default VideoContainer
