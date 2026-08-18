import './App.css';

const personalInfo = {
  name: 'Dangodara Pradip Maheshbhai',
  title: 'Frontend Developer & React Enthusiast',
  subtitle: 'Student | Beginner Developer | Intern Aspirant',
  phone: '7046766868',
  email: 'dangodarapradip015@gmail.com',
  linkedin: 'dangodara-pradip',
  github: 'dangodara-pradip',
  about:
    'Computer Engineering student with hands-on experience in React.js, JavaScript, HTML, CSS, and REST APIs. Skilled in building responsive web applications, integrating APIs, and creating reusable UI components. Passionate about developing clean, user-friendly applications and eager to contribute as a Frontend React Developer.'
};

const skills = [
  'JavaScript',
  'React.js',
  'HTML',
  'CSS',
  'Git & GitHub',
  'REST APIs',
  'Database Management',
  'Communication'
];

const projects = [
  {
    icon: '🌐',
    title: 'Personal Portfolio Website',
    text: 'A responsive personal portfolio website developed using HTML, CSS, and JavaScript. This project highlights my web development skills, showcases my projects, and provides contact details.',
    link: 'https://myportfoliopradip.netlify.app/'
  },
  {
    icon: '💼',
    title: 'SkillSync Website',
    text: 'A responsive website built and deployed using Netlify/Vercel that connects freelancers and clients with a clean, modular UI.',
    link: 'https://skillsync-amber.vercel.app/'
  },
  {
    icon: '🚗',
    title: 'IoT Toll Gate System',
    text: 'Developed a basic IoT-based toll gate system concept for vehicle tracking and automated access control. Focused on automation and real-world IoT application.',
    link: 'https://tollfreegate.netlify.app/'
  }
];

const stats = [
  { value: '3+', label: 'Projects Completed' },
  { value: '8+', label: 'Technical Skills' },
  { value: 'React.js', label: 'Primary Focus' },
  { value: 'Frontend', label: 'Specialization' }
];

const steps = [
  {
    step: '03',
    title: 'Build',
    text: 'Work on guided assignments and collaborative tasks.'
  },
  {
    step: '04',
    title: 'Launch',
    text: 'Present your work, earn feedback, and grow faster.'
  }
];

