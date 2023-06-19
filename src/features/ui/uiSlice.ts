import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

// Define a type for the slice state
export interface UiState {
	darkMode: boolean;
	howToPlay: boolean;
	showStatistics: boolean;
}

// Define the initial state using that type
const initialState: UiState = {
	darkMode:
		typeof window !== "undefined" &&
		localStorage.getItem("darkMode") === "true",
	howToPlay:
		typeof window !== "undefined" &&
		!(localStorage.getItem("firstTime") === "false"),
	showStatistics: false,
};

export const uiSlice = createSlice({
	name: "ui",
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		setDarkMode: (state, { payload }) => {
			state.darkMode = payload;
		},
		setHowToPlay: (state, { payload }) => {
			state.howToPlay = payload;
		},
		setShowStatistics: (state, { payload }) => {
			state.showStatistics = payload;
		},
	},
});

export const { setDarkMode, setHowToPlay, setShowStatistics } = uiSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectDarkMode = (state: RootState) => state.ui.darkMode;
export const selectHowToPlay = (state: RootState) => state.ui.howToPlay;
export const selectShowStatistics = (state: RootState) =>
	state.ui.showStatistics;

export default uiSlice.reducer;
