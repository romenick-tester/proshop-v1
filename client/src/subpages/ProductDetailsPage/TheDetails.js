import React from "react";
import { Row, Col, Image, ListGroup, Card, Button, Form } from "react-bootstrap";
import Rating from "../../components/Rating";


const TheDetails = ({ product, qty, setQty, addToCartHandler }) => {
    const { image, name, rating, numReviews, price, description, countInStock } = product;

    return (
        <Row>
            <Col md={6}>
                <Image src={image} alt={name} fluid />
            </Col>
            <Col md={3}>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <h3>{name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Rating value={rating} text={`${numReviews} reviews`} />
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Price: £{price}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Description: {description}
                    </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md={3}>
                <Card>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Row>
                                <Col>Price: </Col>
                                <Col>
                                    <strong>£{price}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>Status: </Col>
                                <Col>
                                    {countInStock > 0 ? "In Stock" : "Out Of Stock"}
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        {countInStock > 0 && (
                            <ListGroup.Item>
                                <Row>
                                    <Col>Qty: </Col>
                                    <Col>
                                        <Form.Control
                                            as="select"
                                            value={qty}
                                            onChange={e => setQty(e.target.value)}
                                        >
                                            {[...Array(countInStock).keys()].map(x => {
                                                return <option key={x + 1} value={x + 1}>{x + 1}</option>
                                            })}
                                        </Form.Control>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        )}
                        <ListGroup.Item>
                            <Button
                                type="button"
                                className="btn-block"
                                disabled={countInStock < 1}
                                onClick={addToCartHandler}
                            >
                                Add To Cart
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    )
};

export default TheDetails;