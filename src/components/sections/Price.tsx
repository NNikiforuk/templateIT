import "./price.scss";

const Price = () => {
	return (
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
	);
};

export default Price;
