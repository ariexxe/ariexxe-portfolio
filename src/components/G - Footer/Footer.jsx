import React from "react";
import "./Footer.css"
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaLinkedin, FaTiktok, FaTwitter } from "react-icons/fa";

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
                    <a href="https://www.facebook.com/princess.manatiga" className="footer-icon" target="_blank" rel="noopener noreferrer">
                        <FaFacebook />
                    </a>
                    <a href="https://www.tiktok.com/@arie_xxe" className="footer-icon" target="_blank" rel="noopener noreferrer">
                        <FaTiktok />
                    </a>
                    <a href="https://www.instagram.com/arie_xxe/" className="footer-icon" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>                    
                    <a href="https://x.com/arie_xxe" className="footer-icon" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </a>
                    <a href="https://mail.google.com/mail/u/1/#inbox" className="footer-icon" target="_blank" rel="noopener noreferrer">
                        <FaGoogle/>
                    </a>
                    <a href="https://github.com/ariexxe" className="footer-icon" target="_blank" rel="noopener noreferrer">
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
