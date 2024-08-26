import Button from "../button/Button";
import Header from "../header/Header";
import "./home.scss";

const Home = () => {
	return (
		<div className="home">
			<Header homepage={true} />
			<main>
				<section className="price">
					<h2>Price</h2>
					<div className="price__desc">
						<span className="bold font__size-regular-large">
							<sup>$</sup>0
						</span>
						<span className="space"> /</span>
						month
					</div>
				</section>
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
			</main>
		</div>
	);
};

export default Home;
