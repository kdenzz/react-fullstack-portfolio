import { useEffect, useRef, useState } from "react";
import blackboxImage from "../assets/images/projects/Blackbox.png";
import onerootImage from "../assets/images/projects/Oneroot.png";
import unprojectImage from "../assets/images/projects/Unproject.png";
import wooPluginImage from "../assets/images/projects/WooPlugin.png";

const projects = [
  {
    id: "blackbox",
    category: "web",
    image: blackboxImage,
    imageAlt: "BlackBox product and company website",
    mediaLabel: "CURRENT ROLE",
    caption: "PRODUCT DEVELOPMENT / 01",
    kicker: "SOFTWARE ENGINEER · FREELANCE",
    title: "BlackBox",
    description:
      "Freelance full-stack development on client Android apps and websites, building product features across the interface, application logic, and data.",
    tags: ["React", "Node.js", "Product engineering"],
    href: "https://blackbox-bixa.vercel.app",
    linkText: "Visit BlackBox",
    external: true,
    featured: true,
  },
  {
    id: "oneroot",
    category: "mobile",
    image: onerootImage,
    imageAlt: "Oneroot marketplace and farmer marketplace mobile apps",
    mediaLabel: "2 APPS ON GOOGLE PLAY",
    caption: "MOBILE PRODUCTS / 02",
    kicker: "MOBILE · FULL STACK",
    title: "Oneroot Apps",
    description:
      "Led a four-person team relaunching the agritech platform, building marketplace flows, Node.js APIs, and React dashboards. Markhet and Markhet Farmer reached 2,000+ users with 4.4 and 4.7 star ratings.",
    tags: ["React Native", "Node.js", "Express", "OpenCV"],
    href: "#contact",
    linkText: "Ask me about the apps",
    external: false,
    offset: true,
  },
  {
    id: "woo-plugin-wizard",
    category: "tools",
    image: wooPluginImage,
    imageAlt: "Woo Plugin Wizard AI-powered plugin generator",
    mediaLabel: "AI-POWERED DEVELOPER TOOL",
    caption: "PLUGIN GENERATOR / 03",
    kicker: "AI · FULL STACK",
    title: "Woo Plugin Wizard",
    description:
      "A full-stack app that turns a plain-English prompt into an installable WooCommerce plugin using Gemini, with a Monaco editor to review and edit generated code.",
    tags: ["React", "Vite", "Node.js", "Gemini API"],
    href: "https://woocomerce-gemini.vercel.app",
    linkText: "Explore the tool",
    external: true,
  },
  {
    id: "unproject",
    category: "web",
    image: unprojectImage,
    imageAlt: "Unproject multi-user VR 3D design tool",
    mediaLabel: "REAL-TIME MULTI-USER PRODUCT",
    caption: "SPATIAL DESIGN / 04",
    kicker: "FOUNDING TEAM · REAL-TIME SYSTEMS",
    title: "Unproject",
    description:
      "Built real-time multi-user synchronization for a VR 3D design tool, replicating object state and presence across clients over Photon and WebSockets.",
    tags: ["WebSockets", "Photon", "Real-time sync"],
    href: "https://www.unproject.ai",
    linkText: "Visit Unproject",
    external: true,
    offset: true,
  },
];

const filters = [
  { id: "all", label: "All work", count: "04" },
  { id: "web", label: "Web", count: "02" },
  { id: "mobile", label: "Mobile", count: "01" },
  { id: "tools", label: "Tools", count: "01" },
];

const experience = [
  {
    date: "JUN 2026 — PRESENT",
    role: "Software Engineer",
    specialty: "Freelance",
    company: "BlackBox",
    location: "Remote",
    description: "Full-stack development on client Android apps and websites.",
  },
  {
    date: "JUN 2025 — JUN 2026",
    role: "Software Engineer",
    specialty: "React Native",
    company: "OneRoot (ENP Farms)",
    location: "Bengaluru",
    description:
      "Led the mobile relaunch, built the Node.js/Express backend and React dashboards, and co-developed a Python/OpenCV produce-grading model with 80% precision.",
  },
  {
    date: "JAN 2024 — JUN 2025",
    role: "Software Engineer",
    specialty: "Unity / VR",
    company: "Unproject",
    location: "Remote · Founding team",
    description:
      "One of six founding team members at a Silicon Valley startup that raised $250K. Built multi-user sync and product features optimized for 60 fps on standalone hardware.",
  },
  {
    date: "MAR 2023 — MAR 2024",
    role: "Software Development Engineer",
    company: "BlackBox",
    description: "Built three Android apps and multiple database-driven websites end to end.",
  },
  {
    date: "JAN 2022 — DEC 2022",
    role: "UI Animator & Integration",
    company: "Drypto",
    location: "Remote",
    description:
      "Designed After Effects UI animations and integrated them into a React web app, synchronized with product logic.",
  },
];

