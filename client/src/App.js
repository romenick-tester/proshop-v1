import React from "react";
import { Container } from "react-bootstrap";
import { Routes, Route, useParams } from "react-router-dom";

import { Footer, Header } from "./layouts";
import { HomePage } from "./pages";

const App = () => {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    )
};

const Main = () => {
    return <main className="py-3">
        <Container>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/test1" element={<h1>Hello World!</h1>} />
                <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
        </Container>
    </main>
};

const ProductDetails = () => {
    const { id } = useParams();

    return (
        <>
            <h1>Product Details</h1>
            <p>Product no. {id}</p>
        </>
    )
};

export default App;