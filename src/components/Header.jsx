import React from "react";
import { NavLink } from "react-router-dom";

const Header = (props) => {
	return (
		<header className="row">
			<h2 className="column">myBooks</h2>
			<nav className="column column-50 column-offset-25">
				<div className="row">
					<NavLink className="column" to="/">
						Library
					</NavLink>
					<NavLink className="column" to="/series">
						Series
					</NavLink>
					<button onClick={props.handleSwitchCreateModal} className="column">
						Add Book
					</button>
				</div>
			</nav>
		</header>
	);
};
export default Header;