const stack = [
  {
    index: "01 / INTERFACE",
    title: "Frontend",
    description: "React · React Native · TypeScript · JavaScript · HTML · CSS · Tailwind CSS",
    glyph: "◫",
    primary: true,
  },
  {
    index: "02 / SERVICES",
    title: "Backend",
    description: "Node.js · Express · REST APIs · WebSockets · Python · FastAPI",
    glyph: "{ }",
  },
  {
    index: "03 / PERSISTENCE",
    title: "Data",
    description: "MongoDB · PostgreSQL · Supabase · Redis",
    glyph: "◉",
  },
  {
    index: "04 / DELIVERY",
    title: "Workflow",
    description: "Git & GitHub · Docker · Postman · Linux · Vercel · Google Play Console",
    glyph: "↗",
  },
];

const caseStudyTabs = [
  { id: "product", label: "01 / PRODUCT", title: "THE PRODUCT" },
  { id: "system", label: "02 / SYSTEM", title: "THE SYSTEM" },
  { id: "decisions", label: "03 / DECISIONS", title: "THE DECISIONS" },
];

const initialReactTasks = [
  { id: 1, title: "Compose a reusable card", type: "COMPONENT", complete: true },
  { id: 2, title: "Connect the loading state", type: "INTERACTION", complete: true },
  { id: 3, title: "Check the keyboard flow", type: "ACCESSIBILITY", complete: false },
];

