import React from "react";
import {
  ArrowRight,
  Code,
  Users,
  BookOpen,
  MessageCircle,
  Sparkles,
  Zap,
} from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-particles"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <Sparkles size={16} />
              <span>Level Up Your Career</span>
            </div>

            <h1 className="hero-title">
              Hey there! 👋
              <br />
              I'm <span className="gradient-text">Sumukh</span>
              <br />
              Your <span className="neon-text">Tech Mentor</span>
            </h1>

            <p className="hero-description">
              Ready to break into tech? I help developers and students land
              their dream jobs, master new skills, and build amazing projects.
              Let's make it happen! 🚀
            </p>

            <div className="hero-buttons">
              <button
                className="btn btn-primary btn-large"
                onClick={scrollToContact}
              >
                <Zap size={20} />
                Let's Get Started
                <ArrowRight size={20} />
              </button>
              <button
                className="btn btn-secondary btn-large"
                onClick={() =>
                  document
                    .getElementById("services")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Check Out My Services
              </button>
            </div>

            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Students Helped</span>
              </div>
              <div className="stat">
                <span className="stat-number">95%</span>
                <span className="stat-label">Success Rate</span>
              </div>
              <div className="stat">
                <span className="stat-number">8+</span>
                <span className="stat-label">Years Experience</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-cards">
              <div className="hero-card floating-card-1">
                <div className="card-icon">
                  <Code className="hero-icon" />
                </div>
                <span>Freelancing</span>
                <div className="card-glow"></div>
              </div>
              <div className="hero-card floating-card-2">
                <div className="card-icon">
                  <Users className="hero-icon" />
                </div>
                <span>Mentorship</span>
                <div className="card-glow"></div>
              </div>
              <div className="hero-card floating-card-3">
                <div className="card-icon">
                  <MessageCircle className="hero-icon" />
                </div>
                <span>Mock Interviews</span>
                <div className="card-glow"></div>
              </div>
              <div className="hero-card floating-card-4">
                <div className="card-icon">
                  <BookOpen className="hero-icon" />
                </div>
                <span>Learning</span>
                <div className="card-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          position: relative;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: var(--background-dark);
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
        }

        .hero-gradient {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(
              ellipse at top,
              rgba(99, 102, 241, 0.3) 0%,
              transparent 50%
            ),
            radial-gradient(
              ellipse at bottom,
              rgba(139, 92, 246, 0.3) 0%,
              transparent 50%
            ),
            radial-gradient(
              ellipse at right,
              rgba(236, 72, 153, 0.2) 0%,
              transparent 50%
            );
        }

        .hero-particles {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: radial-gradient(
              circle at 20% 80%,
              rgba(255, 0, 110, 0.3) 0%,
              transparent 50%
            ),
            radial-gradient(
              circle at 80% 20%,
              rgba(0, 245, 255, 0.3) 0%,
              transparent 50%
            ),
            radial-gradient(
              circle at 40% 40%,
              rgba(131, 56, 236, 0.2) 0%,
              transparent 50%
            );
          animation: particleFloat 20s ease-in-out infinite;
        }

        @keyframes particleFloat {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          position: relative;
          z-index: 2;
          padding: 2rem 0;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--glass-bg);
          backdrop-filter: blur(20px);
          border: 1px solid var(--glass-border);
          border-radius: 2rem;
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--accent-color);
          margin-bottom: 1.5rem;
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: white;
        }

        .gradient-text {
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .neon-text {
          background: var(--gradient-neon);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 0 30px rgba(255, 0, 110, 0.5);
        }

        .hero-description {
          font-size: 1.25rem;
          line-height: 1.7;
          margin-bottom: 2.5rem;
          color: rgba(255, 255, 255, 0.8);
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .hero-stats {
          display: flex;
          gap: 2rem;
        }

        .stat {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 900;
          color: var(--accent-color);
          line-height: 1;
        }

        .stat-label {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.7);
          font-weight: 500;
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
          background: var(--glass-bg);
          backdrop-filter: blur(20px);
          border: 1px solid var(--glass-border);
          border-radius: 1.5rem;
          padding: 2rem;
          text-align: center;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .card-icon {
          width: 4rem;
          height: 4rem;
          background: var(--gradient-primary);
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          position: relative;
          z-index: 2;
        }

        .hero-icon {
          width: 2rem;
          height: 2rem;
          color: white;
        }

        .hero-card span {
          font-weight: 700;
          font-size: 1.1rem;
          color: white;
          position: relative;
          z-index: 2;
        }

        .card-glow {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: var(--gradient-neon);
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 50%;
          filter: blur(20px);
        }

        .hero-card:hover .card-glow {
          opacity: 0.1;
        }

        .hero-card:hover {
          transform: translateY(-10px) scale(1.05);
          border-color: var(--primary-color);
        }

        .floating-card-1 {
          animation: float 6s ease-in-out infinite;
        }

        .floating-card-2 {
          animation: float 6s ease-in-out infinite -2s;
        }

        .floating-card-3 {
          animation: float 6s ease-in-out infinite -4s;
        }

        .floating-card-4 {
          animation: float 6s ease-in-out infinite -6s;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @media (max-width: 768px) {
          .hero {
            min-height: auto;
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

          .hero-stats {
            justify-content: center;
          }

          .hero-cards {
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
          }

          .hero-card {
            padding: 1.5rem;
          }

          .card-icon {
            width: 3rem;
            height: 3rem;
          }

          .hero-icon {
            width: 1.5rem;
            height: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
