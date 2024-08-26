import "./button.scss";

type ButtonProps = {
	text: string;
	pulse?: boolean;
	border?: string;
};

const Button = ({ text, pulse, border }: ButtonProps) => {
	return (
		<a
			className={`btn ${pulse ? "btn-pulse" : ""} ${
				border ? "btn-border" : ""
			}`}
			href="/lets-go"
		>
			{text}
		</a>
	);
};

export default Button;
