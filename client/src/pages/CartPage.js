import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, ListGroup, Image, Form, Button, Card } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { Message } from "../components";
import { addToCart } from "../redux/actions/cartActions";


const CartPage = () => {
    const { cartItems } = useSelector(state => state.cart);

    return (
        <>
            <Row>
                <Col md={8}>
                    <h1>Shopping Cart</h1>
                    {cartItems.length === 0
                        ? <Message>Your cart is empty <Link to="/">Go Back</Link></Message>
                        : <ItemDetails cartItems={cartItems} />
                    }
                </Col>
                <Col md={4}>
                    <CheckOut />
                </Col>
            </Row>

            <Outlet />
        </>
    )
};

const ItemDetails = ({ cartItems }) => {
    const dispatch = useDispatch();

    const removeFromCartHandler = (productId) => {
        console.log(`remove item: ${productId}`);
    };

    return (
        <ListGroup variant="flush">
            {cartItems.map(item => {
                const { productId, image, name, price, qty, countInStock } = item;
                return (
                    <ListGroup.Item key={productId}>
                        <Row>
                            <Col md={2}>
                                <Image src={image} fluid rounded />
                            </Col>
                            <Col md={3}>
                                <Link to={`/product/${productId}`}>
                                    {name}
                                </Link>
                            </Col>
                            <Col md={2}>
                                £{price}
                            </Col>
                            <Col md={2}>
                                <Form.Control
                                    as="select"
                                    value={qty}
                                    onChange={e => dispatch(addToCart(productId, +e.target.value))}
                                >
                                    {[...Array(countInStock).keys()].map(x => {
                                        return <option key={x + 1} value={x + 1}>{x + 1}</option>
                                    })}
                                </Form.Control>
                            </Col>
                            <Col md={2}>
                                <Button
                                    type="button"
                                    variant="light"
                                    style={{ color: "red" }}
                                    onClick={() => removeFromCartHandler(productId)}>
                                    <FaTrash />
                                </Button>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                )
            })}
        </ListGroup>
    )
};

const CheckOut = () => {
    return (
        <Card>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <div style={{ margin: "2rem 0" }}></div>
                </ListGroup.Item>
                <ListGroup.Item>
                    <h3>Subtotal () items</h3>
                </ListGroup.Item>
            </ListGroup>
        </Card>
    )
};

export default CartPage;