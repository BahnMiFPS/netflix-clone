import React from "react"
import "./Banner.css"
import ImdbBackground from "../../assets/images/imdb.png"

const ImdbRating = ({ rating, ...rest }) => {
	return (
		<div className="imdb" {...rest}>
			<img src={ImdbBackground} alt="imdb" className="imdb-img" />
			<div className="imdb-rating">{rating}</div>
		</div>
	)
}

export default ImdbRating
