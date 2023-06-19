import * as React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
	setHowToPlay,
	setShowStatistics,
	setDarkMode,
	selectDarkMode,
} from "../../features/ui/uiSlice";
import HelpIcon from "../icons/HelpIcon";
import StatisticsIcon from "../icons/StatisticsIcon";
import SwitchMode from "../icons/SwitchMode";

const Header = () => {
	const dispatch = useAppDispatch();
	const darkMode = useAppSelector(selectDarkMode);
	return (
		<div
			className={`${
				darkMode ? "bg-darktext/3" : "bg-lightbg"
			} flex items-center justify-between px-2 sm:px-4 py-2 w-full rounded-[15px]`}
		>
			<div
				className="cursor-pointer"
				onClick={() => dispatch(setHowToPlay(true))}
			>
				<HelpIcon variant={`${darkMode ? "dark" : "light"}`} />
			</div>
			<h1
				className={`${
					darkMode ? "text-darktext" : ""
				} font-semibold text-[26px] sm:text-[40px] leading-[47px] tracking-[.075em] pl-12 sm:pl-20`}
			>
				WORDLE
			</h1>
			<div className={`${darkMode ? "" : "gap-4"} flex items-center`}>
				<div
					className="cursor-pointer"
					onClick={() => dispatch(setShowStatistics(true))}
				>
					<StatisticsIcon variant={`${darkMode ? "dark" : "light"}`} />
				</div>
				<div
					className={`${darkMode ? "" : ""} cursor-pointer p-0`}
					onClick={() => dispatch(setDarkMode(!darkMode))}
				>
					<SwitchMode variant={`${darkMode ? "dark" : "light"}`} />
				</div>
			</div>
		</div>
	);
};

export default Header;
