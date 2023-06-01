import { configureStore } from "@reduxjs/toolkit";
import toolkitReducer from "./toolkitReducer";
import normalReducer from "./normalReducer";
import basicReducer from "./basicReducer";
import bareboneReducer from "./bareboneReducer";

export default configureStore({
	reducer: {
		toolkitReducer,
		normalReducer,
		basicReducer,
		bareboneReducer
	}
})