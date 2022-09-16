import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, ListGroup, Image, Form, Button, Card } from "react-bootstrap";
import { Message } from "../../components";
import { addToCart } from "../../assets/redux/actions/cartActions";


const CartPage = () => {

    return (
        <>
            <h4> CartPage component  </h4>
            <Outlet />
        </>
    )
};

export default CartPage;