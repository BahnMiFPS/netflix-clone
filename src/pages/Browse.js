import React from "react"
import SearchPage from "./SearchPage"

function Browse({ searchParam }) {
	return <SearchPage searchParam={searchParam ? searchParam : "Viet Nam"} />
}

export default Browse
