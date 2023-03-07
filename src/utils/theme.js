import { createTheme } from "@mui/material"
import { grey, red } from "@mui/material/colors"

const theme = createTheme({
	palette: {
		mode: "dark",
		primary: red,
		secondary: grey,
		background: {
			default: "#141414",
			paper: "#141414",
		},
		error: { main: "#e87c03" },
		text: { primary: "#fff", secondary: "rgb(150,150,150)", disabled: "#fff" },
	},
	typography: {
		fontFamily: ["Montserrat", "sans-serif"].join(","),
	},
})
export default theme
