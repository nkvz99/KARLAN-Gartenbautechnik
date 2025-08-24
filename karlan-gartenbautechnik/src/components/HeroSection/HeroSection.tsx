import "./HeroSection.css";
import hero1 from "../../assets/hero/hero1.jpg";
import hero2 from "../../assets/hero/hero2.jpg";
import hero3 from "../../assets/hero/hero3.jpg";
import { useState, useEffect } from "react";

const images = [hero1, hero2, hero3];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-container">
      {images.map((img, index) => (
        <div
          key={index}
          className={`slide ${index === current ? "active" : "inactive"}`}
        >
          <img src={img} alt={`Hero ${index}`} className="image" />
          <div className="overlay">
            <h1 className="title">
              Transform Your Outdoor Space Into a Masterpiece
            </h1>
            <div className="blur-container">
              <p className="description">
                Crafting beautiful and sustainable landscapes tailored to your
                dreams.
              </p>
              <button className="button">Get Your Free Quote</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}