import {
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR
} from "../constants";

const productListInitialStates = {
    loading: false,
    list: null,
    error: null
};

const productsListReducer = (state = productListInitialStates, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_PRODUCTS_REQUEST:
            return { ...state, loading: true };

        case GET_PRODUCTS_SUCCESS:
            return { ...state, loading: false, list: payload };

        case GET_PRODUCTS_ERROR:
            return { ...state, loading: false, error: null }

        default:
            return state;
    }
};

export { productsListReducer };
