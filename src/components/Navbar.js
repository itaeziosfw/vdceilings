import React, { useState } from "react";
import logo from "../assets/images/logovd.jpg";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen((prev) => !prev);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="navbar">
            <img src={logo} alt="V/D Ceilings" className="logo" />

            <button
                className={`hamburger ${isOpen ? "open" : ""}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
            >
                <span />
                <span />
                <span />
            </button>

            <div className={`links ${isOpen ? "open" : ""}`}>
                <a href="#about" onClick={closeMenu}>About</a>
                <a href="#services" onClick={closeMenu}>Services</a>
                <a href="#gallery" onClick={closeMenu}>Projects</a>
                <a href="#contact" onClick={closeMenu}>Contact</a>
            </div>
        </nav>
    );
}
