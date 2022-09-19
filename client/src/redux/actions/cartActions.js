import axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

const addToCart = (id, qty) => async (dispatch, getState) => {

    const { data } = await axios.get(`/api/v1/products/${id}`);

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            productId: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty: +qty
        }
    });

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
};

const removeItem = (id) => (dispatch, getState) => {
    dispatch({ type: CART_REMOVE_ITEM, payload: { productId: id } });

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
};

export { addToCart, removeItem };