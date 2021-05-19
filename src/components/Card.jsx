import React from "react";

const Card = ({book, handleClick}) => {
	return (
		<div onClick={()=>{handleClick(book)}} className="column card">
			<img alt="cover art" src={book.cover} />
			<div>{book.title}</div>
		</div>
	);
};
export default Card

