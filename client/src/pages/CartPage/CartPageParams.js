import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../assets/redux/actions/cartActions";


const CartPageParams = () => {
    const search = useLocation().search;
    const productID = useParams().id;
    const dispatch = useDispatch();

    const qty = search ? search.split("=")[1] : 1;

    useEffect(() => {
        dispatch(addToCart(productID, qty))
    }, [productID, qty]);

    return <></>;
};

export default CartPageParams;