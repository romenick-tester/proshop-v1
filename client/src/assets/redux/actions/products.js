import axios from "axios";
import {
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,
    GET_PRODUCT_DETAILS_REQUEST,
    GET_PRODUCT_DETAILS_SUCCESS,
    GET_PRODUCT_DETAILS_ERROR
} from "../constants";

const getProducts = () => async (dispatch) => {
    dispatch({ type: GET_PRODUCTS_REQUEST });
    try {
        const { data } = await axios.get("/api/v1/products");

        dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
    } catch (err) {
        console.error(err.message);
        dispatch({ type: GET_PRODUCTS_ERROR, payload: err.message });
    }
};

const getProductDetails = (id) => async (dispatch) => {
    dispatch({ type: GET_PRODUCT_DETAILS_REQUEST });

    try {
        const { data } = await axios.get(`/api/v1/products/${id}`);
        dispatch({ type: GET_PRODUCT_DETAILS_SUCCESS, payload: data });
    } catch (err) {
        console.error(err.message);
        dispatch({ type: GET_PRODUCT_DETAILS_ERROR, payload: err.message })
    }
}

export { getProducts, getProductDetails }