import React, { useState, useEffect } from "react";
import {
  Award,
  Code,
  Users,
  TrendingUp,
  CheckCircle,
  Heart,
  Coffee,
  Gamepad2,
  Terminal,
  Cpu,
  Database,
  GitBranch,
  Brain,
  Target,
  Rocket,
  Zap,
  Shield,
  Layers,
  Monitor,
  Smartphone,
  Cloud,
  Server,
  User,
} from "lucide-react";

const About = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    {
      icon: Users,
      label: "Developers Mentored",
      value: "500+",
      color: "cyan",
      description: "Students transformed into professionals",
    },
    {
      icon: Code,
      label: "Projects Completed",
      value: "200+",
      color: "purple",
      description: "From startups to Fortune 500",
    },
    {
      icon: Award,
      label: "Years Experience",
      value: "8+",
      color: "pink",
      description: "Building scalable solutions",
    },
    {
      icon: TrendingUp,
      label: "Success Rate",
      value: "95%",
      color: "green",
      description: "Career advancement achieved",
    },
  ];

  const expertise = [
    { name: "Full-Stack Development", icon: Monitor, level: 95 },
    { name: "System Architecture", icon: Layers, level: 90 },
    { name: "Cloud Computing", icon: Cloud, level: 88 },
    { name: "DevOps & CI/CD", icon: Server, level: 85 },
    { name: "Machine Learning", icon: Brain, level: 80 },
    { name: "Mobile Development", icon: Smartphone, level: 75 },
  ];

  const funFacts = [
    {
      icon: Coffee,
      text: "Coffee consumed daily",
      value: "5+ cups",
      color: "amber",
    },
    {
      icon: Gamepad2,
      text: "Gaming hours/week",
      value: "10+ hrs",
      color: "green",
    },
    {
      icon: Heart,
      text: "Open source contributions",
      value: "50+ repos",
      color: "red",
    },
    {
      icon: Terminal,
      text: "Terminal sessions/day",
      value: "100+",
      color: "cyan",
    },
  ];

  const tabs = [
    { id: 0, label: "About", icon: User },
    { id: 1, label: "Skills", icon: Code },
    { id: 2, label: "Stats", icon: TrendingUp },
    { id: 3, label: "Fun Facts", icon: Heart },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-background">
        <div className="about-grid-bg"></div>
        <div className="about-particles"></div>
        <div className="about-circuit"></div>
      </div>

      <div className="container">
        <div className="section-header section-center">
          <div className="section-badge">
            <Terminal size={16} />
            <span>about.exe</span>
          </div>
          <h2>
            <span className="gradient-text">About</span> The Developer
          </h2>
          <p className="section-subtitle">
            Get to know the person behind the code. My journey, skills, and
            passion for technology.
          </p>
        </div>

        <div className="about-container">
          <div className="about-tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`about-tab ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <tab.icon size={18} />
                <span>{tab.label}</span>
                <div className="tab-indicator"></div>
              </button>
            ))}
          </div>

          <div className="about-content">
            {activeTab === 0 && (
              <div className="about-main">
                <div className="about-text">
                  <div className="about-intro">
                    <h3>Hello, World! 👋</h3>
                    <p>
                      I'm <span className="highlight">Sumukh Bhandarkar</span>,
                      a passionate software engineer and mentor with over 8
                      years of experience in building scalable applications and
                      helping developers grow their careers.
                    </p>
                    <p>
                      My journey began with a deep love for problem-solving and
                      technology. Over the years, I've worked with startups and
                      Fortune 500 companies, leading teams and delivering
                      complex projects that impact millions of users.
                    </p>
                    <p>
                      Now, I'm dedicated to sharing my knowledge and experience
                      with the next generation of developers. Whether you're a
                      student just starting out, a programmer looking to level
                      up, or someone preparing for technical interviews, I'm
                      here to guide you on your path to success.
                    </p>
                  </div>

                  <div className="about-mission">
                    <h4>My Mission</h4>
                    <div className="mission-card">
                      <div className="mission-icon">
                        <Rocket size={24} />
                      </div>
                      <div className="mission-content">
                        <h5>Empower Developers</h5>
                        <p>
                          Help developers unlock their potential and achieve
                          their career goals through personalized mentorship and
                          guidance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="about-visual">
                  <div className="terminal-window">
                    <div className="terminal-header">
                      <div className="terminal-controls">
                        <div className="control close"></div>
                        <div className="control minimize"></div>
                        <div className="control maximize"></div>
                      </div>
                      <div className="terminal-title">
                        <Terminal size={14} />
                        <span>sumukh@developer:~$</span>
                      </div>
                    </div>
                    <div className="terminal-content">
                      <pre>{`$ whoami
Sumukh Bhandarkar

$ cat about.txt
Full-Stack Developer
Tech Mentor & Educator
Open Source Enthusiast
Coffee Addict ☕

$ ls skills/
├── Frontend Development
├── Backend Architecture  
├── Cloud Computing
├── DevOps & CI/CD
├── Machine Learning
└── Mobile Development

$ git log --oneline
a1b2c3d feat: Launch mentorship program
e4f5g6h feat: Complete 200+ projects
i7j8k9l feat: Mentor 500+ developers
m0n1o2p feat: Start tech career

$ echo "Ready to code together?"`}</pre>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 1 && (
              <div className="skills-content">
                <div className="skills-grid">
                  {expertise.map((skill, index) => (
                    <div key={index} className="skill-card">
                      <div className="skill-header">
                        <div className="skill-icon">
                          <skill.icon size={24} />
                        </div>
                        <div className="skill-info">
                          <h4>{skill.name}</h4>
                          <span className="skill-level">{skill.level}%</span>
                        </div>
                      </div>
                      <div className="skill-progress">
                        <div
                          className="skill-bar"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 2 && (
              <div className="stats-content">
                <div className="stats-grid">
                  {stats.map((stat, index) => (
                    <div key={index} className={`stat-card stat-${stat.color}`}>
                      <div className="stat-icon">
                        <stat.icon size={32} />
                      </div>
                      <div className="stat-content">
                        <div className="stat-value">{stat.value}</div>
                        <div className="stat-label">{stat.label}</div>
                        <div className="stat-description">
                          {stat.description}
                        </div>
                      </div>
                      <div className="stat-glow"></div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 3 && (
              <div className="fun-facts-content">
                <div className="fun-facts-grid">
                  {funFacts.map((fact, index) => (
                    <div
                      key={index}
                      className={`fun-fact-card fact-${fact.color}`}
                    >
                      <div className="fact-icon">
                        <fact.icon size={28} />
                      </div>
                      <div className="fact-content">
                        <div className="fact-value">{fact.value}</div>
                        <div className="fact-text">{fact.text}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-section {
          padding: 6rem 0;
          background: #0a0a0a;
          position: relative;
          overflow: hidden;
        }

        .about-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
        }

        .about-grid-bg {
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

        .about-particles {
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

        .about-circuit {
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

        .about-container {
          position: relative;
          z-index: 2;
        }

        .about-tabs {
          display: flex;
          gap: 1rem;
          margin-bottom: 3rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .about-tab {
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
          position: relative;
          overflow: hidden;
        }

        .about-tab:hover {
          background: rgba(0, 255, 255, 0.1);
          border-color: #00ffff;
          color: #00ffff;
          transform: translateY(-2px);
        }

        .about-tab.active {
          background: rgba(0, 255, 255, 0.2);
          border-color: #00ffff;
          color: #00ffff;
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
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

        .about-tab.active .tab-indicator {
          transform: scaleX(1);
        }

        .about-content {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 2rem;
          padding: 3rem;
          position: relative;
          overflow: hidden;
        }

        .about-content::before {
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

        .about-main {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .about-text h3 {
          font-size: 2rem;
          font-weight: 800;
          color: white;
          margin-bottom: 1.5rem;
        }

        .about-text p {
          font-size: 1.1rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 1.5rem;
        }

        .highlight {
          color: #00ffff;
          font-weight: 700;
        }

        .about-mission {
          margin-top: 2rem;
        }

        .about-mission h4 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #00ffff;
          margin-bottom: 1rem;
          font-family: "Courier New", monospace;
        }

        .mission-card {
          background: rgba(0, 255, 255, 0.1);
          border: 1px solid rgba(0, 255, 255, 0.3);
          border-radius: 1rem;
          padding: 1.5rem;
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .mission-icon {
          color: #00ffff;
          flex-shrink: 0;
        }

        .mission-content h5 {
          font-size: 1.2rem;
          font-weight: 700;
          color: white;
          margin-bottom: 0.5rem;
        }

        .mission-content p {
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
        }

        .about-visual {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .terminal-window {
          background: rgba(0, 0, 0, 0.9);
          border: 1px solid rgba(0, 255, 255, 0.3);
          border-radius: 1rem;
          overflow: hidden;
          width: 100%;
          max-width: 500px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
        }

        .terminal-header {
          background: rgba(0, 255, 255, 0.1);
          padding: 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(0, 255, 255, 0.2);
        }

        .terminal-controls {
          display: flex;
          gap: 0.5rem;
        }

        .control {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .control.close {
          background: #ff5f57;
        }
        .control.minimize {
          background: #ffbd2e;
        }
        .control.maximize {
          background: #28ca42;
        }

        .terminal-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #00ffff;
          font-family: "Courier New", monospace;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .terminal-content {
          padding: 1.5rem;
          background: rgba(0, 0, 0, 0.9);
        }

        .terminal-content pre {
          color: #00ffff;
          font-family: "Courier New", monospace;
          font-size: 0.9rem;
          line-height: 1.5;
          margin: 0;
          white-space: pre-wrap;
        }

        .skills-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .skill-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1rem;
          padding: 1.5rem;
          transition: all 0.3s ease;
        }

        .skill-card:hover {
          border-color: #00ffff;
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 255, 255, 0.2);
        }

        .skill-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .skill-icon {
          color: #00ffff;
        }

        .skill-info {
          flex: 1;
        }

        .skill-info h4 {
          font-size: 1.1rem;
          font-weight: 700;
          color: white;
          margin: 0 0 0.25rem 0;
        }

        .skill-level {
          font-size: 0.9rem;
          font-weight: 600;
          color: #00ffff;
          font-family: "Courier New", monospace;
        }

        .skill-progress {
          height: 6px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
          overflow: hidden;
        }

        .skill-bar {
          height: 100%;
          background: linear-gradient(90deg, #00ffff, #ff00ff);
          border-radius: 3px;
          transition: width 1s ease;
        }

        .stats-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1.5rem;
          padding: 2rem;
          text-align: center;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-10px) scale(1.05);
          box-shadow: 0 20px 40px rgba(0, 255, 255, 0.3);
        }

        .stat-cyan {
          border-color: rgba(0, 255, 255, 0.3);
        }
        .stat-purple {
          border-color: rgba(255, 0, 255, 0.3);
        }
        .stat-pink {
          border-color: rgba(255, 105, 180, 0.3);
        }
        .stat-green {
          border-color: rgba(0, 255, 0, 0.3);
        }

        .stat-icon {
          color: #00ffff;
          margin-bottom: 1rem;
        }

        .stat-value {
          font-size: 2.5rem;
          font-weight: 900;
          color: white;
          margin-bottom: 0.5rem;
          line-height: 1;
        }

        .stat-label {
          font-size: 1rem;
          font-weight: 600;
          color: #00ffff;
          margin-bottom: 0.5rem;
        }

        .stat-description {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
        }

        .stat-glow {
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

        .fun-facts-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }

        .fun-fact-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1rem;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .fun-fact-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 255, 255, 0.2);
        }

        .fact-amber {
          border-color: rgba(255, 193, 7, 0.3);
        }
        .fact-green {
          border-color: rgba(0, 255, 0, 0.3);
        }
        .fact-red {
          border-color: rgba(255, 0, 0, 0.3);
        }
        .fact-cyan {
          border-color: rgba(0, 255, 255, 0.3);
        }

        .fact-icon {
          color: #00ffff;
          margin-bottom: 1rem;
        }

        .fact-value {
          font-size: 1.5rem;
          font-weight: 900;
          color: white;
          margin-bottom: 0.5rem;
          font-family: "Courier New", monospace;
        }

        .fact-text {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
        }

        @media (max-width: 768px) {
          .about-section {
            padding: 4rem 0;
          }

          .section-header h2 {
            font-size: 2rem;
          }

          .about-tabs {
            flex-direction: column;
            gap: 0.5rem;
          }

          .about-tab {
            justify-content: center;
          }

          .about-content {
            padding: 2rem;
          }

          .about-main {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .skills-content {
            grid-template-columns: 1fr;
          }

          .stats-content {
            grid-template-columns: 1fr;
          }

          .fun-facts-content {
            grid-template-columns: 1fr;
          }

          .terminal-window {
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
