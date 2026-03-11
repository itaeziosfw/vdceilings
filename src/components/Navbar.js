import React from "react";
import logo from "../assets/images/logovd.jpg";

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo} alt="V/D Ceilings" className="logo" />

            <div className="links">
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#gallery">Projects</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    );
}