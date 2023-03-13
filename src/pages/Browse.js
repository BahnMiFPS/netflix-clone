import { Typography } from "@mui/material"
import axios from "axios"
import React, { useEffect, useState } from "react"
import { API_KEY } from "../api/requests"
import SearchPage from "./SearchPage"

function Browse({ searchParam }) {
	return (
		<>
			<SearchPage searchParam={searchParam ? searchParam : "Viet Nam"} />
		</>
	)
}

export default Browse
