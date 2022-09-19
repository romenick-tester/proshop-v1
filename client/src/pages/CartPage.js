import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import { Message } from "../components";
import { CartItemDetails, CartCheckout } from "../subpages";


const CartPage = () => {
    const { cartItems } = useSelector(state => state.cart);

    return (
        <>
            <Row>
                <Col md={8}>
                    <h1>Shopping Cart</h1>
                    {cartItems.length === 0
                        ? <Message>Your cart is empty <Link to="/">Go Back</Link></Message>
                        : <CartItemDetails cartItems={cartItems} />
                    }
                </Col>
                <Col md={4}>
                    <CartCheckout cartItems={cartItems} />
                </Col>
            </Row>

            <Outlet />
        </>
    )
};

export default CartPage;