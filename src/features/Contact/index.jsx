import React from "react";
import { Link } from "react-router-dom";

function Contact() {
    return (
        <>
            <h1>Contact page</h1>
            <Link to="/" className="btn btn-outline-secondary btn-sm">
                <i className="fa-solid fa-arrow-left-long"></i> Go home page
            </Link>
        </>
    );
}

export default Contact;
