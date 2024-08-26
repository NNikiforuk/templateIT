import { useState } from "react";
import "./navigation.scss";

const Navigation = () => {
	const [isActive, setIsActive] = useState(false);

	const toggleActiveClass = () => {
		setIsActive(!isActive);
	};

	const removeActive = () => {
		setIsActive(false);
	};

	return (
		<nav className="navbar">
			<a href="#home" className="logo">
				LOGO
			</a>
			<ul className={`navbar__menu ${isActive ? "active" : ""}`}>
				<li onClick={removeActive}>
					<a href="#home" className="nav__link">
						Home
					</a>
				</li>
				<li onClick={removeActive}>
					<a href="/create" className="nav__link cta">
						Let's go!
					</a>
				</li>
			</ul>
			<div
				className={`hamburger ${isActive ? "active" : ""}`}
				onClick={toggleActiveClass}
			>
				<span className="bar"></span>
				<span className="bar"></span>
				<span className="bar"></span>
			</div>
		</nav>
	);
};

export default Navigation;
