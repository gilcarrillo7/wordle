import * as React from "react";

const Button = ({
	className = "",
	onClick,
	children,
}: {
	className?: string;
	onClick?: () => void;
	children: React.ReactNode;
}) => {
	return (
		<button
			type={"button"}
			className={`${className} text-white bg-darkgreen font-bold rounded-md py-2 w-[200px] sm:w-[263px] mx-auto`}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
