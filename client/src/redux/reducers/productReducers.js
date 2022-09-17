import {
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,
    GET_PRODUCT_DETAILS_REQUEST,
    GET_PRODUCT_DETAILS_SUCCESS,
    GET_PRODUCT_DETAILS_ERROR
} from "../constants/productConstants";

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
            return { ...state, loading: false, error: payload }

        default:
            return state;
    }
};

const productDetailsInitialState = {
    loading: false,
    details: null,
    error: null
};

const productDetailsReducer = (state = productDetailsInitialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_PRODUCT_DETAILS_REQUEST:
            return { ...state, loading: true };

        case GET_PRODUCT_DETAILS_SUCCESS:
            return { ...state, loading: false, details: payload };

        case GET_PRODUCT_DETAILS_ERROR:
            return { ...state, loading: false, error: payload }

        default:
            return state;
    }
};

export { productsListReducer, productDetailsReducer };
