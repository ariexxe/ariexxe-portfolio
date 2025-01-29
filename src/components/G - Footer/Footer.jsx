import React from "react";
import "./Footer.css"
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTiktok, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <h3 className="footer-title">Ari</h3>
                    <p className="footer-description">
                        Web Designer and Developer based in the Philippines, specializing in web designing.
                    </p>
                </div>
                <div className="footer-right">
                    <form className="footer-form">
                        <input
                            type="email"
                            placeholder="Enter Email"
                            className="footer-input"
                        />
                        <button
                            type="submit"
                            className="footer-button"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
            <div className="footer-bottom">
                <p className="footer-copy">
                    &copy; {new Date().getFullYear()} Ari. All rights reserved.
                </p>
                <div className="footer-socials">
                    <a href="#" className="footer-icon">
                        <FaFacebook />
                    </a>
                    <a href="#" className="footer-icon">
                        <FaTiktok />
                    </a>
                    <a href="#" className="footer-icon">
                        <FaInstagram />
                    </a>
                    <a href="#" className="footer-icon">
                        <FaLinkedin />
                    </a>
                    <a href="#" className="footer-icon">
                        <FaTwitter />
                    </a>
                    <a href="#" className="footer-icon">
                        <FaGithub />
                    </a>
                </div>
                <div className="footer-links">
                    <a href="#" className="footer-link">
                        Privacy
                    </a>
                    <a href="#" className="footer-link">
                        Terms of Service
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
