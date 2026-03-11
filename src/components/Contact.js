import React from "react";

export default function Contact() {
    return (
        <section id="contact" className="contact">

            <h2>Get in Touch</h2>

            <div className="contact-info">
                
                <div className="contact-item">
                    <span>📞</span>
                    <p>087 292 2619</p>
                </div>

                <div className="contact-item">
                    <span>📧</span>
                    <p>Victorsilva.artdecor@gmail.com</p>
                </div>

                <div className="contact-item">
                    <span>🕒</span>
                    <p>Mon - Fri: 08:00 - 17:00</p>
                </div>

            </div>

            <a
                className="whatsapp"
                href="https://wa.me/353872922619"
            >
                💬 Chat on WhatsApp
            </a>

        </section>
    );
}