function BootScreen({ visible, leaving, progress, status }) {
  return (
    <div
      className={`boot-screen${leaving ? " is-leaving" : ""}`}
      role="status"
      aria-live="polite"
      hidden={!visible}
    >
      <div className="boot-card">
        <div className="boot-brand">
          <span className="brand-mark">K</span>
          <span>
            KARAN<span className="brand-muted">.DEV</span>
          </span>
        </div>
        <p className="boot-kicker">PORTFOLIO SYSTEM // 01</p>
        <p className="boot-title">
          Building your
          <br />
          <span>workspace.</span>
        </p>
        <div className="boot-track" aria-hidden="true">
          <span className="boot-progress" style={{ width: `${progress}%` }} />
        </div>
        <div className="boot-status">
          <span className="status-pulse" />
          <span>{status}</span>
          <span>{String(progress).padStart(2, "0")}%</span>
        </div>
        <div className="boot-steps" aria-hidden="true">
          <span>UI</span>
          <span>PRODUCTS</span>
          <span>READY</span>
        </div>
      </div>
      <span className="boot-coordinate" aria-hidden="true">
        BUILD 001 / FULL STACK
      </span>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const externalProps = project.external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <article
      className={[
        "project-card",
        project.featured && "project-featured",
        project.offset && "project-offset",
      ]
        .filter(Boolean)
        .join(" ")}
      data-category={project.category}
    >
      <a
        className="project-media"
        href={project.href}
        aria-label={
          project.external
            ? `Visit ${project.title}`
            : `Ask about ${project.title}`
        }
        {...externalProps}
      >
        <img src={project.image} alt={project.imageAlt} loading="lazy" />
        <span className="media-shade" />
        <span className="media-label">
          {project.featured && <span className="live-dot" />}
          {project.mediaLabel}
        </span>
        <span className="media-open" aria-hidden="true">
          ↗
        </span>
        <span className="media-caption">{project.caption}</span>
      </a>
      <div className="project-details">
        <div className="project-heading">
          <div>
            <p className="project-kicker">{project.kicker}</p>
            <h3>{project.title}</h3>
          </div>
          <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
        </div>
        <p>{project.description}</p>
        <div className="tag-list">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <a className="project-link" href={project.href} {...externalProps}>
          {project.linkText} <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}

function CaseStudy({ activeTab, onSelectTab, tabRefs }) {
  function handleTabKeyDown(event, index) {
    let nextIndex;

    if (event.key === "ArrowRight") nextIndex = (index + 1) % caseStudyTabs.length;
    if (event.key === "ArrowLeft") {
      nextIndex = (index - 1 + caseStudyTabs.length) % caseStudyTabs.length;
    }
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = caseStudyTabs.length - 1;
    if (nextIndex === undefined) return;

    event.preventDefault();
    onSelectTab(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  }

  return (
    <div className="case-study" aria-labelledby="case-study-title">
      <div className="case-study-heading">
        <div>
          <p className="eyebrow">
            <span className="section-index">FIELD NOTES / 01</span> INSIDE THE BUILD
          </p>
          <h3 id="case-study-title">
            A marketplace, <span>reimagined.</span>
          </h3>
        </div>
        <p>OneRoot · Mobile product relaunch</p>
      </div>

      <div className="case-study-tabs" role="tablist" aria-label="OneRoot case study views">
        {caseStudyTabs.map((tab, index) => (
          <button
            key={tab.id}
            id={`case-tab-${tab.id}`}
            ref={(element) => {
              tabRefs.current[index] = element;
            }}
            className={`case-study-tab${activeTab === index ? " is-active" : ""}`}
            type="button"
            role="tab"
            aria-selected={activeTab === index}
            aria-controls={`case-panel-${tab.id}`}
            tabIndex={activeTab === index ? 0 : -1}
            onClick={() => onSelectTab(index)}
            onKeyDown={(event) => handleTabKeyDown(event, index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="case-study-panels">
        <article
          id="case-panel-product"
          className="case-study-panel"
          role="tabpanel"
          aria-labelledby="case-tab-product"
          tabIndex={0}
          hidden={activeTab !== 0}
        >
          <div className="case-study-copy">
            <p className="case-study-label">{caseStudyTabs[0].title}</p>
            <h4>Two apps. One connected marketplace.</h4>
            <p>
              Led a four-person team relaunching the agritech platform, building
              marketplace flows across Markhet and Markhet Farmer, supported by
              React dashboards.
            </p>
            <div className="tag-list">
              <span>React Native</span>
              <span>React</span>
              <span>Node.js</span>
            </div>
          </div>
          <figure className="case-study-visual">
            <img
              src={onerootImage}
              alt="OneRoot marketplace and farmer marketplace mobile apps"
              loading="lazy"
            />
            <figcaption>
              <span>MARKHET + MARKHET FARMER</span>
              <span>PRODUCT RELAUNCH / 2025</span>
            </figcaption>
          </figure>
        </article>

        <article
          id="case-panel-system"
          className="case-study-panel"
          role="tabpanel"
          aria-labelledby="case-tab-system"
          tabIndex={0}
          hidden={activeTab !== 1}
        >
          <div className="case-study-copy">
            <p className="case-study-label">{caseStudyTabs[1].title}</p>
            <h4>Product surfaces, connected to the services behind them.</h4>
            <p>
              Mobile marketplace flows and React dashboards worked with Node.js
              and Express APIs to support the relaunch.
            </p>
          </div>
          <ol className="architecture-flow" aria-label="OneRoot system flow">
            <li>
              <span>01 / INTERFACES</span>
              <strong>
                React Native apps
                <br />
                React dashboards
              </strong>
            </li>
            <li className="architecture-connector" aria-hidden="true">
              ↓
            </li>
            <li>
              <span>02 / SERVICES</span>
              <strong>
                Node.js
                <br />
                Express APIs
              </strong>
            </li>
            <li className="architecture-connector" aria-hidden="true">
              ↓
            </li>
            <li>
              <span>03 / PRODUCT</span>
              <strong>
                Marketplace
                <br />
                flows &amp; data
              </strong>
            </li>
          </ol>
        </article>

        <article
          id="case-panel-decisions"
          className="case-study-panel"
          role="tabpanel"
          aria-labelledby="case-tab-decisions"
          tabIndex={0}
          hidden={activeTab !== 2}
        >
          <div className="case-study-copy">
            <p className="case-study-label">{caseStudyTabs[2].title}</p>
            <h4>Relaunch the experience as a team, end to end.</h4>
            <p>
              Coordinated mobile marketplace work with backend APIs and dashboard
              development, connecting the product surfaces around shared workflows.
            </p>
            <p className="case-study-note">
              Contribution: team leadership, mobile flows, APIs, and dashboards.
            </p>
          </div>
          <div className="case-study-results" aria-label="Product results">
            <div>
              <strong>
                2,000<span>+</span>
              </strong>
              <span>users reached</span>
            </div>
            <div>
              <strong>
                4.4 <span>/</span> 4.7
              </strong>
              <span>app ratings</span>
            </div>
            <p>Two apps live on Google Play</p>
          </div>
        </article>
      </div>
    </div>
  );
}

function ReactPlayground() {
  const [tasks, setTasks] = useState(initialReactTasks);
  const nextTaskId = useRef(initialReactTasks.length + 1);
  const completedTasks = tasks.filter((task) => task.complete).length;
  const progress = tasks.length
    ? Math.round((completedTasks / tasks.length) * 100)
    : 0;

  function toggleTask(taskId) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, complete: !task.complete } : task,
      ),
    );
  }

  function addTask() {
    const id = nextTaskId.current;
    nextTaskId.current += 1;
    setTasks((currentTasks) => [
      ...currentTasks,
      {
        id,
        title: `Polish interaction ${String(id).padStart(2, "0")}`,
        type: "NEW COMPONENT",
        complete: false,
      },
    ]);
  }

  function clearCompleted() {
    setTasks((currentTasks) => currentTasks.filter((task) => !task.complete));
  }

  return (
    <div className="react-playground">
      <div className="react-playground-bar">
        <span className="react-playground-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <span>REACT PLAYGROUND / 001</span>
        <span className="react-live"><span className="live-dot" /> LIVE</span>
      </div>
      <div className="react-playground-body">
        <div className="react-playground-heading">
          <div>
            <p className="react-playground-label">SPRINT / UI POLISH</p>
            <h3>Launch checklist</h3>
          </div>
          <span className="react-playground-count" aria-live="polite">
            {completedTasks} / {tasks.length} DONE
          </span>
        </div>
        <div
          className="react-playground-progress"
          role="progressbar"
          aria-label="Checklist progress"
          aria-valuemin={0}
          aria-valuemax={Math.max(tasks.length, 1)}
          aria-valuenow={completedTasks}
          aria-valuetext={`${completedTasks} of ${tasks.length} tasks complete`}
        >
          <span style={{ width: `${progress}%` }} />
        </div>
        <ul className="react-task-list">
          {tasks.map((task) => (
            <li className={`react-task${task.complete ? " is-complete" : ""}`} key={task.id}>
              <button
                className="react-task-button"
                type="button"
                aria-pressed={task.complete}
                aria-label={task.title}
                onClick={() => toggleTask(task.id)}
              >
                <span className="react-task-check" aria-hidden="true">
                  {task.complete ? "✓" : ""}
                </span>
                <span className="react-task-title">{task.title}</span>
                <span className="react-task-type">{task.type}</span>
              </button>
            </li>
          ))}
        </ul>
        <div className="react-playground-actions">
          <button className="react-playground-add" type="button" onClick={addTask}>
            <span aria-hidden="true">+</span> Add a task
          </button>
          <button
            className="react-playground-clear"
            type="button"
            onClick={clearCompleted}
            disabled={completedTasks === 0}
          >
            Clear completed
          </button>
        </div>
        <div className="react-playground-foot" aria-hidden="true">
          <span>STATE → RENDER</span>
          <span>{progress}% COMPLETE</span>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeCaseTab, setActiveCaseTab] = useState(0);
  const [zoneIndex, setZoneIndex] = useState(0);
  const [bootVisible, setBootVisible] = useState(false);
  const [bootLeaving, setBootLeaving] = useState(false);
  const [bootProgress, setBootProgress] = useState(0);
  const [bootStatus, setBootStatus] = useState("Preparing the interface");
  const menuToggleRef = useRef(null);
  const handoffFillRef = useRef(null);
  const caseTabRefs = useRef([]);

  const visibleProjects = projects.filter(
    (project) => activeFilter === "all" || project.category === activeFilter,
  );
  const showCaseStudy = activeFilter === "all" || activeFilter === "mobile";

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    let cancelled = false;
    const timers = [];
    const delay = (duration) =>
      new Promise((resolve) => {
        timers.push(window.setTimeout(resolve, duration));
      });

    const setBootStep = (progress, status) => {
      if (cancelled) return;
      setBootProgress(progress);
      setBootStatus(status);
    };

    async function runBootSequence() {
      const startedAt = performance.now();
      setBootVisible(true);
      setBootStep(18, "Preparing the interface");
      await delay(70);
      if (cancelled) return;

      setBootStep(54, "Loading product visuals");
      const heroImage = document.querySelector(".hero-image img");
      const imageReady = heroImage?.complete
        ? Promise.resolve()
        : new Promise((resolve) => {
            if (!heroImage) {
              resolve();
              return;
            }
            heroImage.addEventListener("load", resolve, { once: true });
            heroImage.addEventListener("error", resolve, { once: true });
          });
      const fontsReady = document.fonts ? document.fonts.ready : Promise.resolve();

      setBootStep(82, "Finishing your workspace");
      await Promise.race([
        Promise.all([imageReady, fontsReady]),
        delay(1600),
      ]);
      if (cancelled) return;

      await delay(Math.max(0, 620 - (performance.now() - startedAt)));
      if (cancelled) return;

      setBootStep(100, "Workspace ready");
      setBootLeaving(true);
      await delay(400);
      if (!cancelled) setBootVisible(false);
    }

    void runBootSequence();
    return () => {
      cancelled = true;
      timers.forEach(window.clearTimeout);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;

    function handleKeyDown(event) {
      if (event.key !== "Escape") return;
      setMenuOpen(false);
      menuToggleRef.current?.focus();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    const zones = Array.from(document.querySelectorAll("main [data-zone]"));
    const workSection = document.querySelector("#work");
    let frameId = 0;

    function updateScrollState() {
      frameId = 0;
      const focusLine = window.innerHeight * 0.48;
      let activeIndex = 0;

      zones.forEach((section, index) => {
        if (section.getBoundingClientRect().top <= focusLine) activeIndex = index;
      });
      setZoneIndex((current) => (current === activeIndex ? current : activeIndex));

      if (workSection && handoffFillRef.current) {
        const bounds = workSection.getBoundingClientRect();
        const distance = window.innerHeight + bounds.height;
        const progress = Math.min(
          1,
          Math.max(0, (window.innerHeight - bounds.top) / distance),
        );
        handoffFillRef.current.style.transform = `scaleX(${progress})`;
      }
    }

    function requestUpdate() {
      if (frameId) return;
      frameId = window.requestAnimationFrame(updateScrollState);
    }

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    requestUpdate();

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  useEffect(() => {
    const workSection = document.querySelector("#work");
    if (!workSection || !handoffFillRef.current) return;

    const bounds = workSection.getBoundingClientRect();
    const distance = window.innerHeight + bounds.height;
    const progress = Math.min(
      1,
      Math.max(0, (window.innerHeight - bounds.top) / distance),
    );
    handoffFillRef.current.style.transform = `scaleX(${progress})`;
  }, [activeFilter, activeCaseTab]);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    document
      .querySelectorAll(".project-card, .approach-panel, .experience-item, .stack-card")
      .forEach((element) => {
        element.classList.add("reveal-ready");
        observer.observe(element);
      });
    document.documentElement.classList.add("has-motion");

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("has-motion");
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <BootScreen
        visible={bootVisible}
        leaving={bootLeaving}
        progress={bootProgress}
        status={bootStatus}
      />

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Karan Gupta, home">
          <span className="brand-mark" aria-hidden="true">
            K
          </span>
          <span>
            KARAN<span className="brand-muted">.DEV</span>
          </span>
        </a>
        <button
          ref={menuToggleRef}
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <nav
          className={`site-nav${menuOpen ? " is-open" : ""}`}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          <a href="#work" onClick={() => setMenuOpen(false)}>
            Work
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            Approach
          </a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>
            Experience
          </a>
          <a href="#stack" onClick={() => setMenuOpen(false)}>
            Stack
          </a>
          <a href="#react-lab" onClick={() => setMenuOpen(false)}>
            React lab
          </a>
          <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>
            Let’s talk <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <main id="main">
        <section
          className="hero section-shell"
          id="top"
          aria-labelledby="hero-title"
          data-zone="Workspace"
        >
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> SOFTWARE ENGINEER{" "}
              <span className="eyebrow-divider">/</span> BENGALURU, INDIA
            </p>
            <h1 id="hero-title">
              React interfaces.
              <br />
              <span>Full-stack systems.</span>
            </h1>
            <p className="hero-intro">
              I’m Karan, a software engineer working across React and React
              Native interfaces, Node.js APIs, databases, and real-time
              applications for web and mobile.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                View selected work <span aria-hidden="true">↓</span>
              </a>
              <a className="text-link" href="#stack">
                Technical skills{" "}
                <strong>
                  View toolkit <span aria-hidden="true">↗</span>
                </strong>
              </a>
            </div>
            <div className="hero-meta" aria-label="Areas of expertise">
              <span>
                <b aria-hidden="true">01</b> React Native &amp; React
              </span>
              <span>
                <b aria-hidden="true">02</b> Node.js &amp; real-time systems
              </span>
              <span>
                <b aria-hidden="true">03</b> Mobile, web &amp; product delivery
              </span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-caption">
              <span>
                <span className="live-dot" /> PRODUCT ENGINEERING
              </span>
              <span>STATUS // SHIPPING</span>
            </div>
            <div className="hero-image">
              <img
                src={blackboxImage}
                alt="A responsive product interface built for BlackBox"
                fetchPriority="high"
              />
              <div className="image-wash" />
              <div className="build-card">
                <div className="build-card-top">
                  <span>LIVE BUILD</span>
                  <span className="build-id">KG—001</span>
                </div>
                <p>
                  React interfaces.
                  <br />
                  <strong>Connected systems.</strong>
                </p>
                <div className="build-stack">
                  <span>REACT</span>
                  <span>NODE.JS</span>
                  <span>DATABASE</span>
                </div>
                <div className="build-card-bottom">
                  <span className="status-pulse" /> COMPONENTS → SERVICES{" "}
                  <span aria-hidden="true">↗</span>
                </div>
              </div>
              <span className="visual-index" aria-hidden="true">
                FIG. 01 — PRODUCT IN MOTION
              </span>
            </div>
            <span className="visual-stamp" aria-hidden="true">
              <span>BUILT WITH</span>
              <strong>
                INTENT<span>◆</span>
              </strong>
            </span>
            <span className="visual-side-note" aria-hidden="true">
              SCROLL TO EXPLORE&nbsp; ↓
            </span>
          </div>
          <a className="scroll-cue" href="#work" aria-label="Scroll to selected work">
            <span /> SCROLL TO EXPLORE
          </a>
        </section>

        <section className="proof-strip" aria-label="Experience highlights">
          <div className="proof-item">
            <strong>
              2<span>+</span>
            </strong>
            <span>Years professional experience</span>
          </div>
          <div className="proof-item">
            <strong>
              2,000<span>+</span>
            </strong>
            <span>Marketplace app users</span>
          </div>
          <div className="proof-item">
            <strong>02</strong>
            <span>Apps live on Google Play</span>
          </div>
          <div className="proof-item">
            <strong>
              4.4<span> / </span>4.7
            </strong>
            <span>App store ratings</span>
          </div>
          <p>
            IDEA IN
            <br />
            PRODUCTION<span aria-hidden="true">◆</span>
          </p>
        </section>

        <section
          className="work-section section-shell"
          id="work"
          aria-labelledby="work-title"
          data-zone="Selected work"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                <span className="section-index">01</span> PRODUCTS &amp; BUILDS
              </p>
              <h2 id="work-title">
                Selected <span>work.</span>
              </h2>
            </div>
            <p className="section-aside">
              Real products, considered details,
              <br />
              and the systems that make them work.
            </p>
          </div>

          <div className="filter-row" role="group" aria-label="Filter projects">
            {filters.map((filter) => (
              <button
                key={filter.id}
                className={`filter-button${activeFilter === filter.id ? " is-active" : ""}`}
                type="button"
                data-filter={filter.id}
                aria-pressed={activeFilter === filter.id}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label} <span>{filter.count}</span>
              </button>
            ))}
          </div>

          <div className="project-grid">
            {visibleProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={projects.indexOf(project)}
              />
            ))}
          </div>
          <p className="filter-empty" hidden={visibleProjects.length > 0}>
            No projects in this category yet.
          </p>
          {showCaseStudy && (
            <CaseStudy
              activeTab={activeCaseTab}
              onSelectTab={setActiveCaseTab}
              tabRefs={caseTabRefs}
            />
          )}
          <div className="work-handoff" aria-hidden="true">
            <span>KEEP SCROLLING</span>
            <span className="handoff-rail">
              <i ref={handoffFillRef} />
            </span>
            <span>
              PROJECTS <b>→</b> PRACTICE
            </span>
          </div>
        </section>

        <section
          className="about-section section-shell"
          id="about"
          aria-labelledby="about-title"
          data-zone="Approach"
        >
          <div className="about-copy">
            <p className="eyebrow">
              <span className="section-index">02</span> HOW I BUILD
            </p>
            <h2 id="about-title">
              Engineering
              <br />
              <span>approach.</span>
            </h2>
            <p className="about-lead">
              I develop client-side features with reusable React components,
              explicit state, and responsive layouts.
            </p>
            <p>
              My experience also includes React Native apps, Node.js and Express
              APIs, relational and document databases, WebSockets, and real-time
              synchronization. I work across implementation, integration, and
              testing on web and mobile products.
            </p>
            <p className="education-note">
              <span>EDUCATION</span> Christ University, Bengaluru · Coursework
              toward a BCA (attended until 2023)
            </p>
            <a
              className="text-link about-link"
              href="https://github.com/kdenzz"
              target="_blank"
              rel="noopener noreferrer"
            >
              More builds on GitHub{" "}
              <strong>
                See my profile <span aria-hidden="true">↗</span>
              </strong>
            </a>
          </div>
          <div className="approach-panel">
            <div className="approach-topline">
              <span>IMPLEMENTATION FLOW</span>
              <span>END TO END / 03</span>
            </div>
            <ol className="approach-list">
              <li>
                <span className="approach-number">01</span>
                <div>
                  <h3>Model the interface</h3>
                  <p>Identify user flows, component boundaries, data, and loading or error states.</p>
                </div>
                <span className="approach-mark" aria-hidden="true">
                  ↗
                </span>
              </li>
              <li>
                <span className="approach-number">02</span>
                <div>
                  <h3>Connect the stack</h3>
                  <p>Integrate responsive React views with APIs, persistence, and real-time services.</p>
                </div>
                <span className="approach-mark" aria-hidden="true">
                  ↗
                </span>
              </li>
              <li>
                <span className="approach-number">03</span>
                <div>
                  <h3>Validate behavior</h3>
                  <p>Test key interactions, keyboard access, responsive layouts, and performance.</p>
                </div>
                <span className="approach-mark" aria-hidden="true">
                  ↗
                </span>
              </li>
            </ol>
            <div className="approach-foot">
              <span>DESIGN WITH PURPOSE</span>
              <span>ENGINEER FOR CHANGE</span>
              <span>SHIP WITH CARE</span>
            </div>
          </div>
        </section>

        <section
          className="experience-section section-shell"
          id="experience"
          aria-labelledby="experience-title"
          data-zone="Experience"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                <span className="section-index">03</span> EXPERIENCE
              </p>
              <h2 id="experience-title">
                Engineering
                <br />
                <span>experience.</span>
              </h2>
            </div>
            <p className="section-aside">
              React Native, Node.js, web interfaces,
              <br />
              backend services, and real-time systems.
            </p>
          </div>
          <div className="experience-list">
            {experience.map((item, index) => (
              <article className="experience-item" key={`${item.company}-${item.date}`}>
                <span className="experience-date">{item.date}</span>
                <div className="experience-role">
                  <h3>
                    {item.role} {item.specialty && <span>{item.specialty}</span>}
                  </h3>
                  <p>
                    {item.company}
                    {item.location && (
                      <>
                        {" "}
                        <span>·</span> {item.location}
                      </>
                    )}
                  </p>
                </div>
                <p className="experience-description">{item.description}</p>
                <span className="experience-index">{String(index + 1).padStart(2, "0")}</span>
              </article>
            ))}
          </div>
        </section>

        <section
          className="stack-section section-shell"
          id="stack"
          aria-labelledby="stack-title"
          data-zone="Toolkit"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                <span className="section-index">04</span> TECHNICAL SKILLS
              </p>
              <h2 id="stack-title">
                Languages &amp;
                <br />
                <span>technologies.</span>
              </h2>
            </div>
            <p className="section-aside">
              Frontend, backend, data, and delivery
              <br />
              technologies used across my work.
            </p>
          </div>
          <div className="stack-grid">
            {stack.map((item) => (
              <article
                className={`stack-card${item.primary ? " stack-primary" : ""}`}
                key={item.index}
              >
                <span className="stack-index">{item.index}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="stack-glyph" aria-hidden="true">
                  {item.glyph}
                </span>
              </article>
            ))}
          </div>
        </section>

        <section
          className="react-lab-section section-shell"
          id="react-lab"
          aria-labelledby="react-lab-title"
          data-zone="React lab"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                <span className="section-index">05</span> REACT PLAYGROUND
              </p>
              <h2 id="react-lab-title">
                React UI,
                <br />
                in <span>state.</span>
              </h2>
            </div>
            <p className="section-aside">
              A component-driven checklist with
              <br />
              state-derived progress. Toggle, add, or clear tasks.
            </p>
          </div>
          <div className="react-lab-layout">
            <div className="react-lab-copy">
              <p>
                Task updates are managed with React state. The list, completion
                count, progress bar, and empty-action states render from the same
                data.
              </p>
              <div className="react-lab-skills" aria-label="Frontend concepts demonstrated">
                <span>REUSABLE COMPONENTS</span>
                <span>STATE-DRIVEN UI</span>
                <span>ACCESSIBLE CONTROLS</span>
              </div>
            </div>
            <ReactPlayground />
          </div>
        </section>

        <section
          className="contact-section section-shell"
          id="contact"
          aria-labelledby="contact-title"
          data-zone="Contact"
        >
          <div className="contact-panel">
            <div className="contact-topline">
              <span>
                <span className="live-dot" /> CONTACT CHANNEL OPEN
              </span>
              <span>END OF PAGE // WHAT’S NEXT?</span>
            </div>
            <div className="contact-content">
              <div>
                <p className="eyebrow">CONTACT &amp; PROFILES</p>
                <h2 id="contact-title">
                  Contact
                  <br />
                  &amp; <span>links.</span>
                </h2>
              </div>
              <div className="contact-actions">
                <p>
                  For questions about my work, technical collaboration, or roles,
                  contact me by email or connect through my profiles.
                </p>
                <a className="button button-primary" href="mailto:karangupta916@gmail.com">
                  Email me <span aria-hidden="true">↗</span>
                </a>
                <div className="contact-links">
                  <a href="mailto:karangupta916@gmail.com">karangupta916@gmail.com</a>
                  <a href="tel:+919637516106">+91 96375 16106</a>
                  <a
                    href="https://linkedin.com/in/karan-gupta-9672b71b4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn <span aria-hidden="true">↗</span>
                  </a>
                  <a href="https://github.com/kdenzz" target="_blank" rel="noopener noreferrer">
                    GitHub <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-decoration" aria-hidden="true">
              KG<span>◆</span>
            </div>
          </div>
        </section>
      </main>

      <div className="zone-indicator" aria-hidden="true">
        <span className="zone-indicator-dot" />
        <span className="zone-label">
          {["WORKSPACE", "SELECTED WORK", "APPROACH", "EXPERIENCE", "TOOLKIT", "CONTACT"][
            zoneIndex
          ]}
        </span>
        <span className="zone-number">
          {String(zoneIndex + 1).padStart(2, "0")} / 06
        </span>
      </div>

      <footer className="site-footer">
        <a className="wordmark" href="#top">
          <span className="brand-mark" aria-hidden="true">
            K
          </span>
          <span>
            KARAN<span className="brand-muted">.DEV</span>
          </span>
        </a>
        <span>Designed with intent. Built to ship.</span>
        <a href="#top" className="back-top">
          BACK TO TOP ↑
        </a>
        <span className="copyright">© {new Date().getFullYear()} Karan Gupta</span>
      </footer>
    </>
  );
}

export default App;
