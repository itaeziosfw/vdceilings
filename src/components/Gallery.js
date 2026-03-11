import React, { useState } from "react";
import project1 from "../assets/images/project1.jpg.jpeg";
import project2 from "../assets/images/project2.jpg.jpeg";
import project3 from "../assets/images/project3.jpg.jpeg";
import project4 from "../assets/images/project4.jpg.jpeg";
import project5 from "../assets/images/project5.jpg.jpeg";
import project6 from "../assets/images/project6.jpg.jpeg";
import project7 from "../assets/images/project7.jpg.jpeg";
import project8 from "../assets/images/project8.jpg.jpeg";
import project9 from "../assets/images/project9.jpg.jpeg";
import project10 from "../assets/images/project10.jpg.jpeg";
import project11 from "../assets/images/project11.jpg.jpeg";
import project12 from "../assets/images/project12.jpg.jpeg";
import video1 from "../assets/videos/video1.mp4.mp4";
import video2 from "../assets/videos/video2.mp4.mp4";
import video3 from "../assets/videos/video3.mp4.mp4";

const projects = [
    project1, project2, project3, project4, project5, project6,
    project7, project8, project9, project10, project11, project12
];

const videos = [video1, video2, video3];

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
                <button className="carousel-btn prev" onClick={prevSlide}>❮</button>
                <img src={projects[currentIndex]} alt="Project" className="carousel-img" />
                <button className="carousel-btn next" onClick={nextSlide}>❯</button>
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
                <button className="carousel-btn prev" onClick={prevVideo}>❮</button>
                <video key={currentVideoIndex} controls className="carousel-video">
                    <source src={videos[currentVideoIndex]} type="video/mp4" />
                </video>
                <button className="carousel-btn next" onClick={nextVideo}>❯</button>
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