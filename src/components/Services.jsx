import React from 'react';
import { Code, Users, MessageCircle, BookOpen, ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Freelancing Opportunities",
      description: "Get connected with high-quality freelance projects that match your skills and career goals.",
      features: [
        "Project sourcing and matching",
        "Client relationship management",
        "Pricing strategy guidance",
        "Contract negotiation support",
        "Portfolio optimization"
      ],
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Users,
      title: "Technical Mentorship",
      description: "Personalized guidance for programmers and students looking to advance their technical skills.",
      features: [
        "1-on-1 coding sessions",
        "Career path planning",
        "Technology stack guidance",
        "Code review and feedback",
        "Industry best practices"
      ],
      color: "from-green-500 to-teal-600"
    },
    {
      icon: MessageCircle,
      title: "Mock Interviews",
      description: "Practice technical and behavioral interviews with realistic scenarios and detailed feedback.",
      features: [
        "Technical problem solving",
        "System design discussions",
        "Behavioral question practice",
        "Interview strategy coaching",
        "Confidence building"
      ],
      color: "from-orange-500 to-red-600"
    },
    {
      icon: BookOpen,
      title: "Learning Support",
      description: "Structured learning paths and support for mastering new technologies and concepts.",
      features: [
        "Custom learning plans",
        "Resource recommendations",
        "Progress tracking",
        "Concept clarification",
        "Project-based learning"
      ],
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section id="services" className="section section-light">
      <div className="container">
        <div className="section-header section-center">
          <h2>Services I Offer</h2>
          <p className="section-subtitle">
            Comprehensive support tailored to your professional development needs
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-header">
                <div className={`service-icon bg-gradient-${service.color}`}>
                  <service.icon size={32} />
                </div>
                <h3>{service.title}</h3>
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
                Learn More
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
        
        .section-subtitle {
          font-size: 1.25rem;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .service-card {
          background: var(--background-white);
          border-radius: 1.5rem;
          padding: 2.5rem;
          box-shadow: var(--shadow-md);
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .service-card::before {
          content: '';
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
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
        }
        
        .service-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        
        .service-icon {
          width: 4rem;
          height: 4rem;
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
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
        
        .service-header h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-dark);
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
          color: var(--primary-color);
          flex-shrink: 0;
        }
        
        .service-cta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: none;
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          width: 100%;
          justify-content: center;
        }
        
        .service-cta:hover {
          background: var(--primary-color);
          color: white;
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
            width: 3.5rem;
            height: 3.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
