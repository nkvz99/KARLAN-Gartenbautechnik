import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import "./Navbar.css";
import logo from "../../assets/logo/KAR-LAN_PNG.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration:500,
      smooth:true
    });
  };

  return (
    <nav className="navbar" id="home">
       

      <div className="navbar-container">
         <img src={logo} alt="KAR-LAN Logo" className="logo" />
        <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <li>
            <ScrollLink to="top" smooth duration={500} offset={-130} onClick={() => scrollToTop()}>Homepage</ScrollLink>
          </li>
          <li>
            <ScrollLink to="services" smooth duration={500} offset={-130} onClick={() => setMenuOpen(false)}>Services</ScrollLink>
          </li>
          <li>
            <ScrollLink to="about" smooth duration={500} offset={-130} onClick={() => setMenuOpen(false)}>About Us</ScrollLink>
          </li>
          <li>
            <ScrollLink to="reviews" smooth duration={500} offset={-130} onClick={() => setMenuOpen(false)}>Reviews</ScrollLink>
          </li>
          <li>
            <ScrollLink to="contact" smooth duration={500} offset={-130} onClick={() => setMenuOpen(false)}>Contact</ScrollLink>
          </li>

          <li className="mobile-only book-consultation-mobile">
            <ScrollLink to="book" smooth duration={500} offset={-130} onClick={() => setMenuOpen(false)}>
              Book Consultation
            </ScrollLink>
          </li>
        </ul>
        <div className="navbar-button desktop-only">
          <ScrollLink to="book" smooth duration={500} offset={-130} onClick={() => setMenuOpen(false)}>
            Book Consultation
          </ScrollLink>
        </div>
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
