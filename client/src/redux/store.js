import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productsListReducer, productDetailsReducer } from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducers";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducers";

const cartItemsFromStorage = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [];
const userDetailsFromStorage = localStorage.getItem("userDetails") ? JSON.parse(localStorage.getItem("userDetails")) : null;

const initialState = {
    cart: { cartItems: cartItemsFromStorage },
    login: { profile: userDetailsFromStorage }
};

const middlewares = [thunk];

const reducers = combineReducers({
    productsList: productsListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    login: userLoginReducer,
    register: userRegisterReducer
});

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;