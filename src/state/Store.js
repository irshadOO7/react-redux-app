import { configureStore } from '@reduxjs/toolkit'
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducer";

export const store = configureStore( {reducer:reducers}, {}, applyMiddleware(thunk))