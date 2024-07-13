import React from "react";
import './Footer.scss';

const Footer = () => {
    return (
        <div id="page-footer">
            <div className="footer-content">
                <div className="contact-info">
                    <p className="street">123 Main St.</p>
                    <p className="city-state-zip">Charlottesville, VA 22902</p>
                    <p className="phone">(434) 123-4567</p>
                    <p className="email">inquiries@tfphotog.com</p>
                </div>
                <img
                    src="https://raw.githubusercontent.com/bellamoss77/react-photog-portfolio/d044eb6386bfb3acad1a399c0895ecf0c00ebf09/public/UPDATED-LOGO.svg" 
                    height="60"
                    className="d-inline-block align-top" alt="Logo" 
                />
            </div>
        </div>
    );
};

export default Footer;