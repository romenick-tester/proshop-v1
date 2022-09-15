import React from "react";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

import { Footer, Header } from "./layouts";
import { HomePage, ProductDetailsPage, CartPage } from "./pages";

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
                <Route path="/product/:id" element={<ProductDetailsPage />} />
                <Route path="/cart/:id?" element={<CartPage />} />
            </Routes>
        </Container>
    </main>
};

export default App;