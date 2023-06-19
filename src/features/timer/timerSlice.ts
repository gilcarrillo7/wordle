import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

// Define a type for the slice state
export interface TimerState {
	time: string;
}

// Define the initial state using that type
const initialState: TimerState = {
	time: "05:00",
};

export const TimerSlice = createSlice({
	name: "timer",
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		setTime: (state, { payload }) => {
			state.time = payload;
		},
	},
});

export const { setTime } = TimerSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectTime = (state: RootState) => state.timer.time;

export default TimerSlice.reducer;
