import * as React from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { selectDarkMode } from "../../features/ui/uiSlice";
import {
	selectUsedLetters,
	setLetterWord,
	setWord,
	clearLetter,
	LetterGrid,
} from "../../features/words/wordsSlice";
import Letter from "../shared/Letter";

const Clear = ({ darkMode }: { darkMode: boolean }) => {
	return (
		<svg
			width="23"
			height="17"
			viewBox="0 0 23 17"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M9.94968 4.31639L13.587 7.78048L17.2243 4.31639L18.3244 5.47152L14.7435 8.88191L18.3244 12.2923L17.2243 13.4474L13.587 9.98334L9.94968 13.4474L8.84955 12.2923L12.4305 8.88191L8.84955 5.47152L9.94968 4.31639Z"
				fill={`${darkMode ? "white" : "#56575E"}`}
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M6.68607 0.906006C6.39072 0.906006 6.1119 1.04237 5.93057 1.27551L0.47151 8.2943C0.202693 8.63992 0.202694 9.1239 0.47151 9.46952L5.93057 16.4883C6.1119 16.7214 6.39071 16.8578 6.68607 16.8578H21.6027C22.1313 16.8578 22.5599 16.4293 22.5599 15.9007V1.86311C22.5599 1.33451 22.1313 0.906006 21.6027 0.906006H6.68607ZM2.03536 8.88191L6.99814 2.50119H20.9647V15.2626H6.99814L2.03536 8.88191Z"
				fill={`${darkMode ? "white" : "#56575E"}`}
			/>
		</svg>
	);
};

const Keyboard = () => {
	const first = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
	const second = ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ"];
	const third = ["Z", "X", "C", "V", "B", "N", "M"];
	const dispatch = useAppDispatch();
	const darkMode = useAppSelector(selectDarkMode);
	const usedLetters = useAppSelector(selectUsedLetters);

	const getStatus = React.useCallback(
		(letter: string): LetterGrid => {
			if (
				usedLetters.find(
					(used) => used.letter === letter && used.state === "success"
				)
			) {
				return { letter, state: "success" };
			} else if (
				usedLetters.find(
					(used) => used.letter === letter && used.state === "warning"
				)
			) {
				return { letter, state: "warning" };
			} else if (
				usedLetters.find(
					(used) => used.letter === letter && used.state === "error"
				)
			) {
				return { letter, state: "error" };
			}
			return { letter, state: "pending" };
		},
		[usedLetters]
	);

	const firstRow = React.useMemo<LetterGrid[]>(
		() => first.map((letter) => getStatus(letter)),
		[usedLetters]
	);

	const secRow = React.useMemo<LetterGrid[]>(
		() => second.map((letter) => getStatus(letter)),
		[usedLetters]
	);

	const thirdRow = React.useMemo<LetterGrid[]>(
		() => third.map((letter) => getStatus(letter)),
		[usedLetters]
	);

	const handleLetter = (letter: string) => {
		dispatch(setLetterWord(letter));
	};

	const enterWord = () => {
		dispatch(setWord());
	};

	const clearLast = () => {
		dispatch(clearLetter());
	};

	React.useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Enter") enterWord();
			else if (e.key === "Backspace") clearLast();
			else if (/^[a-zA-Z]$/.test(e.key)) handleLetter(e.key.toUpperCase());
		};

		document.addEventListener("keydown", handleKeyDown);

		return function cleanup() {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	return (
		<div
			className={`w-full p-2 sm:p-4 ${
				darkMode ? "bg-darktext/3" : "bg-darktext/30"
			}`}
			onKeyDown={(e) => console.log(e)}
		>
			<div className="flex gap-1 sm:gap-2 pl-2 sm:pl-8">
				{firstRow.map((letter, i) => (
					<Letter
						key={`${letter}${i}`}
						variant={`${
							letter.state === "success"
								? "green"
								: letter.state === "warning"
								? "yellowgrid"
								: letter.state === "error"
								? "darkgray"
								: "lightergray"
						}`}
						size="sm"
						onClick={() => handleLetter(letter.letter)}
					>
						{letter.letter}
					</Letter>
				))}
			</div>
			<div className="flex gap-1 sm:gap-2 my-1 sm:my-2 pl-4 sm:pl-12">
				{secRow.map((letter, i) => (
					<Letter
						key={`${letter}${i}`}
						variant={`${
							letter.state === "success"
								? "green"
								: letter.state === "warning"
								? "yellowgrid"
								: letter.state === "error"
								? "darkgray"
								: "lightergray"
						}`}
						size="sm"
						onClick={() => handleLetter(letter.letter)}
					>
						{letter.letter}
					</Letter>
				))}
			</div>
			<div className="flex gap-1 sm:gap-2">
				<Letter
					variant="lightergray"
					size="sm"
					className="w-auto px-1 sm:px-2"
					onClick={() => enterWord()}
				>
					ENTER
				</Letter>
				{thirdRow.map((letter, i) => (
					<Letter
						key={`${letter}${i}`}
						variant={`${
							letter.state === "success"
								? "green"
								: letter.state === "warning"
								? "yellowgrid"
								: letter.state === "error"
								? "darkgray"
								: "lightergray"
						}`}
						size="sm"
						onClick={() => handleLetter(letter.letter)}
					>
						{letter.letter}
					</Letter>
				))}
				<Letter
					variant="lightergray"
					size="sm"
					className="w-auto px-3 sm:px-6"
					onClick={() => clearLast()}
				>
					<Clear darkMode={darkMode} />
				</Letter>
			</div>
		</div>
	);
};

export default Keyboard;
