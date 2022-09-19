import React from "react";
import { ListGroup, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const CartCheckout = ({ cartItems }) => {
    const navTo = useNavigate();
    const checkoutHandler = () => {
        console.log("proceed to checkout");
        navTo("/login?redirect=shipping")
    };

    return (
        <Card>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <div style={{ margin: "2rem 0" }}></div>
                </ListGroup.Item>
                <ListGroup.Item>
                    <h3>Subtotal ({cartItems.reduce((acc, item) => (acc + item.qty), 0)}) items</h3>
                    £{cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}
                </ListGroup.Item>
                <ListGroup.Item>
                    <Button
                        type="button"
                        className="btn-block"
                        disabled={cartItems.length === 0}
                        onClick={checkoutHandler}
                    >
                        Proceed to checkout</Button>
                </ListGroup.Item>
            </ListGroup>
        </Card>
    )
};

export default CartCheckout;