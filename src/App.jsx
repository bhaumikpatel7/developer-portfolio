import { useEffect, useState } from 'react';

const projects = [
  {
    title: 'QR Code Generator',
    summary:
      'Built a QR code generator with JavaScript, Axios, and an external API, including download support for saving generated codes offline.',
    stack: 'JavaScript, Axios, External API',
  },
  {
    title: 'Random GIF Generator',
    summary:
      'Created a React-based app that fetches and displays random GIFs from the Giphy API with a simple interface and optimized API calls.',
    stack: 'React, JavaScript, Giphy API',
  },
  {
    title: 'Tic Tac Toe',
    summary:
      'Developed a component-driven React game with stateful player turns, win detection, and a lightweight interface using JSX and CSS.',
    stack: 'React, JSX, CSS',
  },
];

const experience = [
  {
    period: 'Sept 2022 - Present',
    role: 'Software Engineer',
    company: 'Manulife · Toronto, CA',
    detail:
      'Develop and maintain responsive ReactJS applications, integrate Redux and React Hooks for scalable state management, and build web experiences aligned with UX wireframes and responsive design standards.',
  },
  {
    period: 'Sept 2019 - May 2021',
    role: 'Software Engineer',
    company: 'Darvex Technolabs · Ahmedabad, IN',
    detail:
      'Built full-stack applications with Next.js, React, Node.js, Express, MongoDB, and Tailwind CSS, with a focus on SSR performance, API efficiency, reusable UI, and automated testing.',
  },
];

const skills = [
  'React',
  'Next.js',
  'JavaScript',
  'TypeScript',
  'Node.js',
  'Python',
  'Java',
  'Redux',
  'Express.js',
  'Vue.js',
  'Angular',
  'Bootstrap',
  'Tailwind CSS',
  'REST APIs',
  'MongoDB',
  'MySQL',
  'MS SQL',
  'Oracle',
  'Azure',
  'AWS',
  'GCP',
  'Jest',
  'React Testing Library',
];

const education = [
  {
    period: 'May 2021 - Sept 2022',
    title: 'Masters in Electrical and Computer Engineering',
    place: 'University of Windsor',
  },
  {
    period: 'May 2016 - Sept 2020',
    title: 'Bachelors in Electronics and Communication Engineering',
    place: 'Gujarat Technological University',
  },
];

const certifications = [
  {
    title: 'Java Web Development for PHP and Node.js',
    href: 'https://www.udemy.com/certificate/UC-b7672478-6499-4cfa-ade0-06b81c1cbd1f/',
  },
  {
    title: 'Open Source Software Development, Linux and Git',
    href: 'https://www.coursera.org/account/accomplishments/specialization/QFQBA6PT3FUL',
  },
  {
    title: 'Web Design for Everybody: Basics of Web Development',
    href: 'https://www.coursera.org/account/accomplishments/specialization/7DFV67T5V5CL',
  },
  {
    title: 'Python 3 Programming',
    href: 'https://www.coursera.org/account/accomplishments/specialization/UBTMJP5FSFEL',
  },
];

const highlights = [
  'React and TypeScript development for production web applications',
  'REST API integration and scalable frontend architecture',
  'Responsive UI implementation from UX wireframes and mockups',
];

const focusAreas = [
  'Frontend Engineering',
  'Full-Stack Web Development',
  'Responsive UI Systems',
  'API Integration',
  'REST APIs',
];

const THEME_KEY = 'portfolio-theme';

function getInitialTheme() {
  if (typeof window === 'undefined') {
    return 'dark';
  }

  const savedTheme = window.localStorage.getItem(THEME_KEY);
  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: light)').matches
    ? 'light'
    : 'dark';
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((currentTheme) =>
      currentTheme === 'dark' ? 'light' : 'dark',
    );
  }

  return (
    <div className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="hero">
        <nav className="topbar">
          <span className="brand">BHAUMIK PATEL</span>
          <div className="nav-group">
            <div className="nav-links">
              <a href="#projects">Projects</a>
              <a href="#experience">Experience</a>
              <a href="#education">Education</a>
              <a href="#contact">Contact</a>
            </div>
            <button
              className="theme-toggle"
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${
                theme === 'dark' ? 'light' : 'dark'
              } mode`}
            >
              <span>{theme === 'dark' ? 'Light mode' : 'Dark mode'}</span>
            </button>
          </div>
        </nav>

        <section className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Software Engineer · React Developer</p>
            <p className="intro">
              I&apos;m BHAUMIK PATEL, a software engineer based in Toronto with
              experience across React, Next.js, Node.js, TypeScript, and cloud
              platforms. I focus on turning product requirements into fast,
              maintainable, user-friendly applications.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                View Projects
              </a>
              <a className="button secondary" href="#contact">
                Contact Me
              </a>
            </div>
          </div>

          <aside className="hero-card">
            <p className="card-label">Core Focus</p>
            <ul>
              {highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </aside>
        </section>
      </header>

      <main>
        <section className="metrics">
          <article>
            <strong>3+</strong>
            <span>Years of software engineering experience</span>
          </article>
          <article>
            <strong>10+</strong>
            <span>Core technologies across frontend, backend, and cloud</span>
          </article>
          <article>
            <strong>4</strong>
            <span>Professional certifications in web and software development</span>
          </article>
        </section>

        <section className="section focus-section">
          <div className="focus-strip">
            {focusAreas.map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">Selected Work</p>
            <h2>Projects that show practical frontend and full-stack execution.</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <p className="project-stack">{project.stack}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section split-section" id="experience">
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2>Hands-on work across enterprise products and full-stack delivery.</h2>
          </div>

          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={item.period + item.role}>
                <span>{item.period}</span>
                <div>
                  <h3>{item.role}</h3>
                  <p className="company">{item.company}</p>
                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section split-section">
          <div className="section-heading">
            <p className="eyebrow">Core Skills</p>
            <h2>Frontend, backend, database, testing, and cloud capabilities.</h2>
          </div>
          <div className="skill-cloud">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section className="section split-section" id="education">
          <div className="section-heading">
            <p className="eyebrow">Education</p>
            <h2>Academic foundation in engineering and computer systems.</h2>
          </div>
          <div className="timeline">
            {education.map((item) => (
              <article className="timeline-item" key={item.period + item.title}>
                <span>{item.period}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p className="company">{item.place}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section split-section">
          <div className="section-heading">
            <p className="eyebrow">Certifications</p>
            <h2>Supplemental training across web development and engineering tools.</h2>
          </div>
          <div className="certification-list">
            {certifications.map((item) => (
              <article className="certification-card" key={item.title}>
                <p>{item.title}</p>
                <a
                  className="button secondary certification-link"
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  Verify
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-panel" id="contact">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Let&apos;s build something solid.</h2>
            <p className="contact-copy">
              Toronto, CA
            </p>
          </div>
          <div className="contact-actions">
            <a className="button primary" href="mailto:patel9p3@uwindsor.ca">
              patel9p3@uwindsor.ca
            </a>
            <a className="button primary" href="tel:+12267242478">
              +1 (226) 724-2478
            </a>
            <a
              className="button primary"
              href="https://linkedin.com/in/bhaumik-patel-181124269"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
