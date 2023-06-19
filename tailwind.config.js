/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		`./src/pages/**/*.{js,jsx,ts,tsx}`,
		`./src/components/**/*.{js,jsx,ts,tsx}`,
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "15px",
			},
			screens: {
				sm: "668px",
			},
		},
		fontFamily: {
			sans: ["Roboto", "sans-serif"],
		},
		extend: {
			colors: {
				darktext: "#DADCE0",
				lightbgmain: "#FEFEFE",
				lightbg: "#F3F3F3",
				darkbg: "#262B3C",
				lightgreen: "#66A060",
				darkgreen: "#6AAA64",
				yellow: "#CEB02C",
				gray: "#939B9F",
				darkgray: "#818181",
				bluegray: "#888FB5",
				lightergray: "#D3D6DA",
				lighterbluegray: "#565F7E",
				lightblack: "#56575E",
			},
			opacity: {
				89: ".89",
				3: ".03",
				30: ".3",
				20: ".2",
			},
		},
	},
	plugins: [],
};
