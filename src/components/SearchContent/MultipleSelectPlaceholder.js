import React, { useState } from "react"

import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import { InputLabel } from "@mui/material"

export default function MultipleSelectPlaceholder({
	genreList,
	setSearchParams,
	searchParams,
}) {
	const [chosenValue, setChosenValue] = useState("")
	return (
		<FormControl sx={{ minWidth: "200px" }}>
			<InputLabel id="demo-simple-select-label">Genres</InputLabel>
			<Select
				labelId="demo-simple-select-label"
				id="demo-simple-select"
				label="Genres"
				onChange={(e) => {
					setSearchParams({ q: e.target.value })
					setChosenValue(e.target.value)
				}}
				value={chosenValue}
			>
				{genreList
					? genreList.map((genre) => (
							<MenuItem key={genre.id} value={genre.name}>
								{genre.name}
							</MenuItem>
					  ))
					: ""}
			</Select>
		</FormControl>
	)
}
