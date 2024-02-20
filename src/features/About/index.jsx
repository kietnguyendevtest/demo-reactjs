import React from "react";
import { Link } from "react-router-dom";

function About() {
    return (
        <>
            <h1>About page</h1>
            <Link to="/" className="btn btn-outline-secondary btn-sm">
                <i className="fa-solid fa-arrow-left-long"></i> Go home page
            </Link>
        </>
    );
}

export default About;
