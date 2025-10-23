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
        .contact-section {
          padding: 6rem 0;
          background: #0a0a0a;
          position: relative;
          overflow: hidden;
        }

        .contact-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
        }

        .contact-grid-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: linear-gradient(
              rgba(0, 255, 255, 0.03) 1px,
              transparent 1px
            ),
            linear-gradient(90deg, rgba(0, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 40px 40px;
          animation: gridMove 30s linear infinite;
        }

        .contact-particles {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: radial-gradient(
              circle at 25% 25%,
              rgba(0, 255, 255, 0.1) 0%,
              transparent 50%
            ),
            radial-gradient(
              circle at 75% 75%,
              rgba(255, 0, 255, 0.1) 0%,
              transparent 50%
            );
          animation: particleFloat 20s ease-in-out infinite;
        }

        .contact-circuit {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: linear-gradient(
              45deg,
              transparent 48%,
              rgba(0, 255, 255, 0.05) 49%,
              rgba(0, 255, 255, 0.05) 51%,
              transparent 52%
            ),
            linear-gradient(
              -45deg,
              transparent 48%,
              rgba(255, 0, 255, 0.05) 49%,
              rgba(255, 0, 255, 0.05) 51%,
              transparent 52%
            );
          background-size: 80px 80px;
          animation: circuitMove 25s linear infinite;
        }

        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(40px, 40px);
          }
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

        @keyframes circuitMove {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(80px);
          }
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
          font-family: "Courier New", monospace;
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

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
          position: relative;
          z-index: 2;
        }

        .contact-info {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 2rem;
          padding: 3rem;
          position: relative;
          overflow: hidden;
        }

        .contact-info::before {
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
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(100%);
          }
        }

        .contact-intro h3 {
          font-size: 2rem;
          font-weight: 800;
          color: white;
          margin-bottom: 1rem;
        }

        .contact-intro p {
          font-size: 1.1rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 2rem;
        }

        .contact-details {
          margin-bottom: 2rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          padding: 1rem;
          border-radius: 1rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .contact-cyan {
          background: rgba(0, 255, 255, 0.1);
          border: 1px solid rgba(0, 255, 255, 0.3);
        }

        .contact-purple {
          background: rgba(255, 0, 255, 0.1);
          border: 1px solid rgba(255, 0, 255, 0.3);
        }

        .contact-pink {
          background: rgba(255, 105, 180, 0.1);
          border: 1px solid rgba(255, 105, 180, 0.3);
        }

        .contact-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 255, 255, 0.2);
        }

        .contact-icon {
          width: 3rem;
          height: 3rem;
          background: rgba(0, 255, 255, 0.2);
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #00ffff;
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
          color: rgba(255, 255, 255, 0.7);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-family: "Courier New", monospace;
        }

        .contact-value {
          font-size: 1.1rem;
          font-weight: 500;
          color: white;
          text-decoration: none;
        }

        .contact-value:hover {
          color: #00ffff;
        }

        .contact-glow {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: inherit;
          opacity: 0.1;
          border-radius: 50%;
          filter: blur(20px);
          animation: glowPulse 2s ease-in-out infinite;
        }

        @keyframes glowPulse {
          0%,
          100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.1);
          }
        }

        .contact-note {
          background: rgba(0, 255, 255, 0.1);
          border: 1px solid rgba(0, 255, 255, 0.3);
          border-radius: 1rem;
          padding: 1.5rem;
        }

        .note-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .note-header h4 {
          font-size: 1.25rem;
          margin: 0;
          color: #00ffff;
          font-family: "Courier New", monospace;
        }

        .note-header svg {
          color: #00ffff;
        }

        .contact-note p {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
        }

        .contact-form-container {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 2rem;
          padding: 3rem;
          position: relative;
          overflow: hidden;
        }

        .contact-form-container::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #00ffff, #ff00ff, #ffff00);
          animation: gradientShift 3s ease-in-out infinite;
        }

        .form-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .form-header h3 {
          font-size: 1.75rem;
          margin: 0;
          color: white;
        }

        .form-status {
          position: relative;
        }

        .typing-indicator {
          display: flex;
          gap: 0.25rem;
        }

        .typing-indicator span {
          width: 6px;
          height: 6px;
          background: #00ffff;
          border-radius: 50%;
          animation: typing 1.4s infinite;
        }

        .typing-indicator span:nth-child(2) {
          animation-delay: 0.2s;
        }

        .typing-indicator span:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes typing {
          0%,
          60%,
          100% {
            transform: translateY(0);
          }
          30% {
            transform: translateY(-10px);
          }
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          color: #00ffff;
          margin-bottom: 0.5rem;
          font-family: "Courier New", monospace;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0.5rem;
          font-size: 1rem;
          color: white;
          transition: all 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #00ffff;
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.2);
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .service-selector {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 0.75rem;
        }

        .service-option {
          cursor: pointer;
        }

        .service-option input[type="radio"] {
          display: none;
        }

        .service-card {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0.75rem;
          transition: all 0.3s ease;
          color: rgba(255, 255, 255, 0.7);
        }

        .service-card:hover {
          background: rgba(0, 255, 255, 0.1);
          border-color: #00ffff;
          color: #00ffff;
        }

        .service-option input[type="radio"]:checked + .service-card {
          background: rgba(0, 255, 255, 0.2);
          border-color: #00ffff;
          color: #00ffff;
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
        }

        .form-submit {
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

        .form-submit:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(0, 255, 255, 0.4);
        }

        .form-success {
          text-align: center;
          padding: 2rem;
          position: relative;
        }

        .success-icon {
          color: #00ff00;
          margin-bottom: 1rem;
          animation: successPulse 2s ease-in-out infinite;
        }

        @keyframes successPulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        .form-success h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: white;
        }

        .form-success p {
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
        }

        .success-animation {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        .success-particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #00ffff;
          border-radius: 50%;
          animation: particleBurst 1s ease-out;
        }

        .success-particle:nth-child(1) {
          animation-delay: 0s;
        }

        .success-particle:nth-child(2) {
          animation-delay: 0.2s;
        }

        .success-particle:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes particleBurst {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(var(--random-x, 50px), var(--random-y, 50px))
              scale(0);
            opacity: 0;
          }
        }

        @media (max-width: 768px) {
          .contact-section {
            padding: 4rem 0;
          }

          .section-header h2 {
            font-size: 2rem;
          }

          .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .contact-info,
          .contact-form-container {
            padding: 2rem;
          }

          .form-grid {
            grid-template-columns: 1fr;
          }

          .service-selector {
            grid-template-columns: 1fr;
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
