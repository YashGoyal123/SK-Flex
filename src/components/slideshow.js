// Slideshow.js
import React, { useState, useEffect } from 'react';
import './slideshow.css';

const images = [
  's1.jpeg',
  's5.avif',
  // 's4.jpg',
  's2.png',
  's3.jpg',
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Move to the next slide automatically every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  // Navigate manually
  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="slideshow">
      <img src={images[currentIndex]} alt="Slideshow" className="slide-image" />
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <button className="next" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default Slideshow;
