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
		<header className="header">
			<nav className="navbar">
				<a href="#home" className="logo">
					LOGO
				</a>
				<ul className={`navbar__menu ${isActive ? "active" : ""}`}>
					<li onClick={removeActive}>
						<a href="#home" className="navLink">
							Home
						</a>
					</li>
					<li onClick={removeActive}>
						<a href="/lets-go" className="navLink">
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
		</header>
	);
};

export default Navigation;
