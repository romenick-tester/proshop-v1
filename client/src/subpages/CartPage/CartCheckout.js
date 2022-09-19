import React from "react";
import { ListGroup, Card } from "react-bootstrap";


const CartCheckout = () => {
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

export default CartCheckout;