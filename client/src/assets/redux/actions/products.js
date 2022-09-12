import axios from "axios";
import { GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR } from "../constants";

const getProducts = () => async (dispatch) => {
    dispatch({ type: GET_PRODUCTS_REQUEST });
    try {
        const { data } = await axios.get("/api/v1/products");

        dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
    } catch (err) {
        console.log(err.message);
        dispatch({ type: GET_PRODUCTS_ERROR, payload: err.message });
    }
};

export { getProducts }