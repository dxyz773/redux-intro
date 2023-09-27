// OG imports for combining reducers, creating the store (deprecated), applying Middleware that wraps thunk, and compose with devtools to wrap the middleware
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// --------------------------------------------------------------------------- //

// ⬇️ Redux toolkit combines reducers, adds the middleware, and includes the redux devtools capabilities so we don't have to install all of these separately
// import { configureStore } from "@reduxjs/toolkit";

import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
