import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import { getProducts } from "../../assets/redux/actions/products";


const Home = () => {
    const dispatch = useDispatch();

    const { list: products } = useSelector(state => state.productsList);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map(product => (
                    <Col sm={12} md={6} lg={4} xl={3} key={product._id} >
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </>
    )
};

export default Home;