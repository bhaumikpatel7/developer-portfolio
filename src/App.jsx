import { useEffect, useState } from 'react';

const projects = [
  {
    title: 'Complete Authentication System',
    summary:
      'Built a secure authentication system with registration, login, logout, protected routes, password hashing, JWT authorization, email verification, and password reset flows.',
    stack: 'Node.js, Express.js, MongoDB, JWT',
  },
  {
    title: 'Full-Stack E-Commerce Website',
    summary:
      'Developed a MERN e-commerce platform with authentication, product listings, cart management, order tracking, responsive UI, and secure Stripe checkout integration.',
    stack: 'MERN Stack, Stripe, Redux',
  },
  {
    title: 'AI-Powered Resume Maker',
    summary:
      'Created an AI-driven resume builder that generates resume summaries, skills, projects, and experience bullet points with ChatGPT API, secure storage, and downloadable templates.',
    stack: 'MERN Stack, ChatGPT API',
  },
];

const experience = [
  {
    period: 'Sept 2022 - Present',
    role: 'Software Engineer',
    company: 'Manulife · Toronto, ON',
    detail:
      'Develop backend services with Node.js, Express.js, RESTful APIs, SQL, authentication workflows, middleware, validation, and JSON integrations while connecting them to React and TypeScript frontends in Agile delivery teams.',
  },
  {
    period: 'Sept 2019 - May 2021',
    role: 'Software Engineer',
    company: 'Darvex Technolabs · Ahmedabad, IN',
    detail:
      'Built full-stack applications with Node.js, Express.js, MongoDB, Mongoose, React.js, Next.js, Tailwind CSS, JWT authentication, CRUD APIs, and MVC-based backend architecture.',
  },
];

const skills = [
  'Node.js',
  'Express.js',
  'RESTful APIs',
  'Authentication',
  'JWT',
  'OAuth',
  'Middleware',
  'MVC Architecture',
  'MongoDB',
  'PostgreSQL',
  'SQL',
  'React',
  'Next.js',
  'JavaScript',
  'TypeScript',
  'Python',
  'Java',
  'Redux',
  'Redux Toolkit',
  'React Hooks',
  'HTML5',
  'CSS3',
  'Tailwind CSS',
  'MySQL',
  'MS SQL Server',
  'Oracle',
  'Azure',
  'AWS',
  'GCP',
  'Docker',
  'CI/CD',
  'Git',
  'GitHub',
  'Jira',
  'Jest',
  'React Testing Library',
  'Postman',
];

const education = [
  {
    period: 'May 2021 - Sept 2022',
    title: 'Master of Engineering, Electrical and Computer Engineering',
    place: 'University of Windsor, Windsor, Canada',
  },
  {
    period: 'May 2016 - Sept 2020',
    title: 'Bachelor of Engineering, Electronics and Communication Engineering',
    place: 'Gujarat Technological University, Gujarat, India',
  },
];

const certifications = [
  {
    title: 'Java Web Development for PHP and Node.js',
    href: 'https://www.udemy.com/certificate/UC-b7672478-6499-4cfa-ade0-06b81c1cbd1f/',
    provider: 'Udemy',
  },
  {
    title: 'Open Source Software Development, Linux and Git',
    href: 'https://www.coursera.org/account/accomplishments/specialization/QFQBA6PT3FUL',
    provider: 'Coursera',
  },
  {
    title: 'Web Design for Everybody: Basics of Web Development',
    href: 'https://www.coursera.org/account/accomplishments/specialization/7DFV67T5V5CL',
    provider: 'Coursera',
  },
  {
    title: 'Python 3 Programming',
    href: 'https://www.coursera.org/account/accomplishments/specialization/UBTMJP5FSFEL',
    provider: 'Coursera',
  },
];

const highlights = [
  'Backend development with Node.js, Express.js, REST APIs, and secure application workflows',
  'Authentication, middleware, validation, and business logic for production-ready services',
  'Database integration across MongoDB, SQL, and scalable API-connected web applications',
];

