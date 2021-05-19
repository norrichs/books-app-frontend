import React from "react";
import Card from "./Card";

const Library = ({ books , handleSwitchEditModal}) => {
	const loaded = () => {
		return (
			<div className="row">
				{books.map((book, i) => {
					return (
						<Card
							handleClick={handleSwitchEditModal}
							className="column"
							book={book}
							key={i}
						/>
					);
				})}
			</div>
		);
	};
	const loading = () => <div>Loading</div>;
	return books.length > 0 ? loaded() : loading();
};
export default Library;
