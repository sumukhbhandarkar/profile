import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="nav-brand">
            <a href="#home" onClick={() => scrollToSection('home')}>
              <span className="brand-text">Sumukh Bhandarkar</span>
            </a>
          </div>
          
          <div className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
            <a href="#services" onClick={() => scrollToSection('services')} className="nav-link">
              Services
            </a>
            <a href="#about" onClick={() => scrollToSection('about')} className="nav-link">
              About
            </a>
            <a href="#contact" onClick={() => scrollToSection('contact')} className="nav-link">
              Contact
            </a>
            <a href="#contact" onClick={() => scrollToSection('contact')} className="btn btn-primary">
              Get Started
            </a>
          </div>
          
          <button className="nav-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>
      
      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border-color);
          z-index: 1000;
          transition: all 0.3s ease;
        }
        
        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 0;
        }
        
        .nav-brand .brand-text {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary-color);
          text-decoration: none;
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
          transition: color 0.2s ease;
        }
        
        .nav-link:hover {
          color: var(--primary-color);
        }
        
        .nav-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--text-dark);
        }
        
        @media (max-width: 768px) {
          .nav-menu {
            position: fixed;
            top: 100%;
            left: 0;
            right: 0;
            background: var(--background-white);
            flex-direction: column;
            padding: 2rem;
            box-shadow: var(--shadow-lg);
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
          }
          
          .nav-menu-open {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
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
