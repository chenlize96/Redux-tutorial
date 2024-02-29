import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import { compose } from "@reduxjs/toolkit";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore({
  reducer: reducer,
}, composeEnhancers());

export default store;
