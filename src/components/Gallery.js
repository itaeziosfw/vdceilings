import React, { useState } from "react";
import project1 from "../assets/images/project1.jpg.webp";
import project2 from "../assets/images/project2.jpg.webp";
import project3 from "../assets/images/project3.jpg.webp";
import project4 from "../assets/images/project4.jpg.webp";
import project5 from "../assets/images/project5.jpg.webp";
import project6 from "../assets/images/project6.jpg.webp";
import project7 from "../assets/images/project7.jpg.webp";
import project8 from "../assets/images/project8.jpg.webp";
import project9 from "../assets/images/project9.jpg.webp";
import project10 from "../assets/images/project10.jpg.webp";
import project11 from "../assets/images/project11.jpg.webp";
import project12 from "../assets/images/project12.jpg.webp";
import video1 from "../assets/videos/video1.mp4.mp4";
import video2 from "../assets/videos/video2.mp4.mp4";
import video3 from "../assets/videos/video3.mp4.mp4";
import video4 from "../assets/videos/video4.mp4.mp4";
import video5 from "../assets/videos/video5.mp4.mp4";


const projects = [
    { img: project1, alt: "Steel Frame construction project by V/D Ceilings Ireland" },
    { img: project2, alt: "Drywall partition project by V/D Ceilings Ireland" },
    { img: project3, alt: "MF Ceiling installation by V/D Ceilings Ireland" },
    { img: project4, alt: "Dry construction project by V/D Ceilings Ireland" },
    { img: project5, alt: "Insulation project by V/D Ceilings Ireland" },
    { img: project6, alt: "Commercial ceiling project by V/D Ceilings Ireland" },
    { img: project7, alt: "Residential drywall project by V/D Ceilings Ireland" },
    { img: project8, alt: "Steel Frame partition by V/D Ceilings Ireland" },
    { img: project9, alt: "MF Ceiling project by V/D Ceilings Ireland" },
    { img: project10, alt: "Drywall finishing by V/D Ceilings Ireland" },
    { img: project11, alt: "Dry construction finishing by V/D Ceilings Ireland" },
    { img: project12, alt: "Commercial partition project by V/D Ceilings Ireland" }
];

const videos = [video1, video2, video3, video4, video5];

export default function Gallery() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const nextVideo = () => {
        setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
    };

    const prevVideo = () => {
        setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length);
    };

    return (
        <section id="gallery" className="gallery">

            <h2>Our Projects</h2>

            <div className="carousel">
                <button className="carousel-btn prev" onClick={prevSlide} aria-label="Previous project">❮</button>
                <img
                    src={projects[currentIndex].img}
                    alt={projects[currentIndex].alt}
                    className="carousel-img"
                    width="900"
                    height="500"
                    loading={currentIndex === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                />
                <button className="carousel-btn next" onClick={nextSlide} aria-label="Next project">❯</button>
            </div>

            <div className="carousel-dots">
                {projects.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>

            <h2 style={{ marginTop: '80px' }}>Our Videos</h2>

            <div className="carousel">
                <button className="carousel-btn prev" onClick={prevVideo} aria-label="Previous video">❮</button>
                <video key={currentVideoIndex} controls className="carousel-video" title={`V/D Ceilings Video ${currentVideoIndex + 1}`}>
                    <source src={videos[currentVideoIndex]} type="video/mp4" />
                    <track kind="captions" srcLang="en" label="English" default />
                </video>
                <button className="carousel-btn next" onClick={nextVideo} aria-label="Next video">❯</button>
            </div>

            <div className="carousel-dots">
                {videos.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentVideoIndex ? 'active' : ''}`}
                        onClick={() => setCurrentVideoIndex(index)}
                    />
                ))}
            </div>

        </section>
    );
}