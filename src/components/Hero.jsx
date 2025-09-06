import React from 'react';
import { ArrowRight, Code, Users, BookOpen, MessageCircle } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Expert Consulting & Mentorship for
              <span className="gradient-text"> Developers & Students</span>
            </h1>
            <p className="hero-description">
              Transform your career with personalized guidance, technical expertise, 
              and industry insights. From freelancing opportunities to mock interviews, 
              I'm here to accelerate your success.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary btn-large" onClick={scrollToContact}>
                Start Your Journey
                <ArrowRight size={20} />
              </button>
              <button className="btn btn-secondary btn-large" onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>
                Explore Services
              </button>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="hero-cards">
              <div className="hero-card">
                <Code className="hero-icon" />
                <span>Freelancing</span>
              </div>
              <div className="hero-card">
                <Users className="hero-icon" />
                <span>Mentorship</span>
              </div>
              <div className="hero-card">
                <MessageCircle className="hero-icon" />
                <span>Mock Interviews</span>
              </div>
              <div className="hero-card">
                <BookOpen className="hero-icon" />
                <span>Learning Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .hero {
          padding: 8rem 0 5rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          position: relative;
          overflow: hidden;
        }
        
        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
          opacity: 0.3;
        }
        
        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          position: relative;
          z-index: 1;
        }
        
        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hero-description {
          font-size: 1.25rem;
          line-height: 1.7;
          margin-bottom: 2rem;
          opacity: 0.9;
        }
        
        .hero-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        
        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .hero-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          max-width: 400px;
        }
        
        .hero-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 1rem;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
          animation: float 6s ease-in-out infinite;
        }
        
        .hero-card:nth-child(2) {
          animation-delay: -2s;
        }
        
        .hero-card:nth-child(3) {
          animation-delay: -4s;
        }
        
        .hero-card:nth-child(4) {
          animation-delay: -6s;
        }
        
        .hero-card:hover {
          transform: translateY(-10px);
          background: rgba(255, 255, 255, 0.2);
        }
        
        .hero-icon {
          width: 3rem;
          height: 3rem;
          margin-bottom: 1rem;
          color: var(--accent-color);
        }
        
        .hero-card span {
          font-weight: 600;
          font-size: 1.1rem;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @media (max-width: 768px) {
          .hero {
            padding: 6rem 0 3rem;
          }
          
          .hero-content {
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: center;
          }
          
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-description {
            font-size: 1.1rem;
          }
          
          .hero-buttons {
            justify-content: center;
          }
          
          .hero-cards {
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
          }
          
          .hero-card {
            padding: 1.5rem;
          }
          
          .hero-icon {
            width: 2.5rem;
            height: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
