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
                <Route path="/test2/:id" element={<ParamTesting />} />
            </Routes>
        </Container>
    </main>
};

const ParamTesting = () => {
    const { id } = useParams();

    return (
        <>
            <h1>Param Testing</h1>
            <p>result: {id}</p>
        </>
    )
};

export default App;