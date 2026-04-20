import React from "react";

import imgSteelFrame from "../assets/images/project11.jpg.jpeg";
import imgDryConstruct from "../assets/images/project9.jpg.jpeg";
import imgMFCeilings from "../assets/images/project17.jpg.jpeg";
import imgPartitions from "../assets/images/project10.jpg.jpeg";
import imgInsulation from "../assets/images/project15.jpg.jpeg";

const services = [
    {
        title: "Steel Frame",
        image: imgSteelFrame,
        paragraphs: [
            "Light Gauge Steel Framing is a revolutionary dry construction system that prioritizes structural precision and industrial efficiency over traditional methods. By utilizing cold-formed galvanized steel profiles, this technology enables architects to execute complex designs with millimetric accuracy while cutting construction timelines by more than half. This streamlined workflow eliminates on-site waste, ensuring a cleaner, more organized, and highly predictable building environment for modern developers.",
        ],
    },
    {
        title: "Dry Construction",
        image: imgDryConstruct,
        paragraphs: [
            "The benefits extend far beyond speed, offering a significant reduction in structural weight and a massive decrease in construction waste. These systems provide exceptional versatility for interior layouts, allowing for easy maintenance and future renovations without the mess of conventional demolition. Furthermore, the intelligent layering of materials creates a powerful thermal and acoustic barrier, resulting in energy-efficient buildings that prioritize occupant comfort and long-term sustainability.",
        ],
    },
    {
        title: "MF Ceilings",
        image: imgMFCeilings,
        paragraphs: [
            "This service includes a variety of options, from simple and elegant designs to intricate, custom-made features, integrating advanced materials for durability, fire resistance, and acoustic management.",
            "It focuses on creating visually appealing spaces that also contribute to the energy efficiency and comfort of the environment through careful material selection and the integration of lighting and insulation.",

        ],
    },
    {
        title: "Partitions",
        image: imgPartitions,
        paragraphs: [
            "This service caters to both commercial and residential settings, offering solutions that range from fixed, permanent walls to flexible, movable panels.",
            "The versatility of partitions allows for the creation of distinct areas within a larger space, such as workstations in offices, private rooms in homes, or secluded areas in retail environments, without the need for structural alterations to the building.",
        ],
    },
    {
        title: "Airtight Solutions",
        image: imgInsulation,
        paragraphs: [
            "Implementing airtight solutions requires a meticulous approach, combining advanced technology and materials with skilled workmanship. ",
            "Solutions are customized to the specific needs and structure of the building, taking into consideration factors like building materials, architectural features, and the local climate.",
            "The goal is to achieve an optimal balance between airtightness and ventilation, enhancing the building's energy performance and occupant comfort.",

        ],
    },
];

const styles = {
    section: {
        backgroundColor: "#0e66ad",
        padding: "60px 40px",
        fontFamily: "'Segoe UI', Arial, sans-serif",
    },
    heading: {
        textAlign: "center",
        fontSize: "2rem",
        fontWeight: "700",
        marginBottom: "48px",
        marginTop: "0",
        color: "#111",
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "24px",
        maxWidth: "1200px",
        margin: "0 auto",
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: "4px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
    },
    cardImage: {
        width: "100%",
        height: "220px",
        objectFit: "cover",
        display: "block",
    },
    cardBody: {
        padding: "28px 28px 40px",
        flex: 1,
    },
    cardTitle: {
        fontSize: "1.2rem",
        fontWeight: "700",
        color: "#111",
        marginBottom: "16px",
        marginTop: "0",
    },
    cardText: {
        fontSize: "0.93rem",
        color: "#444",
        lineHeight: "1.75",
        marginBottom: "12px",
        marginTop: "0",
    },
};

export default function Services() {
    return (
        <section id="services" style={styles.section}>
            <h2 style={styles.heading}>Our Services</h2>
            <div style={styles.grid}>
                {services.map((service, index) => (
                    <div style={styles.card} key={index}>
                        <img
                            src={service.image}
                            alt={service.title}
                            style={styles.cardImage}
                        />
                        <div style={styles.cardBody}>
                            <h3 style={styles.cardTitle}>{service.title}</h3>
                            {service.paragraphs.map((para, i) => (
                                <p key={i} style={styles.cardText}>{para}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}