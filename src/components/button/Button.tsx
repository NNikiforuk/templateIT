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
			href="/create"
		>
			{text}
		</a>
	);
};

export default Button;
