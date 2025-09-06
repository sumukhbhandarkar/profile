import React from 'react';
import { Award, Code, Users, TrendingUp, CheckCircle } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, label: "Students Mentored", value: "500+" },
    { icon: Code, label: "Projects Completed", value: "200+" },
    { icon: Award, label: "Years Experience", value: "8+" },
    { icon: TrendingUp, label: "Success Rate", value: "95%" }
  ];

  const expertise = [
    "Full-Stack Development",
    "System Architecture Design",
    "Cloud Computing (AWS, Azure)",
    "DevOps & CI/CD",
    "Machine Learning & AI",
    "Mobile App Development",
    "Database Design & Optimization",
    "Agile Methodologies"
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Me</h2>
            <p className="about-intro">
              I'm a passionate software engineer and mentor with over 8 years of experience 
              in building scalable applications and helping developers grow their careers.
            </p>
            <p>
              My journey began with a deep love for problem-solving and technology. 
              Over the years, I've worked with startups and Fortune 500 companies, 
              leading teams and delivering complex projects that impact millions of users.
            </p>
            <p>
              Now, I'm dedicated to sharing my knowledge and experience with the next 
              generation of developers. Whether you're a student just starting out, 
              a programmer looking to level up, or someone preparing for technical interviews, 
              I'm here to guide you on your path to success.
            </p>
            
            <div className="expertise-section">
              <h3>Areas of Expertise</h3>
              <div className="expertise-grid">
                {expertise.map((skill, index) => (
                  <div key={index} className="expertise-item">
                    <CheckCircle size={16} />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="about-stats">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-icon">
                    <stat.icon size={32} />
                  </div>
                  <div className="stat-content">
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="about-cta">
              <h3>Ready to Work Together?</h3>
              <p>Let's discuss how I can help you achieve your goals.</p>
              <button 
                className="btn btn-primary btn-large"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }
        
        .about-intro {
          font-size: 1.25rem;
          font-weight: 500;
          color: var(--text-dark);
          margin-bottom: 1.5rem;
        }
        
        .expertise-section {
          margin-top: 2rem;
        }
        
        .expertise-section h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--text-dark);
        }
        
        .expertise-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 0.75rem;
        }
        
        .expertise-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem;
          background: var(--background-light);
          border-radius: 0.5rem;
          font-size: 0.95rem;
        }
        
        .expertise-item svg {
          color: var(--primary-color);
          flex-shrink: 0;
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin-bottom: 3rem;
        }
        
        .stat-card {
          background: var(--background-white);
          border-radius: 1rem;
          padding: 2rem;
          box-shadow: var(--shadow-md);
          border: 1px solid var(--border-color);
          text-align: center;
          transition: all 0.3s ease;
        }
        
        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
        }
        
        .stat-icon {
          width: 4rem;
          height: 4rem;
          background: var(--gradient-primary);
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          color: white;
        }
        
        .stat-value {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--primary-color);
          margin-bottom: 0.5rem;
        }
        
        .stat-label {
          font-size: 0.95rem;
          color: var(--text-light);
          font-weight: 500;
        }
        
        .about-cta {
          background: var(--gradient-primary);
          border-radius: 1.5rem;
          padding: 2.5rem;
          text-align: center;
          color: white;
        }
        
        .about-cta h3 {
          font-size: 1.75rem;
          margin-bottom: 1rem;
          color: white;
        }
        
        .about-cta p {
          font-size: 1.1rem;
          margin-bottom: 2rem;
          opacity: 0.9;
        }
        
        .about-cta .btn {
          background: white;
          color: var(--primary-color);
        }
        
        .about-cta .btn:hover {
          background: var(--background-light);
        }
        
        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          
          .stats-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          
          .expertise-grid {
            grid-template-columns: 1fr;
          }
          
          .about-cta {
            padding: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
