import React from "react";
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
} from "lucide-react";

const Services = () => {
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
      color: "from-blue-500 to-purple-600",
      emoji: "💼",
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
      color: "from-green-500 to-teal-600",
      emoji: "🚀",
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
      color: "from-orange-500 to-red-600",
      emoji: "🎯",
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
      color: "from-purple-500 to-pink-600",
      emoji: "📖",
    },
  ];

  return (
    <section id="services" className="section section-light">
      <div className="container">
        <div className="section-header section-center">
          <div className="section-badge">
            <Star size={16} />
            <span>What I Offer</span>
          </div>
          <h2>Services That Actually Work</h2>
          <p className="section-subtitle">
            No fluff, just results. Here's how I help developers and students
            succeed in tech.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-header">
                <div className="service-icon-wrapper">
                  <div className={`service-icon bg-gradient-${service.color}`}>
                    <service.icon size={28} />
                  </div>
                  <div className="service-emoji">{service.emoji}</div>
                </div>
                <div className="service-title-section">
                  <h3>{service.title}</h3>
                  <p className="service-subtitle">{service.subtitle}</p>
                </div>
              </div>

              <p className="service-description">{service.description}</p>

              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>
                    <CheckCircle size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="service-cta">
                <Rocket size={16} />
                Get Started
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .section-header {
          margin-bottom: 4rem;
        }

        .section-badge {
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

        .section-subtitle {
          font-size: 1.25rem;
          max-width: 600px;
          margin: 0 auto;
          color: var(--text-light);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }

        .service-card {
          background: var(--background-white);
          border-radius: 2rem;
          padding: 2.5rem;
          box-shadow: var(--shadow-md);
          border: 1px solid var(--border-color);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .service-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--gradient-primary);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .service-card:hover::before {
          transform: scaleX(1);
        }

        .service-card:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
          border-color: var(--primary-color);
        }

        .service-header {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .service-icon-wrapper {
          position: relative;
          flex-shrink: 0;
        }

        .service-icon {
          width: 4.5rem;
          height: 4.5rem;
          border-radius: 1.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          position: relative;
          z-index: 2;
        }

        .service-emoji {
          position: absolute;
          top: -0.5rem;
          right: -0.5rem;
          font-size: 1.5rem;
          background: var(--background-white);
          border-radius: 50%;
          width: 2rem;
          height: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-md);
          z-index: 3;
        }

        .bg-gradient-from-blue-500-to-purple-600 {
          background: linear-gradient(135deg, #3b82f6, #9333ea);
        }

        .bg-gradient-from-green-500-to-teal-600 {
          background: linear-gradient(135deg, #10b981, #0d9488);
        }

        .bg-gradient-from-orange-500-to-red-600 {
          background: linear-gradient(135deg, #f97316, #dc2626);
        }

        .bg-gradient-from-purple-500-to-pink-600 {
          background: linear-gradient(135deg, #8b5cf6, #db2777);
        }

        .service-title-section {
          flex: 1;
        }

        .service-title-section h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-dark);
          margin: 0 0 0.5rem 0;
          line-height: 1.3;
        }

        .service-subtitle {
          font-size: 1rem;
          font-weight: 600;
          color: var(--primary-color);
          margin: 0;
        }

        .service-description {
          font-size: 1.1rem;
          line-height: 1.6;
          color: var(--text-light);
          margin-bottom: 2rem;
        }

        .service-features {
          list-style: none;
          margin-bottom: 2rem;
        }

        .service-features li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
          font-size: 0.95rem;
          color: var(--text-dark);
        }

        .service-features li svg {
          color: var(--accent-color);
          flex-shrink: 0;
        }

        .service-cta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--gradient-primary);
          color: white;
          border: none;
          padding: 1rem 1.5rem;
          border-radius: 1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .service-cta::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.5s;
        }

        .service-cta:hover::before {
          left: 100%;
        }

        .service-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 30px rgba(99, 102, 241, 0.4);
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .service-card {
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

          .service-emoji {
            font-size: 1.25rem;
            width: 1.75rem;
            height: 1.75rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
