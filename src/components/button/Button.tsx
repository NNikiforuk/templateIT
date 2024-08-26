import "./button.scss";

type ButtonProps = {
	text: string;
	pulse?: boolean;
};

const Button = ({ text, pulse }: ButtonProps) => {
	return (
		<a className={`btn ${pulse ? "btn-pulse" : ""}`} href="/lets-go">
			{text}
		</a>
	);
};

export default Button;
