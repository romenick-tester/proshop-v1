import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Message, Loading } from "../components";
import { getUserProfile, updateUserProfile } from "../redux/actions/userActions";


const ProfilePage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState(null);

    const navTo = useNavigate();

    const dispatch = useDispatch();
    const { loading, error, profile: details } = useSelector(state => state.user);

    const userLogin = useSelector(state => state.login);
    const { profile } = userLogin;

    const updateProfile = useSelector(state => state.userUpdateProfile);
    const { success } = updateProfile;

    useEffect(() => {
        if (!profile) {
            navTo("/login");
        } else {
            if (!details) {
                dispatch(getUserProfile("profile"));
            } else {
                setName(profile.name);
                setEmail(profile.email);
            }
        }
    }, [dispatch, navTo, details, profile]);

    const submitHandler = e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage("Password do not match!")
        } else {
            dispatch(updateUserProfile({ id: profile._id, name, email, password }))
        }
    };

    return (
        <Row>
            <Col md={3}>
                <h2>User Profile</h2>
                {message && <Message variant="danger">{message}</Message>}
                {error && <Message variant="danger">{error}</Message>}
                {success && <Message variant="success">User Updated!</Message>}
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
                    <Button type="submit" variant="primary" className="mt-3">Update</Button>
                </Form>
            </Col>
            <Col md={9}>
                <h2>My Orders</h2>
            </Col>
        </Row>
    )
};

export default ProfilePage;