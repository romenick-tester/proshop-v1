import React from "react";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

import { Footer, Header } from "./layouts";
import { HomePage, ProductDetailsPage, CartPage, AuthPage } from "./pages";
import { CartPageParams } from "./subpages";

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
                <Route path="/cart" element={<CartPage />}>
                    <Route path=":id" element={<CartPageParams />} />
                </Route>
                <Route path="/login" element={<AuthPage />} />
            </Routes>
        </Container>
    </main>
};

export default App;