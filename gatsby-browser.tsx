import React from "react";
import { AnimatePresence } from "framer-motion";
import { Provider } from "react-redux";
import store from "./src/store";

import "./src/styles/global.scss";

export const wrapRootElement = ({ element }) => {
	return (
		<Provider store={store}>
			<AnimatePresence mode="wait">{element}</AnimatePresence>
		</Provider>
	);
};
