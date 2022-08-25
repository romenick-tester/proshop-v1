import React from "react";
import { Container } from "react-bootstrap";
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
            <HomePage />
        </Container>
    </main>
};

export default App;