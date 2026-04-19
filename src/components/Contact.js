import React, { useState } from "react";

export default function Contact() {
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('SENDING');
        const form = e.target;
        const data = new FormData(form);
        const res = await fetch('https://formspree.io/f/xaqpvkbw', {
            method: 'POST',
            headers: { 'Accept': 'application/json' },
            body: data
        });
        if (res.ok) {
            setStatus('SUCCESS');
            form.reset();
        } else {
            setStatus('FAILED');
        }
    };

    return (
        <section id="contact" className="contact">

            <h2>Get in Touch</h2>

            <div className="contact-info">

                <div className="contact-item">
                    <span>📞</span>
                    <p>087 962 1691</p>
                </div>

                <div className="contact-item">
                    <span>📧</span>
                    <p>Victorsilva.artdecor@gmail.com</p>
                    <p>djalmapassos544@gmail.com</p>
                </div>

                <div className="contact-item">
                    <span>🕒</span>
                    <p>Mon - Fri: 07:00 - 17:00</p>
                </div>

            </div>

            <form onSubmit={handleSubmit} className="contact-form">
                <input type="text" name="name" placeholder="Your name" required />
                <input type="email" name="email" placeholder="Your email" required />
                <textarea name="message" rows="5" placeholder="Your message" required />
                <button type="submit">
                    {status === 'SENDING' ? 'Sending...'
                        : status === 'SUCCESS' ? 'Sent ✅'
                            : status === 'FAILED' ? 'Error 😢'
                                : 'Send Message'}
                </button>
            </form>

            {status === 'SUCCESS' && <p className="form-success">Message sent successfully! 😊</p>}
            {status === 'FAILED' && <p className="form-error">Failed to send. Please try again.</p>}

            <a className="whatsapp" href="https://wa.me/353872922619">
                💬 Chat on WhatsApp
            </a>

        </section>
    );
}