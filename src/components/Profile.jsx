import React from "react";
import {
  Github,
  Twitter,
  Linkedin,
  Send,
  Coffee,
  ArrowRight,
  Home,
  Calculator,
  Flower2,
  Waves,
  Bus,
  Users,
  Scroll,
  GraduationCap,
  Mic,
  Music,
} from "lucide-react";

const Profile = () => {
  const projects = [
    { name: "Honest Heart", icon: Home, color: "#ff6b6b" },
    { name: "AllAboutAviation", icon: Calculator, color: "#4ecdc4" },
  ];

  const socialLinks = [
    { icon: Github, href: "#", color: "#333" },
    { icon: Twitter, href: "#", color: "#1da1f2" },
    { icon: Linkedin, href: "#", color: "#0077b5" },
    { icon: Send, href: "#", color: "#0088cc" },
    { icon: Coffee, href: "#", color: "#6f4e37" },
  ];

  return (
    <div className="profile-container">
      <div className="profile-content">
        {/* Profile Header */}
        <div className="profile-header">
          <div className="profile-picture">
            <div className="avatar-placeholder">
              <span>SB</span>
            </div>
          </div>
          <div className="profile-info">
            <h1>Hi, I am Sumukh.</h1>
            <p>Web Developer from India</p>
          </div>
        </div>

        {/* Currently Section */}
        <div className="section">
          <h2>CURRENTLY</h2>
          <div className="current-role">
            <div className="role-info">
              <span className="role-title">
                Developer - TCS Innovations Lab
              </span>
              <span className="role-dates">2025 - Present</span>
            </div>
            <div className="role-company">
              <span className="company-logo">tcs</span>
              <span className="company-name">TCS</span>
            </div>
            <div className="previous-roles">
              <ArrowRight size={16} />
              <span>Previous roles</span>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="section">
          <h2>ABOUT</h2>
          <p>
            I am a developer who enjoys creating practical solutions to
            real-world problems. I am always looking to improve my skills and
            explore new technologies.
          </p>
        </div>

        {/* Projects Section */}
        <div className="section">
          <h2>PROJECTS</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-item">
                <div
                  className="project-icon"
                  style={{ backgroundColor: project.color }}
                >
                  <project.icon size={20} />
                </div>
                <span className="project-name">{project.name}</span>
                <ArrowRight size={16} className="project-arrow" />
              </div>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="social-links">
          {socialLinks.map((social, index) => (
            <a key={index} href={social.href} className="social-link">
              <social.icon size={20} />
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        .profile-container {
          min-height: 100vh;
          background: #000;
          color: #fff;
          font-family: "Courier New", monospace;
          padding: 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .profile-content {
          max-width: 600px;
          width: 100%;
        }

        .profile-header {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .profile-picture {
          flex-shrink: 0;
        }

        .avatar-placeholder {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: #333;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: bold;
          color: #fff;
        }

        .profile-info h1 {
          font-size: 1.5rem;
          font-weight: normal;
          margin: 0 0 0.5rem 0;
          color: #fff;
        }

        .profile-info p {
          font-size: 1rem;
          margin: 0;
          color: #ccc;
        }

        .section {
          margin-bottom: 2.5rem;
        }

        .section h2 {
          font-size: 1rem;
          font-weight: bold;
          margin-bottom: 1rem;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .current-role {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .role-info {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .role-title {
          font-size: 1rem;
          color: #fff;
        }

        .role-dates {
          font-size: 0.9rem;
          color: #ccc;
        }

        .role-company {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .company-logo {
          background: #ff6b6b;
          color: #fff;
          padding: 0.25rem 0.5rem;
          border-radius: 3px;
          font-size: 0.8rem;
          font-weight: bold;
        }

        .company-name {
          font-size: 0.9rem;
          color: #ccc;
        }

        .previous-roles {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #ccc;
          font-size: 0.9rem;
          cursor: pointer;
        }

        .previous-roles:hover {
          color: #fff;
        }

        .section p {
          font-size: 1rem;
          line-height: 1.6;
          color: #ccc;
          margin: 0;
        }

        .projects-grid {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .project-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.5rem 0;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .project-item:hover {
          color: #fff;
        }

        .project-icon {
          width: 32px;
          height: 32px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          flex-shrink: 0;
        }

        .project-name {
          flex: 1;
          font-size: 1rem;
          color: #ccc;
        }

        .project-item:hover .project-name {
          color: #fff;
        }

        .project-arrow {
          color: #666;
          flex-shrink: 0;
        }

        .project-item:hover .project-arrow {
          color: #fff;
        }

        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid #333;
        }

        .social-link {
          color: #666;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .social-link:hover {
          color: #fff;
        }

        @media (max-width: 768px) {
          .profile-container {
            padding: 1rem;
          }

          .profile-header {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }

          .current-role {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }

          .social-links {
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Profile;
