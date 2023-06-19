import * as React from "react";
import { useAppSelector } from "../../hooks";
import { selectWords } from "../../features/words/wordsSlice";
import Letter from "../shared/Letter";

const WordleGrid = () => {
	const words = useAppSelector(selectWords);
	return (
		<div className={`my-12 flex flex-col gap-2 items-center`}>
			{words.map((word, index) => (
				<div key={`letter${index}`} className={`flex gap-2`}>
					{word.map((letter, lindex) => (
						<Letter
							key={`letter${index}${lindex}`}
							variant={`${
								letter.state === "success"
									? "green"
									: letter.state === "warning"
									? "yellowgrid"
									: letter.state === "error"
									? "darkgray"
									: "lightgray"
							}`}
						>
							{letter.letter}
						</Letter>
					))}
				</div>
			))}
		</div>
	);
};

export default WordleGrid;
