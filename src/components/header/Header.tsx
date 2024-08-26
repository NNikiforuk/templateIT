import "./header.scss";
import Navigation from "../navigation/Navigation";
import Button from "../button/Button";

const Header = () => {
	return (
		<header className="header">
			<Navigation />
			<div className="header__banner">
				<h1>Customize your own plan</h1>
				<div className="steps">
					<div className="step">
						<div className="step__circle"></div>
						<div className="step__circle">1</div>
						<div className="step__square step__circle-1">plan</div>
					</div>
					<div className="step">
						<div className="step__circle"></div>
						<div className="step__circle">2</div>
						<div className="step__square">write</div>
					</div>
					<div className="step">
						<div className="step__circle"></div>
						<div className="step__circle">3</div>
						<div className="step__square">print</div>
					</div>
				</div>
				<Button text="START" pulse={true} />
			</div>
		</header>
	);
};

export default Header;
