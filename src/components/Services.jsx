import React, { useState } from "react";
import {
  Code,
  Users,
  MessageCircle,
  BookOpen,
  ArrowRight,
  CheckCircle,
  Zap,
  Star,
  Rocket,
  Terminal,
  Cpu,
  Database,
  GitBranch,
  Brain,
  Target,
  TrendingUp,
  Play,
  Code2,
  Shield,
  Layers,
} from "lucide-react";

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Code,
      title: "Freelancing Opportunities",
      subtitle: "💰 Get Paid to Code",
      description:
        "Land high-paying freelance gigs that match your skills and passion. I'll help you find clients who value your work.",
      features: [
        "Project sourcing & matching",
        "Client relationship management", 
        "Pricing strategy guidance",
        "Contract negotiation support",
        "Portfolio optimization",
      ],
      color: "cyan",
      emoji: "💼",
      tech: ["React", "Node.js", "Python", "AWS"],
    },
    {
      icon: Users,
      title: "Technical Mentorship",
      subtitle: "🎯 Level Up Your Skills",
      description:
        "1-on-1 guidance to accelerate your learning and career growth. From coding basics to advanced concepts.",
      features: [
        "Personalized learning paths",
        "Code review & feedback",
        "Career planning sessions",
        "Technology stack guidance",
        "Industry best practices",
      ],
      color: "purple",
      emoji: "🚀",
      tech: ["JavaScript", "TypeScript", "Docker", "Kubernetes"],
    },
    {
      icon: MessageCircle,
      title: "Mock Interviews",
      subtitle: "🎤 Ace Your Interviews",
      description:
        "Practice with real interview scenarios and get detailed feedback to boost your confidence.",
      features: [
        "Technical problem solving",
        "System design discussions",
        "Behavioral questions",
        "Interview strategy coaching",
        "Confidence building",
      ],
      color: "pink",
      emoji: "🎯",
      tech: ["Algorithms", "System Design", "Behavioral", "Technical"],
    },
    {
      icon: BookOpen,
      title: "Learning Support",
      subtitle: "📚 Master New Skills",
      description:
        "Structured learning paths and support for mastering new technologies and concepts.",
      features: [
        "Custom learning plans",
        "Resource recommendations",
        "Progress tracking",
        "Concept clarification",
        "Project-based learning",
      ],
      color: "green",
      emoji: "📖",
      tech: ["AI/ML", "Blockchain", "Cloud", "DevOps"],
    },
  ];

  const techIcons = {
    cyan: <Terminal size={20} />,
    purple: <Brain size={20} />,
    pink: <Target size={20} />,
    green: <TrendingUp size={20} />,
  };

  return (
    <section id="services" className="services-section">
      <div className="services-background">
        <div className="services-grid-bg"></div>
        <div className="services-particles"></div>
      </div>

      <div className="container">
        <div className="section-header section-center">
          <div className="section-badge">
            <Code2 size={16} />
            <span>Services.exe</span>
          </div>
          <h2>
            <span className="gradient-text">Services</span> That Actually Work
          </h2>
          <p className="section-subtitle">
            No fluff, just results. Here's how I help developers and students
            succeed in the tech industry.
          </p>
        </div>

        <div className="services-container">
          <div className="services-tabs">
            {services.map((service, index) => (
              <button
                key={index}
                className={`service-tab ${activeService === index ? 'active' : ''}`}
                onClick={() => setActiveService(index)}
              >
                <div className="tab-icon">
                  <service.icon size={20} />
                </div>
                <span>{service.title}</span>
                <div className="tab-indicator"></div>
              </button>
            ))}
          </div>

          <div className="service-content">
            <div className="service-main">
              <div className="service-header">
                <div className="service-icon-wrapper">
                  <div className={`service-icon service-icon-${services[activeService].color}`}>
                    <services[activeService].icon size={32} />
                  </div>
                  <div className="service-glow"></div>
                </div>
                <div className="service-title-section">
                  <h3>{services[activeService].title}</h3>
                  <p className="service-subtitle">{services[activeService].subtitle}</p>
                </div>
              </div>

              <p className="service-description">{services[activeService].description}</p>

              <div className="service-features">
                {services[activeService].features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="feature-item">
                    <CheckCircle size={18} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="service-tech">
                <h4>Technologies Covered:</h4>
                <div className="tech-tags">
                  {services[activeService].tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <button className="service-cta">
                <Rocket size={18} />
                <span>Initialize Service</span>
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="service-visual">
              <div className="code-window">
                <div className="window-header">
                  <div className="window-controls">
                    <div className="control close"></div>
                    <div className="control minimize"></div>
                    <div className="control maximize"></div>
                  </div>
                  <div className="window-title">
                    <Terminal size={14} />
                    <span>service_{services[activeService].title.toLowerCase().replace(/\s+/g, '_')}.js</span>
                  </div>
                </div>
                <div className="code-content">
                  <pre>{`const ${services[activeService].title.toLowerCase().replace(/\s+/g, '')} = {
  name: "${services[activeService].title}",
  description: "${services[activeService].description}",
  features: [
${services[activeService].features.map(feature => `    "${feature}"`).join(',\n')}
  ],
  technologies: [
${services[activeService].tech.map(tech => `    "${tech}"`).join(',\n')}
  ],
  status: "active",
  success_rate: "95%"
};

export default ${services[activeService].title.toLowerCase().replace(/\s+/g, '')};`}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .services-section {
          padding: 6rem 0;
          background: #0a0a0a;
          position: relative;
          overflow: hidden;
        }

        .services-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
        }

        .services-grid-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(0, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 40px 40px;
          animation: gridMove 30s linear infinite;
        }

        .services-particles {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(0, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(255, 0, 255, 0.1) 0%, transparent 50%);
          animation: particleFloat 20s ease-in-out infinite;
        }

        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(40px, 40px); }
        }

        @keyframes particleFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        .section-header {
          margin-bottom: 4rem;
          position: relative;
          z-index: 2;
        }

        .section-badge {
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
          font-family: 'Courier New', monospace;
        }

        .section-header h2 {
          font-size: 3rem;
          font-weight: 900;
          color: white;
          margin-bottom: 1rem;
        }

        .gradient-text {
          background: linear-gradient(135deg, #00ffff, #ff00ff, #ffff00);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          font-size: 1.25rem;
          max-width: 600px;
          margin: 0 auto;
          color: rgba(255, 255, 255, 0.7);
        }

        .services-container {
          position: relative;
          z-index: 2;
        }

        .services-tabs {
          display: flex;
          gap: 1rem;
          margin-bottom: 3rem;
          overflow-x: auto;
          padding-bottom: 1rem;
        }

        .service-tab {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1rem;
          padding: 1rem 1.5rem;
          color: rgba(255, 255, 255, 0.7);
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
          position: relative;
          overflow: hidden;
        }

        .service-tab:hover {
          background: rgba(0, 255, 255, 0.1);
          border-color: #00ffff;
          color: #00ffff;
          transform: translateY(-2px);
        }

        .service-tab.active {
          background: rgba(0, 255, 255, 0.2);
          border-color: #00ffff;
          color: #00ffff;
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
        }

        .tab-icon {
          color: inherit;
        }

        .tab-indicator {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: #00ffff;
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .service-tab.active .tab-indicator {
          transform: scaleX(1);
        }

        .service-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .service-main {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 2rem;
          padding: 3rem;
          position: relative;
          overflow: hidden;
        }

        .service-main::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #00ffff, #ff00ff, #ffff00);
          animation: gradientShift 3s ease-in-out infinite;
        }

        @keyframes gradientShift {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(100%); }
        }

        .service-header {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .service-icon-wrapper {
          position: relative;
          flex-shrink: 0;
        }

        .service-icon {
          width: 5rem;
          height: 5rem;
          border-radius: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          position: relative;
          z-index: 2;
        }

        .service-icon-cyan {
          background: linear-gradient(135deg, #00ffff, #0099cc);
        }

        .service-icon-purple {
          background: linear-gradient(135deg, #ff00ff, #cc00cc);
        }

        .service-icon-pink {
          background: linear-gradient(135deg, #ff69b4, #ff1493);
        }

        .service-icon-green {
          background: linear-gradient(135deg, #00ff00, #00cc00);
        }

        .service-glow {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: inherit;
          opacity: 0.3;
          border-radius: 50%;
          filter: blur(20px);
          animation: glowPulse 2s ease-in-out infinite;
        }

        @keyframes glowPulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }

        .service-title-section h3 {
          font-size: 2rem;
          font-weight: 800;
          color: white;
          margin: 0 0 0.5rem 0;
          line-height: 1.2;
        }

        .service-subtitle {
          font-size: 1.1rem;
          font-weight: 600;
          color: #00ffff;
          margin: 0;
        }

        .service-description {
          font-size: 1.2rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 2rem;
        }

        .service-features {
          margin-bottom: 2rem;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.9);
        }

        .feature-item svg {
          color: #00ff00;
          flex-shrink: 0;
        }

        .service-tech h4 {
          font-size: 1.1rem;
          font-weight: 700;
          color: #00ffff;
          margin-bottom: 1rem;
          font-family: 'Courier New', monospace;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }

        .tech-tag {
          background: rgba(0, 255, 255, 0.1);
          border: 1px solid rgba(0, 255, 255, 0.3);
          border-radius: 0.5rem;
          padding: 0.5rem 1rem;
          font-size: 0.9rem;
          font-weight: 600;
          color: #00ffff;
          font-family: 'Courier New', monospace;
        }

        .service-cta {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: linear-gradient(135deg, #00ffff, #ff00ff);
          color: #000;
          border: none;
          padding: 1.25rem 2rem;
          border-radius: 1rem;
          font-weight: 700;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .service-cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(0, 255, 255, 0.4);
        }

        .service-visual {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .code-window {
          background: rgba(0, 0, 0, 0.8);
          border: 1px solid rgba(0, 255, 255, 0.3);
          border-radius: 1rem;
          overflow: hidden;
          width: 100%;
          max-width: 500px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
        }

        .window-header {
          background: rgba(0, 255, 255, 0.1);
          padding: 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(0, 255, 255, 0.2);
        }

        .window-controls {
          display: flex;
          gap: 0.5rem;
        }

        .control {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .control.close { background: #ff5f57; }
        .control.minimize { background: #ffbd2e; }
        .control.maximize { background: #28ca42; }

        .window-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #00ffff;
          font-family: 'Courier New', monospace;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .code-content {
          padding: 1.5rem;
          background: rgba(0, 0, 0, 0.9);
        }

        .code-content pre {
          color: #00ffff;
          font-family: 'Courier New', monospace;
          font-size: 0.9rem;
          line-height: 1.5;
          margin: 0;
          white-space: pre-wrap;
        }

        @media (max-width: 768px) {
          .services-section {
            padding: 4rem 0;
          }

          .section-header h2 {
            font-size: 2rem;
          }

          .services-tabs {
            flex-direction: column;
            gap: 0.5rem;
          }

          .service-tab {
            justify-content: center;
          }

          .service-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .service-main {
            padding: 2rem;
          }

          .service-header {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }

          .service-icon {
            width: 4rem;
            height: 4rem;
          }

          .service-title-section h3 {
            font-size: 1.5rem;
          }

          .code-window {
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
