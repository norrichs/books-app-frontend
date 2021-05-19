import React from "react";
import {Link} from 'react-router-dom'

const Series = (props) => {
	return (
		<div>
			<h1>Series</h1>
			<div>
				To be implemented: related model storing series data for books,
				with views on this page
			</div>
			<Link to="/"><button>back to library</button></Link>
		</div>
	);
};
export default Series;

// * Planned functionality
//	Add to series form w/ prefilled data
//	Display all books as cards
