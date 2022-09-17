import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Product from "../subpages/HomePage/Product";
import { getProducts } from "../redux/actions/productActions";
import { Loading, Message } from "../components";


const HomePage = () => {
    const dispatch = useDispatch();

    const { loading, list: products, error } = useSelector(state => state.productsList);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    if (loading) {
        return <Outlet>
            <Loading />
        </Outlet>
    }

    if (error) {
        return <Outlet>
            <Message variant="danger">{error}</Message>
        </Outlet>
    }

    return <Outlet>
        <Row>
            {products && products.map(product => (
                <Col sm={12} md={6} lg={4} xl={3} key={product._id} >
                    <Product product={product} />
                </Col>
            ))}
        </Row>
    </Outlet>
};

const Outlet = ({ children }) => {
    return <>
        <h1>Latest Products</h1>
        {children}
    </>
};

export default HomePage;