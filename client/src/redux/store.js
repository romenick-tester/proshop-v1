import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productsListReducer, productDetailsReducer } from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducers";
import userReducer from "./reducers/userReducers";

const cartItemsFromStorage = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [];

const initialState = {
    cart: { cartItems: cartItemsFromStorage }
};

const middlewares = [thunk];

const reducers = combineReducers({
    productsList: productsListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    user: userReducer
});

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;