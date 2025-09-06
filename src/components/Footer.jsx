import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/sumukhbhandarkar"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://linkedin.com/in/sumukhbhandarkar"
    },
    {
      icon: Twitter,
      label: "Twitter",
      url: "https://twitter.com/sumukhbhandarkar"
    },
    {
      icon: Mail,
      label: "Email",
      url: "mailto:sumukh@example.com"
    }
  ];

  const quickLinks = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Sumukh Bhandarkar</h3>
            <p>
              Empowering developers and students through expert consulting, 
              mentorship, and technical guidance.
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href.substring(1));
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-services">
            <h4>Services</h4>
            <ul>
              <li>Freelancing Opportunities</li>
              <li>Technical Mentorship</li>
              <li>Mock Interviews</li>
              <li>Learning Support</li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Get In Touch</h4>
            <p>Ready to start your journey?</p>
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
            </button>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Sumukh Bhandarkar. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .footer {
          background: var(--text-dark);
          color: white;
          padding: 3rem 0 0;
        }
        
        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 2rem;
        }
        
        .footer-brand h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: white;
        }
        
        .footer-brand p {
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          color: rgba(255, 255, 255, 0.8);
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
        }
        
        .social-link {
          width: 2.5rem;
          height: 2.5rem;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        
        .social-link:hover {
          background: var(--primary-color);
          transform: translateY(-2px);
        }
        
        .footer-links h4,
        .footer-services h4,
        .footer-contact h4 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: white;
        }
        
        .footer-links ul,
        .footer-services ul {
          list-style: none;
        }
        
        .footer-links li,
        .footer-services li {
          margin-bottom: 0.5rem;
        }
        
        .footer-links a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        
        .footer-links a:hover {
          color: var(--primary-color);
        }
        
        .footer-services li {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.95rem;
        }
        
        .footer-contact p {
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 1rem;
        }
        
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 1.5rem 0;
        }
        
        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }
        
        .footer-bottom p {
          color: rgba(255, 255, 255, 0.6);
          margin: 0;
        }
        
        .footer-bottom-links {
          display: flex;
          gap: 2rem;
        }
        
        .footer-bottom-links a {
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.2s ease;
        }
        
        .footer-bottom-links a:hover {
          color: var(--primary-color);
        }
        
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }
          
          .social-links {
            justify-content: center;
          }
          
          .footer-bottom-content {
            flex-direction: column;
            text-align: center;
          }
          
          .footer-bottom-links {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
