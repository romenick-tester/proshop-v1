import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Rating, Loading, Message } from "../../components";
import { getProductDetails } from "../../assets/redux/actions/products";


const ProductDetails = () => {
    const { id: productID } = useParams();

    const dispatch = useDispatch();

    const { loading, details: product, error } = useSelector(state => state.productDetails);

    useEffect(() => {
        if (productID) {
            dispatch(getProductDetails(productID));
        }
    }, [dispatch, productID]);

    return (
        <>
            <Link to={-1} className="btn btn-light my-3">Go Back</Link>
            {loading
                ? <Loading />
                : error ? <Message variant="danger">{error}</Message> : product && (
                    !product ? <h2>No product found</h2> : (
                        <Row>
                            <Col md={6}>
                                <Image src={product.image} alt={product.name} fluid />
                            </Col>
                            <Col md={3}>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        <h3>{product.name}</h3>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        Price: £{product.price}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        Description: {product.description}
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
                                                    <strong>£{product.price}</strong>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Row>
                                                <Col>Status: </Col>
                                                <Col>
                                                    {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Button className="btn-block" type="button" disabled={product.countInStock < 1}>
                                                Add To Cart
                                            </Button>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Card>
                            </Col>
                        </Row>
                    )
                )}
        </>
    )
};

export default ProductDetails;