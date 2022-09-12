import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productsListReducer } from "./reducers/products";

const initialState = {};

const middlewares = [thunk];

const reducers = combineReducers({
    productsList: productsListReducer
});

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;