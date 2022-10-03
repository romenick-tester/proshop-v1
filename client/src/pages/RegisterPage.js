import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Message, Loading, FormContainer } from "../components";
import { registerUser } from "../redux/actions/userActions";


const RegisterPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState(null);

    const dispatch = useDispatch();
    const { loading, error, profile } = useSelector(state => state.register);

    const navTo = useNavigate();

    const search = useLocation().search;
    const redirect = search ? search.split("=")[1] : "/";

    useEffect(() => {
        if (profile) {
            navTo(redirect);
        }
    }, [navTo, profile, redirect]);

    const submitHandler = e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage("Password do not match!")
        } else {
            dispatch(registerUser({ name, email, password }));
        }
    };

    return (
        <FormContainer>
            <h1>Sign Up</h1>
            {message && <Message variant="danger">{message}</Message>}
            {error && <Message variant="danger">{error}</Message>}
            {loading && <Loading />}
            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your fullname"
                        value={name}
                        onChange={e => setName(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Confirm password"
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}></Form.Control>
                </Form.Group>
                <Button type="submit" variant="primary" className="mt-3">Signup Now</Button>
            </Form>
            <Row className="py-3">
                <Col>
                    Already signed-up? <Link to={redirect ? `/signin?redirect=${redirect}` : "/signin"}>signin</Link>
                </Col>
            </Row>
        </FormContainer>
    )
};

export default RegisterPage;