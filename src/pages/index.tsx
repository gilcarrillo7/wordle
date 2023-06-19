import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { useAppSelector, useAppDispatch } from "../hooks";
import {
	selectDarkMode,
	selectHowToPlay,
	selectShowStatistics,
} from "../features/ui/uiSlice";
import { fetchWords, selectStatus } from "../features/words/wordsSlice";
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
