import "./navigation.scss";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

type NavigationProps = {
	page?: string;
};

const Navigation = ({ page }: NavigationProps) => {
	return (
		<nav className="navbar no__print">
			<Link to="/" className="navbar__logo">
				<img src={logo} alt="site logo" width={100} height={30} />
			</Link>
			<ul className="navbar__menu">
				{page === "home" ? (
					<li>
						<Link to="/create" className="nav__link cta">
							Let's go!
						</Link>
					</li>
				) : (
					<li>
						<Link to="/" className="nav__link cta">
							Home
						</Link>
					</li>
				)}
			</ul>
		</nav>
	);
};

export default Navigation;
