import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { useAppSelector, useAppDispatch } from "../hooks";
import {
	selectDarkMode,
	selectHowToPlay,
	selectShowStatistics,
} from "../features/ui/uiSlice";
import { selectTime } from "../features/timer/timerSlice";
import { fetchWords, selectStatus } from "../features/words/wordsSlice";
import { setTime } from "../features/timer/timerSlice";
import HowToPlay from "../components/home/HowToPlay";
import Statatitics from "../components/home/Statistics";
import Header from "../components/home/Header";
import WordleGrid from "../components/home/WordleGrid";
import Keyboard from "../components/home/Keyboard";

const IndexPage: React.FC<PageProps> = () => {
	const dispatch = useAppDispatch();

	const howToPlay = useAppSelector(selectHowToPlay);
	const showStatistics = useAppSelector(selectShowStatistics);
	const darkMode = useAppSelector(selectDarkMode);
	const status = useAppSelector(selectStatus);
	const time = useAppSelector(selectTime);

	const getTimeRemaining = React.useCallback((e: string) => {
		const total = Date.parse(e) - Date.parse(new Date().toString());
		const seconds = Math.floor((total / 1000) % 60);
		const minutes = Math.floor((total / 1000 / 60) % 60);
		return {
			total,
			minutes,
			seconds,
		};
	}, []);

	const startTimer = React.useCallback((e: string) => {
		const { total, minutes, seconds } = getTimeRemaining(e);
		if (total >= 0) {
			dispatch(
				setTime(
					(minutes > 9 ? minutes : "0" + minutes) +
						":" +
						(seconds > 9 ? seconds : "0" + seconds)
				)
			);
		}
	}, []);
	
	const getDeadTime = React.useCallback(() => {
		const deadline = new Date();
		deadline.setSeconds(deadline.getSeconds() + 300);
		return deadline;
	}, []);

	const clearTimer = React.useCallback((e: Date) => {
		setInterval(() => {
			startTimer(e.toString());
		}, 1000);
	}, []);

	React.useEffect(() => {
		let interval: string | number | NodeJS.Timer | undefined;
		clearTimer(getDeadTime());

		return () => clearInterval(interval);
	}, []);

	React.useEffect(() => {
		if (time === "00:00") clearTimer(getDeadTime());
	}, [time]);

	React.useEffect(() => {
		dispatch(fetchWords());
	}, []);

	return (
		<main className={`${darkMode ? "bg-darkbg" : "bg-lightbgmain"}`}>
			<div className="container sm:pt-12 pb-4 sm:pb-24 min-h-screen">
				<Header />
				{status === "idle" && (
					<>
						<WordleGrid />
						<Keyboard />
					</>
				)}
			</div>
			{howToPlay && <HowToPlay />}
			{showStatistics && <Statatitics />}
		</main>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>Wordle</title>;
