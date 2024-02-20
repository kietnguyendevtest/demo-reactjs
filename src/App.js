import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/fonts/FontAwesome6/css/all.css";
import "./assets/scss/main.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Toastify from "./components/Toastify";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./features/Home";
import About from "./features/About";
import Contact from "./features/Contact";
import Books from "./features/Books";

function App() {
    return (
        <BrowserRouter>
            <Header />

            <div className="main-content">
                <Container>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/about" element={<About />}></Route>
                        <Route path="/contact" element={<Contact />}></Route>
                        <Route path="/books" element={<Books />}></Route>
                    </Routes>
                </Container>
            </div>

            <Footer />

            <Toastify />
        </BrowserRouter>
    );
}

export default App;
