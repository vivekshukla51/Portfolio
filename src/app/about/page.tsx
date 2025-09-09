"use client";

export default function About() {
  return (
    <>
      <h1 className="playfair">Hi, I’m Vivek Shukla</h1>
      <p className="subtitle">
        Final-year Information Science and Engineering student at BMSITM. I’m a full-stack developer who loves solving DSA problems and building clean, functional, and user-friendly websites. Passionate about both design and development, I enjoy writing clean code, crafting intuitive interfaces, and solving real-world problems with technology.
      </p>
      <p className="subtitle" style={{ marginTop: "1.5rem" }}>
        Always eager to learn and grow, I constantly explore new tools and technologies to improve my skills and build better products.
      </p>
      <div style={{ marginTop: "2.5rem" }}>
        <h2 className="section-heading">Tech Stack I Work With</h2>
        <ul style={{ marginTop: "1rem", marginBottom: "1.5rem" }}>
          <li><b>Languages:</b> C, C++, JavaScript, TypeScript, HTML, CSS</li>
          <li><b>Frameworks & Libraries:</b> React.js, Next.js, Express.js, Node.js, Tailwind CSS, Socket.io</li>
          <li><b>Databases:</b> PostgreSQL, MongoDB</li>
          <li><b>DevOps:</b> Docker</li>
          <li><b>Tools:</b> VS Code, Postman, GitHub</li>
        </ul>
      </div>
      <div style={{ marginTop: "2.5rem" }}>
        Thanks for visiting the site.<br/>
        Feel free to explore my work and projects. If you're interested in connecting or collaborating, don't hesitate to reach out.
      </div>
    </>
  );
}