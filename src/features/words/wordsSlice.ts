import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

type FetchError = {
	message: string;
};

export type LetterGrid = {
	letter: string;
	state: "pending" | "error" | "success" | "warning";
};

// Define a type for the slice state
export interface WordsState {
	status: "loading" | "idle";
	error: string | null;
	words: string[];
	arrayLetters: LetterGrid[][];
	currentRow: number;
	currentCol: number;
	word: string;
	played: number;
	wins: number;
	result: "pending" | "win" | "fail";
	correctWord: string | null;
	usedLetters: LetterGrid[];
}

// Define the initial state using that type
const initialState: WordsState = {
	arrayLetters: [
		Array(5).fill({ letter: "", state: "pending" }),
		Array(5).fill({ letter: "", state: "pending" }),
		Array(5).fill({ letter: "", state: "pending" }),
		Array(5).fill({ letter: "", state: "pending" }),
		Array(5).fill({ letter: "", state: "pending" }),
		Array(5).fill({ letter: "", state: "pending" }),
	],
	currentRow: 0,
	currentCol: 0,
	words: [],
	status: "idle",
	error: null,
	word: "",
	played: 0,
	wins: 0,
	result: "pending",
	correctWord: null,
	usedLetters: [],
};

export const wordSlice = createSlice({
	name: "words",
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		setCurrentRow: (state, { payload }) => {
			state.currentRow = payload;
		},
		setCurrentCol: (state, { payload }) => {
			state.currentCol = payload;
		},
		setLetterWord: (state, { payload }) => {
			if (state.result === "pending") {
				const col = state.currentCol === 5 ? 4 : state.currentCol;
				state.arrayLetters = state.arrayLetters.map((word, i) =>
					word.map((letter, j) =>
						i === state.currentRow && j === col
							? { letter: payload, state: "pending" }
							: letter
					)
				);
				if (state.currentCol < 5) state.currentCol = state.currentCol + 1;
			}
		},
		setWord: (state) => {
			if (state.currentCol === 5 && state.result === "pending") {
				let success = 0;
			state.arrayLetters = state.arrayLetters.map((word, i) =>
				i === state.currentRow
					? word.map((letter, j) => {
							if (letter.letter === state.word[j]) {
								success += 1;
								state.usedLetters.push({
									letter: letter.letter,
									state: "success",
								});
								return { letter: letter.letter, state: "success" };
							} else if (state.word.includes(letter.letter)) {
								state.usedLetters.push({
									letter: letter.letter,
									state: "warning",
								});
								return { letter: letter.letter, state: "warning" };
							} else {
								state.usedLetters.push({
									letter: letter.letter,
									state: "error",
								});
								return { letter: letter.letter, state: "error" };
							}
						})
					: word
				);
				if (success === 5) {
					state.wins += 1;
					state.played += 1;
					state.correctWord = null;
					state.result = "win";
				} else if (state.currentRow === 5) {
					state.played += 1;
					state.result = "fail";
					state.correctWord = state.word;
				} else {
					state.currentCol = 0;
					state.currentRow = state.currentRow + 1;
				}
			}
		},
		clearLetter: (state) => {
			const col = state.currentCol === 5 ? 4 : state.currentCol - 1;
			if (state.result === "pending" && state.currentCol > 0) {
				state.arrayLetters = state.arrayLetters.map((word, i) =>
					word.map((letter, j) =>
						i === state.currentRow && j === col
							? { letter: "", state: "pending" }
							: letter
					)
				);
				state.currentCol = state.currentCol - 1;
			}
		},
		setNewWord: (state) => {
			const rnd = Math.floor(Math.random() * state.words.length);
			const words = state.words;
			if (state.result === "pending") {
				state.played += 1;
				state.correctWord = state.word;
			}
			state.result = "pending";
			state.currentCol = 0;
			state.currentRow = 0;
			state.arrayLetters = [
				Array(5).fill({ letter: "", state: "pending" }),
				Array(5).fill({ letter: "", state: "pending" }),
				Array(5).fill({ letter: "", state: "pending" }),
				Array(5).fill({ letter: "", state: "pending" }),
				Array(5).fill({ letter: "", state: "pending" }),
				Array(5).fill({ letter: "", state: "pending" }),
			];
			state.usedLetters = [];
			state.word = words[rnd];
			words.splice(rnd, 1);
			state.words = words;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchWords.pending, (state) => {
			state.status = "loading";
			state.error = null;
		});
		builder.addCase(fetchWords.fulfilled, (state, { payload }) => {
			if (payload === "") state.error = "No se pudo leer archivo";
			else {
				const words = payload
					.split("\n")
					.filter((word: string) => word.length === 5)
					.map((word: string) =>
						word
							.normalize("NFD")
							.replace(/[\u0300-\u036f]/g, "")
							.toUpperCase()
					);
				const rnd = Math.floor(Math.random() * words.length);
				state.word = words[rnd];
				words.splice(rnd, 1);
				state.words = words;
				state.error = null;
			}
			state.status = "idle";
		});
		builder.addCase(fetchWords.rejected, (state, { payload }) => {
			if (payload) state.error = payload.message;
			state.status = "idle";
		});
	},
});

export const fetchWords = createAsyncThunk<
	string,
	void,
	{ rejectValue: FetchError }
>("words", async () => {
	const response = await fetch(`assets/words.txt`, { mode: "no-cors" });
	if (response.ok === true) {
		const data = await response.text();
		return data;
	} else {
		return "";
	}
});

export const {
	setCurrentCol,
	setCurrentRow,
	setLetterWord,
	setWord,
	clearLetter,
} = wordSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectWords = (state: RootState) => state.words.arrayLetters;
export const selectCurrentRow = (state: RootState) => state.words.currentRow;
export const selectCurrentCol = (state: RootState) => state.words.currentCol;
export const selectStatus = (state: RootState) => state.words.status;
export const selectWins = (state: RootState) => state.words.wins;
export const selectPlayed = (state: RootState) => state.words.played;
export const selectCorrectWord = (state: RootState) => state.words.correctWord;
export const selectUsedLetters = (state: RootState) => state.words.usedLetters;
export const selectError = (state: RootState) => state.words.error;

export default wordSlice.reducer;
