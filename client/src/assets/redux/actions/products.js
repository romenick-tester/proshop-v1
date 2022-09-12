import axios from "axios";
import { GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR } from "../constants";

const getProducts = () => async (dispatch) => {
    dispatch({ type: GET_PRODUCTS_REQUEST });
    try {
        const { data } = await axios.get("/products");

        console.log(data);
        dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data.data });
    } catch (err) {
        console.log(err.message);
        dispatch({ type: GET_PRODUCTS_ERROR, payload: "" });
    }
};

export { getProducts }