import React from "react";

const services = [
    {
        title: "Steel Frame",
        icon: "🏗️",
        text: "Light and resistant metal structures for fast and sustainable construction."
    },
    {
        title: "Dry Construction",
        icon: "🔨",
        text: "Dry construction with advanced technology and impeccable finishing."
    },
    {
        title: "MF Ceilings",
        icon: "📐",
        text: "Modular metal ceilings with acoustic and thermal insulation."
    },
    {
        title: "Partitions",
        icon: "🧱",
        text: "Drywall partitions for commercial and residential environments."
    },
    {
        title: "Insulation",
        icon: "🛡️",
        text: "High performance thermal and acoustic insulation."
    }
];

export default function Services() {
    return (
        <section id="services" className="services">

            <h2>Our Services</h2>

            <div className="service-grid">

                {services.map((service, index) => (
                    <div className="service-card" key={index}>

                        <div className="service-icon">{service.icon}</div>

                        <h3>{service.title}</h3>

                        <p>{service.text}</p>

                    </div>
                ))}

            </div>
        </section>
    );
}