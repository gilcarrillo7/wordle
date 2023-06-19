import * as React from "react";
import { useAppSelector } from "../../hooks";
import { selectDarkMode } from "../../features/ui/uiSlice";

interface IProps {
	variant?:
		| "green"
		| "lightgreen"
		| "yellow"
		| "yellowgrid"
		| "darkgray"
		| "lightgray"
		| "white"
		| "lightergray";
	size?: "sm" | "lg";
	className?: string;
	children?: React.ReactNode;
	onClick?: () => void;
}

const Letter = ({
	variant = "lightgray",
	children,
	size = "lg",
	className = "",
	onClick,
}: IProps) => {
	const darkMode = useAppSelector(selectDarkMode);

	const classVariant = `${
		variant === "white" &&
		`${
			darkMode
				? "bg-darkbg text-white border-bluegray"
				: "bg-white text-black border-black"
		} border`
	} ${
		variant === "lightgreen" &&
		`${darkMode ? "text-white" : "text-black"} bg-[#6AAA64]`
	} ${
		variant === "green" &&
		`${darkMode ? "text-white" : "text-white"} bg-[#6AAA64]`
	} ${
		variant === "yellow" &&
		`${darkMode ? "text-white" : "text-black"} bg-yellow`
	} ${
		variant === "yellowgrid" &&
		`${darkMode ? "text-white" : "text-white"} bg-yellow`
	} ${
		variant === "darkgray" &&
		`${darkMode ? "text-white" : "text-white"} bg-gray`
	} ${
		variant === "lightgray" &&
		`${darkMode ? "bg-gray/20 text-white" : "bg-gray/30"}`
	} ${
		variant === "lightergray" &&
		`${
			darkMode
				? "bg-lighterbluegray text-white"
				: "bg-lightergray text-lightblack"
		}`
	}`;
	const classSize = `${
		size === "lg"
			? "w-[38px] h-[38px] sm:w-[76px] sm:h-[76px] font-extrabold text-[18px] sm:text-[35px]"
			: "w-[45px] h-[51px] font-medium text-[18px] cursor-pointer"
	}`;
	return (
		<div
			className={`${classVariant} ${classSize} ${className} flex justify-center items-center rounded-md `}
			onClick={onClick}
		>
			{children}
		</div>
	);
};

export default Letter;
