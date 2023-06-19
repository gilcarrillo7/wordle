import {
	configureStore,
	combineReducers,
	Action,
	Middleware,
	CombinedState,
} from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";

import uiReducer, { UiState } from "./features/ui/uiSlice";
import wordReducer, { WordsState } from "./features/words/wordsSlice";
import timerReducer, { TimerState } from "./features/timer/timerSlice";

const rootReducer = combineReducers({
	ui: uiReducer,
	words: wordReducer,
	timer: timerReducer,
});

const uiMiddleware: Middleware<
	void,
	CombinedState<{ ui: UiState; words: WordsState; timer: TimerState }>
> =
	({ getState, dispatch }) =>
	(next) =>
	(action) => {
		const result = next(action);
		if (action.type === "ui/setHowToPlay") {
			localStorage.setItem("firstTime", "false");
		} else if (action.type === "ui/setDarkMode") {
			const darkMode = getState().ui.darkMode;
			localStorage.setItem("darkMode", darkMode.toString());
		} else if (action.type === "words/setWord") {
			const result = getState().words.result;
			if (result === "win" || result === "fail")
				setTimeout(
					() => dispatch({ type: "ui/setShowStatistics", payload: true }),
					1000
				);
		} else if (action.type === "timer/setTime") {
			const time = getState().timer.time;
			const error = getState().words.error;
			const result = getState().words.result;
			if (time === "00:00" && !error) {
				dispatch({ type: "words/setNewWord" });
				if (result === "fail")
					dispatch({ type: "ui/setShowStatistics", payload: true });
			}
		}
		return result;
	};

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(
			uiMiddleware as unknown as ReturnType<typeof getDefaultMiddleware>
		),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type Thunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;
