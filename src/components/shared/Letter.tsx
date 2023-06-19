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
		`${darkMode ? "text-white" : "text-white"} bg-[#6AAA64] animate-slide-card`
	} ${
		variant === "yellow" &&
		`${darkMode ? "text-white" : "text-black"} bg-yellow`
	} ${
		variant === "yellowgrid" &&
		`${darkMode ? "text-white" : "text-white"} bg-yellow animate-slide-card`
	} ${
		variant === "darkgray" &&
		`${darkMode ? "text-white" : "text-white"} bg-gray animate-slide-card`
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

	const classText = `${
		variant === "white" && `${darkMode ? "text-white " : "text-black"}`
	} ${
		variant === "lightgreen" &&
		`${darkMode ? "text-white" : "text-black"}  animate-hide-card`
	} ${variant === "green" && `text-white  animate-hide-card`} ${
		variant === "yellow" && `${darkMode ? "text-white" : "text-black"}`
	} ${variant === "yellowgrid" && `text-white animate-hide-card`} ${
		variant === "darkgray" && `text-white animate-hide-card`
	} ${variant === "lightgray" && `${darkMode ? "text-white" : "text-black"}`} ${
		variant === "lightergray" &&
		`${darkMode ? "text-white" : "text-lightblack"}`
	}`;
	const classSize = `${
		size === "lg"
			? "w-[38px] h-[38px] sm:w-[76px] sm:h-[76px] font-extrabold text-[18px] sm:text-[35px]"
			: "w-[45px] h-[51px] font-medium text-[18px] cursor-pointer"
	}`;
	return (
		<div
			className={`${classSize} ${className} relative flex justify-center items-center `}
			onClick={onClick}
		>
			<div
				className={`${classVariant} z-0 absolute top-0 lef-0 w-full h-full rounded-md`}
			></div>
			<div className={`z-10 ${classText}`}>{children}</div>
		</div>
	);
};

export default Letter;
