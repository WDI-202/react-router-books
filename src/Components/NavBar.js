import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<div>
			<Link>Home</Link> <Link to="/books/horror">Horror</Link>{" "}
			<Link to="/books/romance">Romance</Link>
		</div>
	);
};

export default NavBar;
