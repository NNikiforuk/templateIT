import Button from "../button/Button";
import "./what.scss";

const Whatsthat = () => {
	return (
		<section className="what">
			<h2>What is it?</h2>
			<ul className="what__list">
				<li>no ads</li>
				<li>free</li>
				<li>customizable</li>
				<li>A4 template</li>
				<li>you can generate</li>
				<li>print</li>
				<li>and use</li>
			</ul>
			<div className="what__examples">
				You can use it as: {""}
				<span className="gray">
					training plan, skin care plan, diet plan and many more
				</span>
			</div>
			<div className="what__interested bold">Interested?</div>
			<Button text="START" border="white" />
		</section>
	);
};

export default Whatsthat;
