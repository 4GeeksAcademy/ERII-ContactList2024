import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container">
				<Link to="/">
					<span className="text-decoration-none navbar-brand mb-0 h1">Personal Contact List</span>
				</Link>
				<div className="ml-auto">
					<Link to="/form">
						<button className="btn btn-success">Add a new contact</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
