import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "./reducer";

const middleware = [thunk];

// I used redux-logger just to have a better control with logs in the console with 
//whats happening with redux
//we can use redux-devtools-extension/developmentOnly’ instead of ‘redux-devtools-extension’ 
//if I don’t want to allow the extension in production

middleware.push(logger);

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware))
);

export default store;