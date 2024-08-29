import { Link } from "react-router-dom";

type ButtonProps = {
	text: string;
	pulse?: boolean;
	border?: string;
};

const Button = ({ text, pulse, border }: ButtonProps) => {
	return (
		<Link
			className={`btn ${pulse ? "btn-pulse" : ""} ${
				border ? "btn-border" : ""
			}`}
			to="/create"
		>
			{text}
		</Link>
	);
};

export default Button;
