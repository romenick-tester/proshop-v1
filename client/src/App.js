import React from "react";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

import { Footer, Header } from "./layouts";
import * as Page from "./pages";
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
                <Route path="/" element={<Page.HomePage />} />
                <Route path="/product/:id" element={<Page.ProductDetailsPage />} />
                <Route path="/cart" element={<Page.CartPage />}>
                    <Route path=":id" element={<CartPageParams />} />
                </Route>
                <Route path="/signin" element={<Page.LoginPage />} />
                <Route path="/signup" element={<Page.RegisterPage />} />
                <Route path="/profile" element={<h1>Profile</h1>} />
            </Routes>
        </Container>
    </main>
};

export default App;