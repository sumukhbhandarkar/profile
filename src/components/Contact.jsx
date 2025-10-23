import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Terminal,
  Code2,
  Rocket,
  Zap,
  MessageCircle,
  Clock,
  Shield,
  User,
  AtSign,
  Hash,
  FileText,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const handleChange = (e) => {
    setIsTyping(true);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setTimeout(() => setIsTyping(false), 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        service: "",
        message: "",
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sumukh@example.com",
      link: "mailto:sumukh@example.com",
      color: "cyan",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
      color: "purple",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      link: null,
      color: "pink",
    },
  ];

  const services = [
    { value: "freelancing", label: "Freelancing Opportunities", icon: Code2 },
    { value: "mentorship", label: "Technical Mentorship", icon: User },
    { value: "mock-interviews", label: "Mock Interviews", icon: MessageCircle },
    { value: "learning-support", label: "Learning Support", icon: FileText },
    { value: "other", label: "Other", icon: Hash },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-background">
        <div className="contact-grid-bg"></div>
        <div className="contact-particles"></div>
        <div className="contact-circuit"></div>
      </div>

      <div className="container">
        <div className="section-header section-center">
          <div className="section-badge">
            <Terminal size={16} />
            <span>contact.exe</span>
          </div>
          <h2>
            <span className="gradient-text">Contact</span> The Developer
          </h2>
          <p className="section-subtitle">
            Ready to start your journey? Let's discuss how I can help you
            achieve your goals.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-intro">
              <h3>Let's Connect! 🤝</h3>
              <p>
                I'm always excited to work with passionate developers and
                students. Whether you're looking for mentorship, freelance
                opportunities, or interview preparation, I'm here to help you
                level up! 🚀
              </p>
            </div>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className={`contact-item contact-${info.color}`}
                >
                  <div className="contact-icon">
                    <info.icon size={24} />
                  </div>
                  <div className="contact-text">
                    <span className="contact-label">{info.label}</span>
                    {info.link ? (
                      <a href={info.link} className="contact-value">
                        {info.value}
                      </a>
                    ) : (
                      <span className="contact-value">{info.value}</span>
                    )}
                  </div>
                  <div className="contact-glow"></div>
                </div>
              ))}
            </div>

            <div className="contact-note">
              <div className="note-header">
                <Zap size={20} />
                <h4>Quick Response</h4>
              </div>
              <p>
                I typically respond to all inquiries within 24 hours. For urgent
                matters, please call directly!
              </p>
            </div>
          </div>

          <div className="contact-form-container">
            {isSubmitted ? (
              <div className="form-success">
                <div className="success-icon">
                  <CheckCircle size={48} />
                </div>
                <h3>Message Sent!</h3>
                <p>
                  Thank you for reaching out. I'll get back to you within 24
                  hours.
                </p>
                <div className="success-animation">
                  <div className="success-particle"></div>
                  <div className="success-particle"></div>
                  <div className="success-particle"></div>
                </div>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-header">
                  <h3>Drop Me a Line! 💬</h3>
                  <div className="form-status">
                    {isTyping && (
                      <div className="typing-indicator">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="name">
                      <User size={16} />
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      <AtSign size={16} />
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="service">
                    <Hash size={16} />
                    Service Interested In
                  </label>
                  <div className="service-selector">
                    {services.map((service) => (
                      <label key={service.value} className="service-option">
                        <input
                          type="radio"
                          name="service"
                          value={service.value}
                          checked={formData.service === service.value}
                          onChange={handleChange}
                          required
                        />
                        <div className="service-card">
                          <service.icon size={20} />
                          <span>{service.label}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    <FileText size={16} />
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell me about your goals and how I can help..."
                  />
                </div>

                <button type="submit" className="form-submit">
                  <Rocket size={20} />
                  <span>Send Message</span>
                  <Send size={20} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .contact-info h3 {
          font-size: 1.75rem;
          margin-bottom: 1rem;
          color: var(--text-dark);
        }

        .contact-info > p {
          font-size: 1.1rem;
          margin-bottom: 2rem;
          color: var(--text-light);
        }

        .contact-details {
          margin-bottom: 2rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .contact-icon {
          width: 3rem;
          height: 3rem;
          background: var(--gradient-primary);
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }

        .contact-text {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .contact-label {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-light);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .contact-value {
          font-size: 1.1rem;
          font-weight: 500;
          color: var(--text-dark);
          text-decoration: none;
        }

        .contact-value:hover {
          color: var(--primary-color);
        }

        .contact-note {
          background: var(--background-white);
          border-radius: 1rem;
          padding: 1.5rem;
          border: 1px solid var(--border-color);
        }

        .contact-note h4 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          color: var(--text-dark);
        }

        .contact-note p {
          font-size: 0.95rem;
          color: var(--text-light);
          margin: 0;
        }

        .contact-form-container {
          background: var(--glass-bg);
          backdrop-filter: blur(20px);
          border-radius: 2rem;
          padding: 2.5rem;
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--glass-border);
          position: relative;
          overflow: hidden;
        }

        .contact-form-container::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--gradient-primary);
        }

        .contact-form h3 {
          font-size: 1.75rem;
          margin-bottom: 2rem;
          color: var(--text-dark);
          text-align: center;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          font-weight: 600;
          color: var(--text-dark);
          margin-bottom: 0.5rem;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 2px solid var(--border-color);
          border-radius: 0.5rem;
          font-size: 1rem;
          transition: border-color 0.2s ease;
          background: var(--background-white);
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary-color);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .form-success {
          text-align: center;
          padding: 2rem;
        }

        .form-success svg {
          color: var(--primary-color);
          margin-bottom: 1rem;
        }

        .form-success h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--text-dark);
        }

        .form-success p {
          color: var(--text-light);
          margin: 0;
        }

        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .contact-form-container {
            padding: 2rem;
          }

          .contact-item {
            flex-direction: column;
            text-align: center;
            gap: 0.75rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
