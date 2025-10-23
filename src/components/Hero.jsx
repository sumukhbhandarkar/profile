import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  Code,
  Users,
  BookOpen,
  MessageCircle,
  Sparkles,
  Zap,
  Terminal,
  Cpu,
  Database,
  GitBranch,
  Code2,
  Rocket,
  Brain,
  Target,
  TrendingUp,
} from "lucide-react";

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const techRoles = [
    "Full-Stack Developer",
    "Tech Mentor",
    "Code Architect",
    "System Designer",
    "DevOps Engineer",
    "AI Enthusiast",
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % techRoles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

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
        <div className="hero-grid"></div>
        <div className="hero-code-lines"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <Terminal size={16} />
              <span>sudo apt-get install success</span>
            </div>

            <h1 className="hero-title">
              <span className="hero-greeting">Hello, World!</span>
              <br />
              <span className="hero-name">
                I'm <span className="gradient-text">Sumukh</span>
              </span>
              <br />
              <div className="typing-container">
                <span className="typing-text">{techRoles[currentText]}</span>
                <span className="typing-cursor">|</span>
              </div>
            </h1>

            <p className="hero-description">
              Transforming code into careers, debugging dreams into reality. I
              architect digital solutions and mentor the next generation of
              developers. Ready to level up your tech game?
              <span className="highlight">
                Let's build something amazing together.
              </span>
            </p>

            <div className="hero-buttons">
              <button
                className="btn btn-primary btn-large"
                onClick={scrollToContact}
              >
                <Rocket size={20} />
                <span>Initialize Project</span>
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
                <Code2 size={20} />
                View Services
              </button>
            </div>

            <div className="hero-stats">
              <div className="stat">
                <div className="stat-icon">
                  <Users size={24} />
                </div>
                <div className="stat-content">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Developers Mentored</span>
                </div>
              </div>
              <div className="stat">
                <div className="stat-icon">
                  <Target size={24} />
                </div>
                <div className="stat-content">
                  <span className="stat-number">95%</span>
                  <span className="stat-label">Success Rate</span>
                </div>
              </div>
              <div className="stat">
                <div className="stat-icon">
                  <TrendingUp size={24} />
                </div>
                <div className="stat-content">
                  <span className="stat-number">8+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="tech-stack">
              <div className="tech-item tech-item-1">
                <div className="tech-icon">
                  <Code size={32} />
                </div>
                <span>React</span>
                <div className="tech-glow"></div>
              </div>
              <div className="tech-item tech-item-2">
                <div className="tech-icon">
                  <Database size={32} />
                </div>
                <span>Node.js</span>
                <div className="tech-glow"></div>
              </div>
              <div className="tech-item tech-item-3">
                <div className="tech-icon">
                  <Cpu size={32} />
                </div>
                <span>Python</span>
                <div className="tech-glow"></div>
              </div>
              <div className="tech-item tech-item-4">
                <div className="tech-icon">
                  <GitBranch size={32} />
                </div>
                <span>DevOps</span>
                <div className="tech-glow"></div>
              </div>
              <div className="tech-item tech-item-5">
                <div className="tech-icon">
                  <Brain size={32} />
                </div>
                <span>AI/ML</span>
                <div className="tech-glow"></div>
              </div>
              <div className="tech-item tech-item-6">
                <div className="tech-icon">
                  <Terminal size={32} />
                </div>
                <span>Cloud</span>
                <div className="tech-glow"></div>
              </div>
            </div>

            <div className="floating-elements">
              <div className="floating-code">
                <pre>{`const mentor = {
  name: "Sumukh",
  skills: ["React", "Node.js", "Python"],
  passion: "Teaching",
  motto: "Code with Purpose"
};`}</pre>
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
          background: #0a0a0a;
          background-image: radial-gradient(
              circle at 20% 80%,
              rgba(120, 119, 198, 0.3) 0%,
              transparent 50%
            ),
            radial-gradient(
              circle at 80% 20%,
              rgba(255, 119, 198, 0.3) 0%,
              transparent 50%
            ),
            radial-gradient(
              circle at 40% 40%,
              rgba(120, 219, 255, 0.2) 0%,
              transparent 50%
            );
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
          background: linear-gradient(
            135deg,
            rgba(99, 102, 241, 0.1) 0%,
            rgba(139, 92, 246, 0.1) 25%,
            rgba(236, 72, 153, 0.1) 50%,
            rgba(0, 245, 255, 0.1) 75%,
            rgba(99, 102, 241, 0.1) 100%
          );
          animation: gradientShift 10s ease-in-out infinite;
        }

        .hero-grid {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: linear-gradient(
              rgba(255, 255, 255, 0.03) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.03) 1px,
              transparent 1px
            );
          background-size: 50px 50px;
          animation: gridMove 20s linear infinite;
        }

        .hero-code-lines {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: linear-gradient(
              45deg,
              transparent 48%,
              rgba(0, 255, 255, 0.1) 49%,
              rgba(0, 255, 255, 0.1) 51%,
              transparent 52%
            ),
            linear-gradient(
              -45deg,
              transparent 48%,
              rgba(255, 0, 255, 0.1) 49%,
              rgba(255, 0, 255, 0.1) 51%,
              transparent 52%
            );
          background-size: 100px 100px;
          animation: codeLines 15s linear infinite;
        }

        @keyframes gradientShift {
          0%,
          100% {
            transform: translateX(0) translateY(0);
          }
          25% {
            transform: translateX(-10px) translateY(-10px);
          }
          50% {
            transform: translateX(10px) translateY(-5px);
          }
          75% {
            transform: translateX(-5px) translateY(10px);
          }
        }

        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }

        @keyframes codeLines {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(100px);
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
          background: rgba(0, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(0, 255, 255, 0.3);
          border-radius: 2rem;
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
          font-weight: 600;
          color: #00ffff;
          margin-bottom: 1.5rem;
          font-family: "Courier New", monospace;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%,
          100% {
            box-shadow: 0 0 5px rgba(0, 255, 255, 0.3);
          }
          50% {
            box-shadow: 0 0 20px rgba(0, 255, 255, 0.6);
          }
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: white;
        }

        .hero-greeting {
          color: #00ffff;
          font-family: "Courier New", monospace;
          font-size: 1.5rem;
          display: block;
          margin-bottom: 0.5rem;
        }

        .hero-name {
          display: block;
          margin-bottom: 0.5rem;
        }

        .gradient-text {
          background: linear-gradient(135deg, #00ffff, #ff00ff, #ffff00);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: textGlow 3s ease-in-out infinite;
        }

        @keyframes textGlow {
          0%,
          100% {
            filter: brightness(1);
          }
          50% {
            filter: brightness(1.5);
          }
        }

        .typing-container {
          display: inline-block;
          position: relative;
        }

        .typing-text {
          color: #ff00ff;
          font-family: "Courier New", monospace;
          font-size: 2rem;
          font-weight: 700;
        }

        .typing-cursor {
          color: #00ffff;
          animation: blink 1s infinite;
          font-size: 2rem;
        }

        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0;
          }
        }

        .hero-description {
          font-size: 1.25rem;
          line-height: 1.7;
          margin-bottom: 2.5rem;
          color: rgba(255, 255, 255, 0.8);
        }

        .highlight {
          color: #00ffff;
          font-weight: 600;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          font-size: 1rem;
          font-weight: 700;
          text-decoration: none;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .btn-primary {
          background: linear-gradient(135deg, #00ffff, #ff00ff);
          color: #000;
          box-shadow: 0 4px 15px rgba(0, 255, 255, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 255, 255, 0.5);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.1);
          color: #00ffff;
          border: 2px solid #00ffff;
          backdrop-filter: blur(20px);
        }

        .btn-secondary:hover {
          background: rgba(0, 255, 255, 0.1);
          transform: translateY(-2px);
        }

        .hero-stats {
          display: flex;
          gap: 2rem;
        }

        .stat {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1rem;
          padding: 1rem;
          transition: all 0.3s ease;
        }

        .stat:hover {
          transform: translateY(-5px);
          border-color: #00ffff;
          box-shadow: 0 10px 30px rgba(0, 255, 255, 0.2);
        }

        .stat-icon {
          color: #00ffff;
        }

        .stat-number {
          font-size: 1.5rem;
          font-weight: 900;
          color: #ff00ff;
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
          position: relative;
        }

        .tech-stack {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          max-width: 500px;
        }

        .tech-item {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1rem;
          padding: 1.5rem;
          text-align: center;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .tech-item:hover {
          transform: translateY(-10px) scale(1.05);
          border-color: #00ffff;
          box-shadow: 0 20px 40px rgba(0, 255, 255, 0.3);
        }

        .tech-icon {
          color: #00ffff;
          margin-bottom: 0.5rem;
        }

        .tech-item span {
          font-weight: 700;
          font-size: 0.9rem;
          color: white;
          font-family: "Courier New", monospace;
        }

        .tech-glow {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, #00ffff, #ff00ff);
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 50%;
          filter: blur(20px);
        }

        .tech-item:hover .tech-glow {
          opacity: 0.2;
        }

        .tech-item-1 {
          animation: float 6s ease-in-out infinite;
        }
        .tech-item-2 {
          animation: float 6s ease-in-out infinite -1s;
        }
        .tech-item-3 {
          animation: float 6s ease-in-out infinite -2s;
        }
        .tech-item-4 {
          animation: float 6s ease-in-out infinite -3s;
        }
        .tech-item-5 {
          animation: float 6s ease-in-out infinite -4s;
        }
        .tech-item-6 {
          animation: float 6s ease-in-out infinite -5s;
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

        .floating-elements {
          position: absolute;
          top: 50%;
          right: -100px;
          transform: translateY(-50%);
        }

        .floating-code {
          background: rgba(0, 0, 0, 0.8);
          border: 1px solid #00ffff;
          border-radius: 0.5rem;
          padding: 1rem;
          font-family: "Courier New", monospace;
          font-size: 0.8rem;
          color: #00ffff;
          animation: codeFloat 8s ease-in-out infinite;
        }

        @keyframes codeFloat {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(2deg);
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

          .hero-greeting {
            font-size: 1rem;
          }

          .typing-text {
            font-size: 1.5rem;
          }

          .hero-description {
            font-size: 1.1rem;
          }

          .hero-buttons {
            justify-content: center;
          }

          .hero-stats {
            flex-direction: column;
            align-items: center;
          }

          .tech-stack {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }

          .tech-item {
            padding: 1rem;
          }

          .floating-elements {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
