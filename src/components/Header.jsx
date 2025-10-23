import React, { useState, useEffect } from "react";
import { Menu, X, Code, Users, MessageCircle, BookOpen } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <nav className="nav">
          <div className="nav-brand">
            <a href="#home" onClick={() => scrollToSection("home")}>
              <span className="brand-text">Sumukh Bhandarkar</span>
            </a>
          </div>

          <div className="nav-menu">
            <a
              href="#services"
              onClick={() => scrollToSection("services")}
              className="nav-link"
            >
              Services
            </a>
            <a
              href="#about"
              onClick={() => scrollToSection("about")}
              className="nav-link"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={() => scrollToSection("contact")}
              className="nav-link"
            >
              Contact
            </a>
            <button
              className="nav-cta"
              onClick={() => scrollToSection("contact")}
            >
              Get Started
            </button>
          </div>

          <button className="nav-toggle" onClick={toggleMenu}>
            <div className={`hamburger ${isMenuOpen ? "active" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </nav>

        <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
          <div className="mobile-menu-content">
            <div className="mobile-links">
              <a href="#services" onClick={() => scrollToSection("services")}>
                Services
              </a>
              <a href="#about" onClick={() => scrollToSection("about")}>
                About
              </a>
              <a href="#contact" onClick={() => scrollToSection("contact")}>
                Contact
              </a>
            </div>

            <button
              className="mobile-cta"
              onClick={() => scrollToSection("contact")}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all 0.3s ease;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        .header.scrolled {
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
        }

        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 0;
        }

        .nav-brand a {
          text-decoration: none;
          color: var(--text-dark);
        }

        .brand-text {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary-color);
        }

        .nav-menu {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          color: var(--text-dark);
          text-decoration: none;
          font-weight: 500;
          font-size: 1rem;
          transition: color 0.2s ease;
          position: relative;
        }

        .nav-link:hover {
          color: var(--primary-color);
        }

        .nav-link::after {
          content: "";
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary-color);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-cta {
          padding: 0.75rem 1.5rem;
          background: var(--gradient-primary);
          color: white;
          border: none;
          border-radius: 0.5rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .nav-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
        }

        .nav-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
        }

        .hamburger {
          width: 24px;
          height: 18px;
          position: relative;
        }

        .hamburger span {
          display: block;
          height: 2px;
          width: 100%;
          background: var(--text-dark);
          border-radius: 1px;
          position: absolute;
          transition: all 0.3s ease;
        }

        .hamburger span:nth-child(1) {
          top: 0;
        }

        .hamburger span:nth-child(2) {
          top: 50%;
          transform: translateY(-50%);
        }

        .hamburger span:nth-child(3) {
          bottom: 0;
        }

        .hamburger.active span:nth-child(1) {
          top: 50%;
          transform: translateY(-50%) rotate(45deg);
        }

        .hamburger.active span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.active span:nth-child(3) {
          bottom: 50%;
          transform: translateY(50%) rotate(-45deg);
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(10px);
          z-index: 999;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }

        .mobile-menu.open {
          opacity: 1;
          visibility: visible;
        }

        .mobile-menu-content {
          position: absolute;
          top: 0;
          right: 0;
          width: 300px;
          height: 100%;
          background: white;
          padding: 2rem;
          transform: translateX(100%);
          transition: transform 0.3s ease;
          box-shadow: -4px 0 20px rgba(0, 0, 0, 0.1);
        }

        .mobile-menu.open .mobile-menu-content {
          transform: translateX(0);
        }

        .mobile-links {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .mobile-links a {
          padding: 1rem 0;
          text-decoration: none;
          color: var(--text-dark);
          font-weight: 500;
          font-size: 1.1rem;
          border-bottom: 1px solid var(--border-color);
          transition: color 0.2s ease;
        }

        .mobile-links a:hover {
          color: var(--primary-color);
        }

        .mobile-cta {
          width: 100%;
          padding: 1rem;
          background: var(--gradient-primary);
          color: white;
          border: none;
          border-radius: 0.5rem;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .mobile-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
        }

        @media (max-width: 768px) {
          .nav-menu {
            display: none;
          }

          .nav-toggle {
            display: block;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
