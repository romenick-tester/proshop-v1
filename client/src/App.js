import React from "react";
import { Container } from "react-bootstrap";
import { Footer, Header } from "./layouts";

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
            <h1>hello world!</h1>
        </Container>
    </main>
};

export default App;