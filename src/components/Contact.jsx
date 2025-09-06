import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sumukh@example.com",
      link: "mailto:sumukh@example.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      link: null
    }
  ];

  return (
    <section id="contact" className="section section-light">
      <div className="container">
        <div className="section-header section-center">
          <h2>Get In Touch</h2>
          <p className="section-subtitle">
            Ready to start your journey? Let's discuss how I can help you achieve your goals.
          </p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm always excited to work with passionate developers and students. 
              Whether you're looking for mentorship, freelance opportunities, 
              or interview preparation, I'm here to help.
            </p>
            
            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">
                    <info.icon size={20} />
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
                </div>
              ))}
            </div>
            
            <div className="contact-note">
              <h4>Response Time</h4>
              <p>I typically respond to all inquiries within 24 hours. For urgent matters, please call directly.</p>
            </div>
          </div>
          
          <div className="contact-form-container">
            {isSubmitted ? (
              <div className="form-success">
                <CheckCircle size={48} />
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3>Send Me a Message</h3>
                
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
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
                
                <div className="form-group">
                  <label htmlFor="service">Service Interested In</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="freelancing">Freelancing Opportunities</option>
                    <option value="mentorship">Technical Mentorship</option>
                    <option value="mock-interviews">Mock Interviews</option>
                    <option value="learning-support">Learning Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
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
                
                <button type="submit" className="btn btn-primary btn-large">
                  <Send size={20} />
                  Send Message
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
          background: var(--background-white);
          border-radius: 1.5rem;
          padding: 2.5rem;
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--border-color);
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