const focusAreas = [
  'Backend Engineering',
  'Full-Stack Web Development',
  'REST API Development',
  'Authentication Systems',
  'Database Integration',
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
    document.documentElement.style.colorScheme = theme;
    document.documentElement.classList.toggle('dark', theme === 'dark');
    window.localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((currentTheme) =>
      currentTheme === 'dark' ? 'light' : 'dark',
    );
  }

  const panelClassName =
    'rounded-[28px] border border-black/10 bg-white/65 shadow-[0_24px_60px_rgba(92,69,48,0.16)] backdrop-blur-xl dark:border-white/12 dark:bg-white/6 dark:shadow-[0_30px_80px_rgba(0,0,0,0.26)]';
  const sectionHeadingClassName =
    'font-display text-[2.5rem] leading-[0.96] tracking-[-0.02em] text-stone-900 sm:text-[3rem] lg:text-[4.4rem] dark:text-stone-100';
  const eyebrowClassName =
    'text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-stone-600 dark:text-stone-300';
  const buttonBaseClassName =
    'inline-flex min-h-12 items-center justify-center rounded-full border px-5 text-sm font-medium transition duration-200 hover:-translate-y-0.5';
  const primaryButtonClassName = `${buttonBaseClassName} border-transparent bg-[#d45d1f] text-stone-950 dark:bg-[#ff7a3d]`;
  const secondaryButtonClassName = `${buttonBaseClassName} border-stone-900/10 bg-white/50 text-stone-900 dark:border-white/14 dark:bg-transparent dark:text-stone-100`;

  return (
    <div className="relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(255,162,89,0.22),transparent_30%),linear-gradient(150deg,#fff7ee_0%,#f6ecdf_42%,#e8f0fb_100%)] px-4 py-6 font-sans text-stone-900 antialiased sm:px-6 lg:px-8 dark:bg-[radial-gradient(circle_at_top,rgba(221,94,49,0.18),transparent_28%),linear-gradient(145deg,#12100d_0%,#181512_45%,#0e141b_100%)] dark:text-stone-100">
      <div className="pointer-events-none absolute right-[-40px] top-[120px] h-60 w-60 rounded-full bg-[rgba(255,122,61,0.2)] blur-3xl dark:opacity-45" />
      <div className="pointer-events-none absolute left-[-80px] top-[40%] h-80 w-80 rounded-full bg-[rgba(88,168,255,0.12)] blur-3xl dark:opacity-45" />

      <header className="relative z-10 mx-auto max-w-[1160px]">
        <nav className="flex flex-col items-start justify-between gap-4 py-4 pb-7 md:flex-row md:items-center">
          <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-stone-900 dark:text-stone-100">
            BHAUMIK PATEL
          </span>
          <div className="flex w-full flex-col items-start gap-4 md:w-auto md:flex-row md:items-center">
            <div className="flex flex-wrap gap-5 text-sm text-stone-700 dark:text-stone-300">
              <a href="#projects">Projects</a>
              <a href="#experience">Experience</a>
              <a href="#education">Education</a>
              <a href="#contact">Contact</a>
            </div>
            <button
              className="inline-flex min-h-11 items-center rounded-full border border-black/10 bg-white/60 px-4 text-sm font-medium text-stone-900 transition duration-200 hover:-translate-y-0.5 dark:border-white/14 dark:bg-white/8 dark:text-stone-100"
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

        <section className="grid gap-7 py-10 lg:grid-cols-[1.45fr_0.85fr] lg:items-stretch">
          <div className={`${panelClassName} rounded-[36px] p-8 sm:p-10`}>
            <p className={eyebrowClassName}>Software Engineer · Backend-Focused Full-Stack Developer</p>
            <p className="mt-6 max-w-[56ch] text-base leading-8 text-stone-700 sm:text-[1.05rem] dark:text-stone-300">
              I&apos;m BHAUMIK PATEL, a software engineer in Toronto with full-stack
              experience and a strong backend focus across Node.js, Express.js,
              RESTful APIs, authentication workflows, database integration, and
              secure application features, backed by modern frontend delivery with
              React, Next.js, Redux, and TypeScript.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a className={primaryButtonClassName} href="#projects">
                View Projects
              </a>
              <a className={secondaryButtonClassName} href="#contact">
                Contact Me
              </a>
            </div>
          </div>

          <aside className={`${panelClassName} self-end p-7`}>
            <p className={eyebrowClassName}>Core Focus</p>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-stone-700 dark:text-stone-300">
              {highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </aside>
        </section>
      </header>

      <main className="relative z-10 mx-auto max-w-[1160px]">
        <section className="mt-6 grid gap-4 md:grid-cols-3">
          <article className={`${panelClassName} rounded-3xl p-6`}>
            <strong className="mb-2 block text-[2.35rem] text-stone-900 dark:text-stone-100">4+</strong>
            <span className="text-sm leading-7 text-stone-700 dark:text-stone-300">Years of software engineering experience</span>
          </article>
          <article className={`${panelClassName} rounded-3xl p-6`}>
            <strong className="mb-2 block text-[2.35rem] text-stone-900 dark:text-stone-100">25+</strong>
            <span className="text-sm leading-7 text-stone-700 dark:text-stone-300">Technologies across backend, frontend, databases, cloud, and testing</span>
          </article>
          <article className={`${panelClassName} rounded-3xl p-6`}>
            <strong className="mb-2 block text-[2.35rem] text-stone-900 dark:text-stone-100">4</strong>
            <span className="text-sm leading-7 text-stone-700 dark:text-stone-300">Professional certifications in web and software development</span>
          </article>
        </section>

        <section className="pt-7">
          <div className="flex flex-wrap gap-3">
            {focusAreas.map((area) => (
              <span
                className="rounded-full border border-black/10 bg-white/70 px-4 py-3 text-sm font-medium text-[#8e4618] dark:border-white/12 dark:bg-white/8 dark:text-[#ffc9a8]"
                key={area}
              >
                {area}
              </span>
            ))}
          </div>
        </section>

        <section className="pt-24" id="projects">
          <div className="mb-7 max-w-[720px]">
            <p className={eyebrowClassName}>Selected Work</p>
            <h2 className={sectionHeadingClassName}>Projects that show practical backend and full-stack execution.</h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {projects.map((project) => (
              <article className={`${panelClassName} p-7`} key={project.title}>
                <p className={eyebrowClassName}>{project.stack}</p>
                <h3 className="mt-3 text-[1.4rem] font-semibold text-stone-900 dark:text-stone-100">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-stone-700 dark:text-stone-300">{project.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 pt-24 lg:grid-cols-[0.9fr_1.1fr]" id="experience">
          <div className="max-w-[720px]">
            <p className={eyebrowClassName}>Experience</p>
            <h2 className={sectionHeadingClassName}>Hands-on work across backend services, APIs, and full-stack delivery.</h2>
          </div>

          <div className="grid gap-4">
            {experience.map((item) => (
              <article className={`${panelClassName} grid gap-4 p-6 md:grid-cols-[160px_1fr]`} key={item.period + item.role}>
                <span className="text-sm font-medium text-stone-700 dark:text-stone-300">{item.period}</span>
                <div>
                  <h3 className="text-[1.4rem] font-semibold text-stone-900 dark:text-stone-100">{item.role}</h3>
                  <p className="mt-1 text-sm text-stone-700 dark:text-stone-300">{item.company}</p>
                  <p className="mt-3 text-sm leading-7 text-stone-700 dark:text-stone-300">{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 pt-24 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-[720px]">
            <p className={eyebrowClassName}>Core Skills</p>
            <h2 className={sectionHeadingClassName}>Backend, frontend, database, testing, and cloud capabilities.</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                className="rounded-full border border-black/10 bg-white/55 px-4 py-3 text-sm text-stone-800 dark:border-white/12 dark:bg-white/4 dark:text-stone-100"
                key={skill}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="grid gap-8 pt-24 lg:grid-cols-[0.9fr_1.1fr]" id="education">
          <div className="max-w-[720px]">
            <p className={eyebrowClassName}>Education</p>
            <h2 className={sectionHeadingClassName}>Academic foundation in engineering and computer systems.</h2>
          </div>
          <div className="grid gap-4">
            {education.map((item) => (
              <article className={`${panelClassName} grid gap-4 p-6 md:grid-cols-[160px_1fr]`} key={item.period + item.title}>
                <span className="text-sm font-medium text-stone-700 dark:text-stone-300">{item.period}</span>
                <div>
                  <h3 className="text-[1.4rem] font-semibold text-stone-900 dark:text-stone-100">{item.title}</h3>
                  <p className="mt-1 text-sm text-stone-700 dark:text-stone-300">{item.place}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 pt-24 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-[720px]">
            <p className={eyebrowClassName}>Certifications</p>
            <h2 className={sectionHeadingClassName}>Supplemental training across web development and engineering tools.</h2>
          </div>
          <div className="grid gap-4">
            {certifications.map((item) => (
              <article
                className={`${panelClassName} flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between`}
                key={item.title}
              >
                <p className="flex-1 text-sm leading-7 text-stone-700 dark:text-stone-300">{item.title}</p>
                <div className="flex flex-wrap items-center gap-3 md:justify-end">
                  <span
                    className={`inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-2 text-sm font-medium dark:border-white/12 dark:bg-white/8 ${
                      item.provider === 'Coursera'
                        ? 'text-[#0056d2] dark:text-stone-100'
                        : 'text-[#a435f0] dark:text-stone-100'
                    }`}
                    aria-label={item.provider}
                  >
                    <span
                      className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-[0.75rem] font-bold text-white ${
                        item.provider === 'Coursera' ? 'bg-[#0056d2]' : 'bg-[#a435f0]'
                      }`}
                    >
                      {item.provider === 'Coursera' ? 'C' : 'U'}
                    </span>
                    <span>{item.provider}</span>
                  </span>
                  <a
                    className={secondaryButtonClassName}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Verify
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={`${panelClassName} mt-24 mb-7 flex flex-col gap-6 rounded-[32px] p-8 lg:flex-row lg:items-center lg:justify-between`} id="contact">
          <div>
            <p className={eyebrowClassName}>Contact</p>
            <h2 className="font-display text-[2.5rem] leading-[0.96] tracking-[-0.02em] text-stone-900 dark:text-stone-100">
              Let&apos;s build something solid.
            </h2>
            <p className="mt-2 text-sm leading-7 text-stone-700 dark:text-stone-300">Toronto, ON</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a className={primaryButtonClassName} href="mailto:bhaumikpatel2705@gmail.com">
              bhaumikpatel2705@gmail.com
            </a>
            <a className={primaryButtonClassName} href="tel:+12267242478">
              +1 (226) 724-2478
            </a>
            <a
              className={primaryButtonClassName}
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
