import "./navigation.scss";
import logo from "../../assets/logo.svg";

const Navigation = () => {
	return (
		<nav className="navbar no__print">
			<a href="/" className="navbar__logo">
				<img src={logo} alt="site logo" width={100} height={30} />
			</a>
			<ul className="navbar__menu">
				<li>
					<a href="/create" className="nav__link cta">
						Let's go!
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
