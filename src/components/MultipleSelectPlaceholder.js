import * as React from "react"

import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import { Grid, InputLabel } from "@mui/material"

export default function MultipleSelectPlaceholder({
	genreList,
	setSearchParams,
	searchParams,
}) {
	console.log("from multipleselect", genreList)

	return (
		<FormControl sx={{ minWidth: "200px" }}>
			<InputLabel id="demo-simple-select-label">Genres</InputLabel>
			<Select
				labelId="demo-simple-select-label"
				id="demo-simple-select"
				value={searchParams}
				label="Genres"
				onChange={(e) => {
					setSearchParams({ q: e.target.value })
				}}
			>
				{genreList ? (
					genreList.map((genre) => (
						<MenuItem value={genre.name}>{genre.name}</MenuItem>
					))
				) : (
					<></>
				)}
			</Select>
		</FormControl>
	)
}
