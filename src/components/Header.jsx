import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Sparkles,
  Zap,
  Code,
  Users,
  MessageCircle,
  BookOpen,
} from "lucide-react";

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

  const services = [
    { icon: Code, label: "Freelancing", emoji: "💼" },
    { icon: Users, label: "Mentorship", emoji: "🚀" },
    { icon: MessageCircle, label: "Interviews", emoji: "🎯" },
    { icon: BookOpen, label: "Learning", emoji: "📚" },
  ];

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-background"></div>
      <div className="container">
        <nav className="nav">
          <div className="nav-brand">
            <a href="#home" onClick={() => scrollToSection("home")}>
              <div className="brand-icon">
                <Sparkles size={20} />
              </div>
              <span className="brand-text">Sumukh</span>
            </a>
          </div>

          <div className="nav-center">
            <div className="nav-services">
              {services.map((service, index) => (
                <button
                  key={index}
                  className="nav-service-btn"
                  onClick={() => scrollToSection("services")}
                >
                  <span className="service-emoji">{service.emoji}</span>
                  <span className="service-label">{service.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="nav-actions">
            <button
              className="nav-cta"
              onClick={() => scrollToSection("contact")}
            >
              <Zap size={16} />
              Let's Talk
            </button>

            <button className="nav-toggle" onClick={toggleMenu}>
              <div className={`hamburger ${isMenuOpen ? "active" : ""}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
        </nav>

        <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
          <div className="mobile-menu-content">
            <div className="mobile-services">
              {services.map((service, index) => (
                <button
                  key={index}
                  className="mobile-service"
                  onClick={() => scrollToSection("services")}
                >
                  <service.icon size={24} />
                  <span>{service.label}</span>
                </button>
              ))}
            </div>

            <div className="mobile-links">
              <a href="#about" onClick={() => scrollToSection("about")}>
                About Me
              </a>
              <a href="#contact" onClick={() => scrollToSection("contact")}>
                Contact
              </a>
            </div>

            <button
              className="mobile-cta"
              onClick={() => scrollToSection("contact")}
            >
              <Zap size={20} />
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
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .header.scrolled {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(30px);
          border-bottom: 1px solid var(--glass-border);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .header-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            90deg,
            rgba(99, 102, 241, 0.1) 0%,
            rgba(139, 92, 246, 0.1) 50%,
            rgba(236, 72, 153, 0.1) 100%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .header:hover .header-background {
          opacity: 1;
        }

        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 0;
          position: relative;
          z-index: 2;
        }

        .nav-brand {
          display: flex;
          align-items: center;
        }

        .nav-brand a {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          color: var(--text-dark);
          font-weight: 700;
          font-size: 1.25rem;
          transition: all 0.3s ease;
        }

        .nav-brand a:hover {
          transform: scale(1.05);
        }

        .brand-icon {
          width: 2.5rem;
          height: 2.5rem;
          background: var(--gradient-primary);
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
        }

        .brand-text {
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nav-center {
          flex: 1;
          display: flex;
          justify-content: center;
        }

        .nav-services {
          display: flex;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 2rem;
          padding: 0.5rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .nav-service-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          background: transparent;
          border: none;
          border-radius: 1.5rem;
          color: var(--text-dark);
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .nav-service-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--gradient-primary);
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 1.5rem;
        }

        .nav-service-btn:hover::before {
          opacity: 0.1;
        }

        .nav-service-btn:hover {
          transform: translateY(-2px);
          color: var(--primary-color);
        }

        .service-emoji {
          font-size: 1rem;
          position: relative;
          z-index: 2;
        }

        .service-label {
          font-size: 0.875rem;
          position: relative;
          z-index: 2;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .nav-cta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: var(--gradient-primary);
          color: white;
          border: none;
          border-radius: 2rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
        }

        .nav-cta:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 8px 24px rgba(99, 102, 241, 0.4);
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
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(20px);
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
          width: 320px;
          height: 100%;
          background: var(--background-white);
          padding: 2rem;
          transform: translateX(100%);
          transition: transform 0.3s ease;
          overflow-y: auto;
        }

        .mobile-menu.open .mobile-menu-content {
          transform: translateX(0);
        }

        .mobile-services {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .mobile-service {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          padding: 1.5rem;
          background: var(--background-light);
          border: none;
          border-radius: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .mobile-service:hover {
          background: var(--primary-color);
          color: white;
          transform: translateY(-4px);
        }

        .mobile-links {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .mobile-links a {
          padding: 1rem;
          background: var(--background-light);
          border-radius: 1rem;
          text-decoration: none;
          color: var(--text-dark);
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .mobile-links a:hover {
          background: var(--primary-color);
          color: white;
        }

        .mobile-cta {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 1rem;
          background: var(--gradient-primary);
          color: white;
          border: none;
          border-radius: 1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .mobile-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(99, 102, 241, 0.4);
        }

        @media (max-width: 1024px) {
          .nav-services {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .nav-center {
            display: none;
          }

          .nav-cta {
            display: none;
          }

          .nav-toggle {
            display: block;
          }

          .mobile-menu-content {
            width: 280px;
          }

          .mobile-services {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
