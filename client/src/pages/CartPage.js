import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Row, Col, ListGroup, Image, Form, Button, Card } from "react-bootstrap";
import { Message } from "../components";
import { addToCart } from "../redux/actions/cartActions";


const CartPage = () => {
    const { cartItems } = useSelector(state => state.cart);

    return (
        <>
            <h4> Your Cart {cartItems.length === 0 && "Is Empty!"}  </h4>

            <p>Total Items: {cartItems.length}</p>

            <Outlet />
        </>
    )
};

export default CartPage;