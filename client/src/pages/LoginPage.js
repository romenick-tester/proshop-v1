import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Message, Loading, FormContainer } from "../components";
import { loginUser } from "../redux/actions/userActions";


const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const { loading, error, profile } = useSelector(state => state.user);

    const navTo = useNavigate();

    const search = useLocation().search;
    const redirect = search ? search.split("=")[1] : "/";

    useEffect(() => {
        if (profile) {
            navTo(redirect);
        }
    }, [navTo, profile]);

    const submitHandler = e => {
        e.preventDefault();
        dispatch(loginUser({ email, password }));
    };

    return (
        <FormContainer>
            <h1>Sign In</h1>
            {error && <Message variant="danger">{error}</Message>}
            {loading && <Loading />}
            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Please enter your email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Please enter your password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}></Form.Control>
                </Form.Group>
                <Button type="submit" variant="primary" className="mt-3">Login</Button>
            </Form>
            <Row className="py-3">
                <Col>
                    New customer? <Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>register</Link>
                </Col>
            </Row>
        </FormContainer>
    )
};

export default LoginPage;