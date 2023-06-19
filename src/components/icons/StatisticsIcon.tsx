import * as React from "react";

const StatisticsIcon = ({ variant }: { variant: "light" | "dark" }) => {
	return (
		<svg
			width="31"
			height="24"
			viewBox="0 0 31 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect
				x="0.935486"
				width="29.6129"
				height="24"
				rx="2"
				fill={`${variant === "light" ? "#818181" : "#DADCE0"}`}
				fillOpacity={`${variant === "light" ? "0.49" : ""}`}
			/>
			<path
				d="M9.16132 9L9.16132 18"
				stroke={`${variant === "light" ? "white" : "#262B3C"}`}
				strokeWidth="1.2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M15.7419 12V18"
				stroke={`${variant === "light" ? "white" : "#262B3C"}`}
				strokeWidth="1.2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M22.3226 6V18"
				stroke={`${variant === "light" ? "white" : "#262B3C"}`}
				strokeWidth="1.2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default StatisticsIcon;
