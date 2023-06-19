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

const rootReducer = combineReducers({
	ui: uiReducer,
	words: wordReducer,
});

const uiMiddleware: Middleware<
	{},
	CombinedState<{ ui: UiState; words: WordsState }>
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
				dispatch({ type: "ui/setShowStatistics", payload: true });
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
