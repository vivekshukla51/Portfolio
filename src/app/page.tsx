"use client";

export default function Home() {
  return (
    <>
      <header></header>

      <h1 className="playfair" style={{ marginTop: '-1.2rem' }}>
        Hi, I&#39;m Vivek Shukla
      </h1>
      <p className="subtitle">
        Final-year Information Science and Engineering student at BMSITM. I love solving DSA problems and building sleek, functional websites. Passionate about both design and development, and always eager to learn and grow.
      </p>

      <p style={{ marginTop: '2.5rem' }}>You can check these links if you wish to</p>
      <div>
        <a className="button" href="https://leetcode.com/u/Vivek5001/" target="_blank" rel="noopener noreferrer">LeetCode</a>
        <a className="button" href="#">GitHub</a>
        <a className="button" href="#">Resume</a>
        <a className="button" href="https://www.linkedin.com/in/vivek-shukla-88b05b324/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>

      <div style={{ marginTop: "3rem" }}>
        <p>Tech Stack</p>
        <div className="tech-stack">
          <span className="tech-item">Next.js</span>
          <span className="tech-item">React.js</span>
          <span className="tech-item">TypeScript</span>
          <span className="tech-item">Tailwind CSS</span>
          <span className="tech-item">Express.js</span>
          <span className="tech-item">Prisma</span>
          <span className="tech-item">Docker</span>
        </div>
      </div>

      <div style={{ marginTop: "3rem" }}>
        <h2 className="section-heading">Things I Have Built</h2>
        
        <div className="project-card">
          <div className="project-preview">
            <img 
              src="/leetlabimage.png" 
              alt="LeetLab - Online Coding Practice Platform" 
              className="project-image"
            />
          </div>
          <div className="project-details">
            <div className="project-header">
              <h3 className="project-title">LeetLab</h3>
              <div className="project-links">
                <a href="#" className="project-link">Live</a>
              </div>
            </div>
            <p className="project-description">
              An online coding practice platform inspired by LeetCode, featuring a comprehensive problem database, real-time code execution, and progress tracking to help developers prepare for coding interviews and improve their problem-solving skills.
            </p>
            <div className="project-tech">
              <span className="tech-label">Technologies Used:</span>
              <div className="tech-tags">
                <span className="tech-tag">React.js</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">Express</span>
                <span className="tech-tag">Docker</span>
                <span className="tech-tag">PostgreSQL</span>
                <span className="tech-tag">Prisma</span>
                <span className="tech-tag">Judge0 API</span>
              </div>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-preview">
            <img 
              src="/pixaiimage.png" 
              alt="PixAI - AI Image Editor" 
              className="project-image"
            />
          </div>
          <div className="project-details">
            <div className="project-header">
              <h3 className="project-title">PixAI</h3>
              <div className="project-links">
                <a href="#" className="project-link">Live</a>
              </div>
            </div>
            <p className="project-description">
              Pix AI is an intelligent, fast, and user-friendly AI image editor designed to make powerful image editing effortless. From background removal to smart cropping and enhancement, Pix AI helps you create stunning visuals in seconds.
            </p>
            <div className="project-tech">
              <span className="tech-label">Technologies Used:</span>
              <div className="tech-tags">
                <span className="tech-tag">Next.js</span>
                <span className="tech-tag">Tailwind CSS</span>
                <span className="tech-tag">HTML</span>
              </div>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-preview">
            <img 
              src="/socilaizeee.png" 
              alt="Socialize - Social Media App" 
              className="project-image"
            />
          </div>
          <div className="project-details">
            <div className="project-header">
              <h3 className="project-title">Socialize</h3>
              <div className="project-links">
                <a href="#" className="project-link">Live</a>
              </div>
            </div>
            <p className="project-description">
              Socialize App is a modern social media application built with Next.js, Clerk for authentication, Prisma for database management, and Tailwind CSS for styling. It allows users to create posts, follow other users, and receive notifications.
            </p>
            <div className="project-tech">
              <span className="tech-label">Technologies Used:</span>
              <div className="tech-tags">
                <span className="tech-tag">Next.js</span>
                <span className="tech-tag">Clerk</span>
                <span className="tech-tag">Prisma</span>
                <span className="tech-tag">Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-preview">
            <img 
              src="/portfolioooo.png" 
              alt="Portfolio Website" 
              className="project-image"
            />
          </div>
          <div className="project-details">
            <div className="project-header">
              <h3 className="project-title">Portfolio Website</h3>
              <div className="project-links">
                <a href="#" className="project-link">Live</a>
              </div>
            </div>
            <p className="project-description">
              My personal portfolio website built with Next.js and Tailwind CSS. It showcases my projects, skills, and experience, and is designed for a clean, modern, and responsive user experience.
            </p>
            <div className="project-tech">
              <span className="tech-label">Technologies Used:</span>
              <div className="tech-tags">
                <span className="tech-tag">Next.js</span>
                <span className="tech-tag">Tailwind CSS</span>
                <span className="tech-tag">TypeScript</span>
              </div>
            </div>
          </div>
        </div>

        <footer style={{ marginTop: "2.5rem", textAlign: "left", color: "#888", fontSize: "0.85rem" }}>
          Designed & Developed by Vivek Shukla<br/>
          2025. All rights reserved.
        </footer>
      </div>
    </>
  );
}
