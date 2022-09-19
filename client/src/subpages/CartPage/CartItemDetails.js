import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Row, Col, ListGroup, Image, Form, Button } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { addToCart } from "../../redux/actions/cartActions";


const CartItemDetails = ({ cartItems }) => {
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

export default CartItemDetails;