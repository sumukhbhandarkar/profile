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
  MessageCircle,
} from "lucide-react";

const Profile = () => {
  const projects = [
    {
      name: "Honest Heart",
      icon: Home,
      color: "#ff6b6b",
      url: "https://honestheart.sumukhbhandarkar.com",
    },
    {
      name: "Aviation BOM",
      icon: Bus,
      color: "#4ecdc4",
      url: "https://aviation.sumukhbhandarkar.com/bom",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/sumukhbhandarkar",
      color: "#333",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/sumukhbhandarkar",
      color: "#0077b5",
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/918867141252",
      color: "#25D366",
    },
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
          <h2>Professional Experience</h2>
          <div className="current-role">
            <div className="role-info">
              <span className="role-title">
                Senior Software Engineer - Lowe's India
              </span>
              <span className="role-dates">2025 - Present</span>
            </div>
            <div className="role-company">
              <span className="company-logo">lowes</span>
              <span className="company-name">Lowes</span>
            </div>
            <div className="previous-roles">
              <ArrowRight size={16} />
              <span>Previous roles</span>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="section">
          <h2>About</h2>
          <p>
            As a Senior Software Engineer at Lowe's India, I leverage my
            expertise in Java, Spring, and Hibernate to develop new features for
            various modules. I have a strong background in software engineering,
            having worked as a Software Engineer III at Walmart Global Tech
            India and an Application Engineer at Oracle. I am passionate about
            solving complex problems and delivering high-quality solutions using
            agile development environments and microservice architectures. I am
            always eager to learn new technologies and enhance my skills to stay
            ahead in the fast-paced tech industry.
          </p>
        </div>

        {/* Projects Section */}
        <div className="section">
          <h2>PROJECTS</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.url || "#"}
                className="project-item"
                target={project.url ? "_blank" : "_self"}
                rel={project.url ? "noopener noreferrer" : ""}
              >
                <div
                  className="project-icon"
                  style={{ backgroundColor: project.color }}
                >
                  <project.icon size={20} />
                </div>
                <span className="project-name">{project.name}</span>
                <ArrowRight size={16} className="project-arrow" />
              </a>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="social-links">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="social-link"
              target={social.href.startsWith("http") ? "_blank" : "_self"}
              rel={social.href.startsWith("http") ? "noopener noreferrer" : ""}
            >
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
          padding: 3rem 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .profile-content {
          max-width: 700px;
          width: 100%;
        }

        .profile-header {
          display: flex;
          align-items: center;
          gap: 2rem;
          margin-bottom: 4rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid #333;
        }

        .profile-picture {
          flex-shrink: 0;
        }

        .avatar-placeholder {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          font-weight: bold;
          color: #fff;
          box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);
        }

        .profile-info h1 {
          font-size: 2rem;
          font-weight: normal;
          margin: 0 0 0.5rem 0;
          color: #fff;
          line-height: 1.2;
        }

        .profile-info p {
          font-size: 1.1rem;
          margin: 0;
          color: #aaa;
        }

        .section {
          margin-bottom: 3rem;
        }

        .section h2 {
          font-size: 1.1rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 2px;
          position: relative;
          padding-left: 1rem;
        }

        .section h2::before {
          content: "";
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 4px;
          height: 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .current-role {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .role-info {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .role-title {
          font-size: 1.1rem;
          color: #fff;
          font-weight: 500;
        }

        .role-dates {
          font-size: 0.9rem;
          color: #aaa;
        }

        .role-company {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .company-logo {
          background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
          color: #fff;
          padding: 0.5rem 0.75rem;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: bold;
          text-transform: uppercase;
        }

        .company-name {
          font-size: 1rem;
          color: #ccc;
          font-weight: 500;
        }

        .previous-roles {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #aaa;
          font-size: 0.9rem;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .previous-roles:hover {
          color: #fff;
        }

        .section p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #ccc;
          margin: 0;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 8px;
          border-left: 3px solid #667eea;
        }

        .projects-grid {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .project-item {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1rem 1.5rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          color: inherit;
        }

        .project-item:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateX(8px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        .project-icon {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          flex-shrink: 0;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        }

        .project-name {
          flex: 1;
          font-size: 1.1rem;
          color: #ccc;
          font-weight: 500;
        }

        .project-item:hover .project-name {
          color: #fff;
        }

        .project-arrow {
          color: #666;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .project-item:hover .project-arrow {
          color: #fff;
          transform: translateX(4px);
        }

        .social-links {
          display: flex;
          gap: 1.5rem;
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid #333;
          justify-content: center;
        }

        .social-link {
          color: #666;
          text-decoration: none;
          transition: all 0.3s ease;
          padding: 0.75rem;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .social-link:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.08);
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 768px) {
          .profile-container {
            padding: 2rem 1rem;
          }

          .profile-header {
            flex-direction: column;
            text-align: center;
            gap: 1.5rem;
            margin-bottom: 3rem;
          }

          .avatar-placeholder {
            width: 80px;
            height: 80px;
            font-size: 1.5rem;
          }

          .profile-info h1 {
            font-size: 1.75rem;
          }

          .current-role {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
            text-align: left;
          }

          .section h2 {
            font-size: 1rem;
            letter-spacing: 1px;
          }

          .section p {
            font-size: 1rem;
            padding: 1rem;
          }

          .project-item {
            padding: 0.75rem 1rem;
            gap: 1rem;
          }

          .project-icon {
            width: 36px;
            height: 36px;
          }

          .project-name {
            font-size: 1rem;
          }

          .social-links {
            gap: 1rem;
            margin-top: 2rem;
          }

          .social-link {
            padding: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Profile;
