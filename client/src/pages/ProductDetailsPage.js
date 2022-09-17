import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Loading, Message } from "../components";
import { getProductDetails } from "../redux/actions/productActions";
import TheDetails from "../subpages/ProductDetailsPage/TheDetails";

const ProductDetails = () => {
    const [qty, setQty] = useState(1);

    const { id: productID } = useParams();

    const dispatch = useDispatch();
    const navTo = useNavigate();

    const { loading, details: product, error } = useSelector(state => state.productDetails);

    useEffect(() => {
        if (productID) {
            dispatch(getProductDetails(productID));
        }
    }, [dispatch, productID]);

    const addToCartHandler = () => {
        navTo(`/cart/${productID}?qty=${qty}`);
    };

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Message variant="danger">{error}</Message>
    }

    if (!product) {
        return <Message variant="danger">No product found</Message>
    }

    return (
        <>
            <Link to={-1} className="btn btn-light my-3">Go Back</Link>
            <TheDetails
                product={product}
                qty={qty}
                setQty={setQty}
                addToCartHandler={addToCartHandler}
            />
        </>
    )
};

export default ProductDetails;