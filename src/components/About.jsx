import React from "react";
import {
  Award,
  Code,
  Users,
  TrendingUp,
  CheckCircle,
  Heart,
  Coffee,
  Gamepad2,
} from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: Users,
      label: "Students Mentored",
      value: "500+",
      color: "text-blue-500",
    },
    {
      icon: Code,
      label: "Projects Completed",
      value: "200+",
      color: "text-green-500",
    },
    {
      icon: Award,
      label: "Years Experience",
      value: "8+",
      color: "text-purple-500",
    },
    {
      icon: TrendingUp,
      label: "Success Rate",
      value: "95%",
      color: "text-orange-500",
    },
  ];

  const expertise = [
    "Full-Stack Development",
    "System Architecture Design",
    "Cloud Computing (AWS, Azure)",
    "DevOps & CI/CD",
    "Machine Learning & AI",
    "Mobile App Development",
    "Database Design & Optimization",
    "Agile Methodologies",
  ];

  const funFacts = [
    { icon: Coffee, text: "Coffee addict ☕", color: "text-amber-600" },
    { icon: Gamepad2, text: "Gaming enthusiast 🎮", color: "text-green-600" },
    { icon: Heart, text: "Open source lover ❤️", color: "text-red-500" },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <div className="about-badge">
              <Award size={16} />
              <span>About Me</span>
            </div>

            <h2>Hey, I'm Sumukh! 👋</h2>
            <p className="about-intro">
              I'm a passionate software engineer and mentor with over 8 years of
              experience in building scalable applications and helping
              developers grow their careers.
            </p>
            <p>
              My journey began with a deep love for problem-solving and
              technology. Over the years, I've worked with startups and Fortune
              500 companies, leading teams and delivering complex projects that
              impact millions of users.
            </p>
            <p>
              Now, I'm dedicated to sharing my knowledge and experience with the
              next generation of developers. Whether you're a student just
              starting out, a programmer looking to level up, or someone
              preparing for technical interviews, I'm here to guide you on your
              path to success.
            </p>

            <div className="fun-facts">
              <h3>Fun Facts About Me</h3>
              <div className="fun-facts-grid">
                {funFacts.map((fact, index) => (
                  <div key={index} className="fun-fact">
                    <fact.icon size={20} className={fact.color} />
                    <span>{fact.text}</span>
                  </div>
                ))}
              </div>
            </div>

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
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
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

        .about-badge {
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

        .about-intro {
          font-size: 1.25rem;
          font-weight: 500;
          color: var(--text-dark);
          margin-bottom: 1.5rem;
        }

        .fun-facts {
          margin: 2rem 0;
          padding: 1.5rem;
          background: var(--glass-bg);
          backdrop-filter: blur(20px);
          border-radius: 1.5rem;
          border: 1px solid var(--glass-border);
        }

        .fun-facts h3 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          color: var(--text-dark);
        }

        .fun-facts-grid {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .fun-fact {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.95rem;
          color: var(--text-dark);
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
          padding: 0.75rem;
          background: var(--background-light);
          border-radius: 0.75rem;
          font-size: 0.95rem;
          transition: all 0.2s ease;
        }

        .expertise-item:hover {
          background: var(--primary-color);
          color: white;
          transform: translateY(-2px);
        }

        .expertise-item svg {
          color: var(--accent-color);
          flex-shrink: 0;
        }

        .expertise-item:hover svg {
          color: white;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .stat-card {
          background: var(--background-white);
          border-radius: 1.5rem;
          padding: 2rem;
          box-shadow: var(--shadow-md);
          border: 1px solid var(--border-color);
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .stat-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--gradient-primary);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .stat-card:hover::before {
          transform: scaleX(1);
        }

        .stat-card:hover {
          transform: translateY(-6px) scale(1.02);
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
          font-weight: 900;
          color: var(--primary-color);
          margin-bottom: 0.5rem;
          line-height: 1;
        }

        .stat-label {
          font-size: 0.95rem;
          color: var(--text-light);
          font-weight: 500;
        }

        .about-cta {
          background: var(--gradient-primary);
          border-radius: 2rem;
          padding: 2.5rem;
          text-align: center;
          color: white;
          position: relative;
          overflow: hidden;
        }

        .about-cta::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.1) 0%,
            transparent 70%
          );
          animation: rotate 20s linear infinite;
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .about-cta h3 {
          font-size: 1.75rem;
          margin-bottom: 1rem;
          color: white;
          position: relative;
          z-index: 2;
        }

        .about-cta p {
          font-size: 1.1rem;
          margin-bottom: 2rem;
          opacity: 0.9;
          position: relative;
          z-index: 2;
        }

        .about-cta .btn {
          background: white;
          color: var(--primary-color);
          position: relative;
          z-index: 2;
        }

        .about-cta .btn:hover {
          background: var(--background-light);
          transform: translateY(-2px);
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

          .fun-facts-grid {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