function App() {
  return (
    <div className="page-shell">

      {/* Animated Bubbles Background */}
      <div className="bubble-container">
        <div className="bubble bubble-1"></div>
        <div className="bubble bubble-2"></div>
        <div className="bubble bubble-3"></div>
        <div className="bubble bubble-4"></div>
        <div className="bubble bubble-5"></div>
        <div className="bubble bubble-6"></div>
        <div className="bubble bubble-7"></div>
        <div className="bubble bubble-8"></div>
        <div className="bubble bubble-9"></div>
        <div className="bubble bubble-10"></div>
        <div className="bubble bubble-11"></div>
        <div className="bubble bubble-12"></div>
      </div>

      <header className="topbar container">

        <div className="brand-wrap">
          <div className="brand-mark">DP</div>
          <span>{personalInfo.name.split(' ')[2]}</span>
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="nav-button">Get in Touch</button>

      </header>

      <main>

        {/* HERO SECTION */}
        <section className="hero container">

          <div className="hero-copy">

            <span className="eyebrow">
              {personalInfo.subtitle}
            </span>

            <h1>{personalInfo.title}</h1>

            <p>
              {personalInfo.about}
            </p>

            <div className="hero-actions">
              <a className="primary-btn" href="#projects">
                View Projects
              </a>

              <a className="secondary-btn" href="#contact">
                Get in Touch
              </a>
            </div>

            <div className="hero-meta">
              <span>📧 {personalInfo.email}</span>
              <span>📱 {personalInfo.phone}</span>
            </div>

          </div>

          <div
            className="hero-visual"
            aria-label="Developer highlights panel"
          >

            <div className="visual-card main-card">

              <p className="mini-label">My Focus</p>

              <h3>Frontend Development</h3>

              <div className="progress-row">
                <span>React.js</span>
                <span>90%</span>
              </div>

              <div className="progress-bar">
                <span style={{ width: '90%' }}></span>
              </div>

              <ul>
                <li>Building responsive UIs</li>
                <li>REST API Integration</li>
                <li>Reusable Components</li>
              </ul>

            </div>

            <div className="floating-stat stat-one">
              <strong>{projects.length}</strong>
              <span>Live Projects</span>
            </div>

            <div className="floating-stat stat-two">
              <strong>{skills.length}+</strong>
              <span>Skills Mastered</span>
            </div>

          </div>

        </section>

        {/* STATS SECTION */}
        <section
          className="stats-bar container"
          aria-label="Developer stats"
        >

          {stats.map((item) => (
            <div className="stat-item" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}

        </section>

        {/* ABOUT SECTION */}
        <section
          className="feature-intro container"
          id="about"
        >

          <div className="section-heading">

            <span className="eyebrow">
              About Me
            </span>

            <h2>
              Building clean, user-friendly web applications
            </h2>

          </div>

          <div className="feature-grid">

            <div className="feature-box">
              <span className="check">✓</span>
              <p>Expertise in React.js and JavaScript</p>
            </div>

            <div className="feature-box">
              <span className="check">✓</span>
              <p>
                Proficient in HTML & CSS responsive design
              </p>
            </div>

            <div className="feature-box">
              <span className="check">✓</span>
              <p>Skilled in REST API integration</p>
            </div>

            <div className="feature-box">
              <span className="check">✓</span>
              <p>Version control with Git & GitHub</p>
            </div>

          </div>

        </section>

        {/* SKILLS SECTION */}
        <section
          className="programs container"
          id="skills"
        >

          <div className="section-heading center">

            <span className="eyebrow">
              Technical Skills
            </span>

            <h2>
              Technologies I work with
            </h2>

          </div>

          <div className="program-grid">

            {skills.map((skill) => (
              <article
                className="program-card"
                key={skill}
              >

                <div className="icon-badge">
                  💻
                </div>

                <h3>{skill}</h3>

                <p>
                  Proficient and actively using in projects
                </p>

                <a href="#projects">
                  See in Projects
                </a>

              </article>
            ))}

          </div>

        </section>

        {/* PROJECTS SECTION */}
        <section
          className="benefits-section"
          id="projects"
        >

          {/* Animated Bubbles */}
          <div className="bubble bubble-1"></div>
          <div className="bubble bubble-2"></div>
          <div className="bubble bubble-3"></div>
          <div className="bubble bubble-4"></div>
          <div className="bubble bubble-5"></div>
          <div className="bubble bubble-6"></div>
          <div className="bubble bubble-7"></div>
          <div className="bubble bubble-8"></div>

          {/* WAVE */}
          <svg
            className="wave-container"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >

            <defs>

              <linearGradient
                id="waveGradient1"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  stopColor="#ff1493"
                  stopOpacity="0.8"
                />
                <stop
                  offset="100%"
                  stopColor="#ff1493"
                  stopOpacity="0"
                />
              </linearGradient>

              <linearGradient
                id="waveGradient2"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  stopColor="#00d4ff"
                  stopOpacity="0.8"
                />
                <stop
                  offset="100%"
                  stopColor="#00d4ff"
                  stopOpacity="0"
                />
              </linearGradient>

              <linearGradient
                id="waveGradient3"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  stopColor="#7c3aed"
                  stopOpacity="0.6"
                />
                <stop
                  offset="100%"
                  stopColor="#7c3aed"
                  stopOpacity="0"
                />
              </linearGradient>

            </defs>

            <path
              className="wave wave-1"
              d="M0,60 Q300,20 600,60 T1200,60"
              fill="none"
              stroke="url(#waveGradient1)"
              strokeWidth="3"
            />

            <path
              className="wave wave-2"
              d="M0,60 Q300,100 600,60 T1200,60"
              fill="none"
              stroke="url(#waveGradient2)"
              strokeWidth="3"
            />

            <path
              className="wave wave-3"
              d="M0,60 Q300,40 600,60 T1200,60"
              fill="none"
              stroke="url(#waveGradient3)"
              strokeWidth="2"
            />

          </svg>

          <div className="benefits-container container">

            <div className="benefits-header">

              <h2>Featured Projects</h2>

              <p>
                Real-world applications built with modern
                technologies and best practices
              </p>

            </div>

            <div className="benefits-grid">

              {projects.map((project) => (
                <div
                  className="benefit-card"
                  key={project.title}
                >

                  <div className="benefit-icon">
                    {project.icon}
                  </div>

                  <h3>{project.title}</h3>

                  <p>{project.text}</p>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Live Demo →
                  </a>

                </div>
              ))}

            </div>

          </div>

        </section>

        {/* CONTACT SECTION */}
        <section
          className="process container"
          id="contact"
        >

          <div className="section-heading center">

            <span className="eyebrow">
              Get In Touch
            </span>

            <h2>
              Let's connect and build something amazing
            </h2>

          </div>

          <div className="contact-section">

            <div className="contact-item">

              <h3>📧 Email</h3>

              <a
                href={`mailto:${personalInfo.email}`}
              >
                {personalInfo.email}
              </a>

            </div>

            <div className="contact-item">

              <h3>📱 Phone</h3>

              <a
                href={`tel:${personalInfo.phone}`}
              >
                {personalInfo.phone}
              </a>

            </div>

            <div className="contact-item">

              <h3>💼 LinkedIn</h3>

              <a
                href={`https://linkedin.com/in/${personalInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {personalInfo.linkedin}
              </a>

            </div>

            <div className="contact-item">

              <h3>🐙 GitHub</h3>

              <a
                href={`https://github.com/${personalInfo.github}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {personalInfo.github}
              </a>

            </div>

          </div>

        </section>

      </main>

      {/* FOOTER */}
      <footer
        className="site-footer container"
        id="contact-footer"
      >

        <div className="brand-wrap">

          <div className="brand-mark">
            DP
          </div>

          <span>
            {personalInfo.name}
          </span>

        </div>

        <p>
          © 2026 {personalInfo.name} — Frontend Developer & React Enthusiast
        </p>

      </footer>

    </div>
  );
}

export default App;