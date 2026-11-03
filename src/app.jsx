import React, { useState, useEffect, useRef, useContext, createContext } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useAnimationFrame, useInView, useMotionValueEvent } from 'framer-motion';
import { ArrowUpRight, ArrowDown, ArrowRight, Play, X, Menu, Mail, Phone, MapPin, Download, Pause, Search, Plus, Minus, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import archive from './data/projects.json';
import brands from './data/brands.json';
import './styles.css';

const MotionContext = createContext(true);
const EASE = [0.22, 1, 0.36, 1];
const categories = ['All', 'Full-Stack', '3D & WebGL', 'Game Engine', 'AI & Systems'];
const featured = ['unreal-3d-action-game', 'scalable-lms-platform', 'nevucore-digital-studio'].map(
  (key) => archive.find((p) => p.id === key || p.media === key || p.title === key)
).filter(Boolean);

const experiences = [
  {
    date: '2024 · PRESENT',
    title: 'Full Stack & AI Software Engineer',
    place: 'NevuCore',
    text: 'Building full-stack web applications end to end, from architecture and database schema to deployment, using JavaScript, PHP, React, and Node.js with integrated AI-driven features. Lead developer for company infrastructure and internal tooling.',
  },
  {
    date: '2025 – 2026',
    title: 'LMAC Learning Management System',
    place: 'Apex Education Systems',
    text: 'Designed and launched a full-scale online LMS supporting thousands of active accounting students. Built secure authentication, optimized MySQL query execution, CDN video delivery, and a responsive React mobile-first interface.',
  },
  {
    date: '2025 – 2026',
    title: 'Developer Portal Architect',
    place: 'NevuCore Internal Tools',
    text: 'Built a responsive, interactive developer hub serving as the central repository for NevuCore’s APIs and technical documentation with modern UI/UX and dark-mode luxury aesthetics.',
  },
  {
    date: '2025 – 2026',
    title: '3D Interactive & Telemetry Pipeline',
    place: 'NevuCore Labs',
    text: 'Engineered a real-time bridge connecting low-latency in-game telemetry to browser-based WebGL components. Optimized 3D assets and GPU shaders for sustained 60+ FPS rendering across desktop and mobile.',
  },
  {
    date: '2023 – 2024',
    title: 'Software Engineering Undergraduate',
    place: 'Java Institute for Advanced Technology',
    text: 'Studied modern software engineering, object-oriented programming (OOP), relational database indexing, and cloud-native scalable system design.',
  },
];

const certificates = [
  { title: 'Google Analytics Certificate', year: '2026–2027', image: './Asset/img/SERTIFIKAT/google.jpg' },
  { title: 'How to Become a Software Engineer', year: 'Alison 2026', image: './Asset/img/SERTIFIKAT/alison.jpg' },
  { title: 'CS302: Software Engineering', year: 'Saylor 2026', image: './Asset/img/SERTIFIKAT/saylor.jpg' },
  { title: 'BSc in Software Engineering', year: 'Enrolled', image: './Asset/img/SERTIFIKAT/javainstitute.jpg' },
];

const awards = [
  { year: '2025', title: 'Systems Architecture Excellence', event: 'NevuCore Cloud Platform' },
  { year: '2024', title: 'Best Competency Exam', event: 'Java Institute for Advanced Technology' },
  { year: '2024', title: 'Next-Gen 3D WebGL Real-Time Graphics', event: 'Interactive Fluid Dynamics' },
  { year: '2023', title: 'High-Concurrency Backend Award', event: 'Saylor Software Engineering' },
  { year: '2023', title: 'G.C.E. Ordinary Level 7 A’s Distinction', event: 'Mathematics, Science, ICT Stream' },
  { year: '2020', title: 'Best Creative Technology Project', event: 'National Technology Challenge' },
];

function Reveal({ children, className = '', delay = 0, as = 'div' }) {
  const enabled = useContext(MotionContext);
  const Component = motion[as];
  return (
    <Component
      className={className}
      initial={enabled ? { opacity: 0, y: 32 } : false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.12 }}
      transition={{ duration: enabled ? 0.75 : 0, delay, ease: EASE }}
    >
      {children}
    </Component>
  );
}

function MediaImage({ src, alt, className = '', priority = false, ...props }) {
  const [loaded, setLoaded] = useState(true);
  const [error, setError] = useState(false);

  return (
    <span className={`media-image ${loaded ? 'loaded' : error ? 'error' : 'loading'} ${className}`}>
      {error && (
        <span className="image-fallback">
          <span className="display">N.</span>
          <span>Preview Unavailable</span>
        </span>
      )}
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        width="960"
        height="600"
        onLoad={() => setLoaded(true)}
        onError={(e) => {
          if (e.currentTarget.src.includes('maxresdefault.jpg')) {
            e.currentTarget.src = e.currentTarget.src.replace('maxresdefault.jpg', 'hqdefault.jpg');
          } else {
            setError(true);
          }
        }}
        {...props}
      />
    </span>
  );
}

function Magnetic({ children, className = '', ...props }) {
  const enabled = useContext(MotionContext);
  const x = useSpring(0, { stiffness: 220, damping: 20 });
  const y = useSpring(0, { stiffness: 220, damping: 20 });
  return (
    <motion.a
      className={className}
      style={{ x, y }}
      onPointerMove={(e) => {
        if (!enabled || e.pointerType !== 'mouse') return;
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width / 2) * 0.12);
        y.set((e.clientY - r.top - r.height / 2) * 0.2);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
      {...props}
    >
      {children}
    </motion.a>
  );
}

function Header({ enabled, onToggle }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-15% 0px -65% 0px' }
    );
    document.querySelectorAll('main > section[id]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="Nethuna Sahas Home">
        NETHUNA SAHAS<span>®</span>
      </a>
      <nav className="desktop-nav" aria-label="Main Navigation">
        {[
          ['portfolio', 'Work'],
          ['awards', 'Awards'],
          ['about', 'About'],
          ['experience', 'Journey'],
          ['contact', 'Contact'],
        ].map(([id, label]) => (
          <a key={id} href={`#${id}`} className={active === id ? 'active' : ''}>
            {label}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <button
          className="motion-toggle"
          onClick={onToggle}
          aria-label={enabled ? 'Pause Motion' : 'Enable Motion'}
          aria-pressed={!enabled}
        >
          {enabled ? <Pause size={13} /> : <Play size={13} />}
          <span>Motion {enabled ? 'on' : 'off'}</span>
        </button>
        <a className="header-contact" href="#contact">
          Let’s talk <ArrowUpRight size={16} />
        </a>
        <button
          className="menu-toggle icon-button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close Menu' : 'Open Menu'}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            className="mobile-menu"
            aria-label="Mobile Navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
          >
            {[
              ['home', 'Home'],
              ['portfolio', 'Work'],
              ['awards', 'Awards'],
              ['about', 'About'],
              ['experience', 'Journey'],
              ['contact', 'Contact'],
            ].map(([id, label], i) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
                <span>0{i + 1}</span>
                {label}
                <ArrowUpRight size={18} />
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero({ onProject }) {
  const ref = useRef(null);
  const enabled = useContext(MotionContext);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 85]);
  const portraitScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -55]);

  return (
    <section id="home" className="hero" ref={ref}>
      <div className="hero-top">
        <span>
          SOFTWARE ENGINEER / NEVUCORE FOUNDER<br />
          <span className="muted">CREATIVE SYSTEMS ARCHITECT</span>
        </span>
        <span className="availability">
          <i />AVAILABLE FOR COLLABORATION
        </span>
      </div>
      <motion.div
        className="hero-title display"
        aria-hidden="true"
        style={enabled ? { y: titleY } : {}}
        initial={enabled ? { clipPath: 'inset(0 0 100% 0)' } : false}
        animate={{ clipPath: 'inset(0 0 0% 0)' }}
        transition={{ duration: 1.4, ease: EASE }}
      >
        NETHUNA SAHAS
      </motion.div>
      <motion.div
        className="hero-portrait"
        style={enabled ? { y: portraitY, scale: portraitScale } : {}}
        initial={enabled ? { opacity: 0 } : false}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      >
        <img
          src="./Asset/img/renando-portrait.png"
          alt="Nethuna Sahas - Full Stack & AI Software Engineer"
          width="1024"
          height="1536"
          fetchPriority="high"
        />
      </motion.div>
      <motion.div
        className="hero-intro"
        style={enabled ? { y: copyY } : {}}
        initial={enabled ? { opacity: 0, x: -35 } : false}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.35, ease: EASE }}
      >
        <p className="handwriting">Hello, I’m</p>
        <h1 className="display">NETHUNA SAHAS<span>.</span></h1>
        <p className="hero-role">
          FULL STACK &amp;<br />AI SOFTWARE ENGINEER
        </p>
        <p className="hero-description">
          Founder at NevuCore. Engineering scalable web ecosystems, 3D WebGL experiences, and high-throughput backend architectures.
        </p>
        <div className="hero-cta-wrap">
          <Magnetic href="#portfolio" className="primary-link">
            View My Work <ArrowDown size={17} />
          </Magnetic>
          <a href="./Asset/cv/resume.pdf" download="W.A._Nethuna_Sahas_CV.pdf" className="hero-cv-btn">
            <Download size={15} />
            <span>DOWNLOAD CV</span>
          </a>
        </div>
        <span className="hero-location">
          <MapPin size={12} /> KALUTARA, SRI LANKA
        </span>
      </motion.div>
      <motion.div
        className="hero-side"
        initial={enabled ? { opacity: 0, x: 30 } : false}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.55, ease: EASE }}
      >
        <div className="hero-manifesto">
          <span className="crosshair" aria-hidden="true">✳</span>
          <p>
            Every frame.<br />A scalable system.
          </p>
        </div>
        <div className="hero-stats">
          <div>
            <span className="display">6<span>+</span></span>
            <p>
              YEARS IN SOFTWARE<br />&amp; SYSTEMS DESIGN
            </p>
          </div>
          <div>
            <span className="display">20<span>+</span></span>
            <p>
              WEB PLATFORMS &amp;<br />CORE ENGINES
            </p>
          </div>
          <div className="hero-award-stat">
            <span className="display">10<span>+</span></span>
            <a href="#awards" aria-label="View Awards Won">
              AWARDS WON<ArrowUpRight size={12} />
            </a>
          </div>
          <a href="./Asset/cv/resume.pdf" download="W.A._Nethuna_Sahas_CV.pdf">
            <Download size={16} />
            <span>DOWNLOAD CV</span>
          </a>
        </div>
      </motion.div>
      <div className="hero-bottom">
        <button className="reel-button" onClick={() => onProject(featured[0] || archive[0])}>
          <span className="play-circle">
            <Play size={12} fill="currentColor" />
          </span>
          PLAY SHOWREEL<span className="muted">3D / GAMEPLAY</span>
        </button>
        <span className="hero-scroll">
          SCROLL TO DISCOVER <ArrowDown size={13} />
        </span>
        <span className="edition">SELECTED WORK / 2022–2026</span>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, onOpen }) {
  const enabled = useContext(MotionContext);
  const ref = useRef(null);
  const videoRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [-12, 12]);
  const isVideo = project.type === 'video' || ['youtube', 'drive'].includes(project.type);
  const hasDirectVideo = !!project.videoSrc;

  useEffect(() => {
    const v = videoRef.current;
    if (v) {
      v.muted = true;
      const playPromise = v.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }
  }, [project.videoSrc]);

  return (
    <motion.article
      ref={ref}
      className="project-card"
      layout
      initial={enabled ? { opacity: 0, y: 32 } : false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.08 }}
      transition={{ duration: enabled ? 0.6 : 0, delay: (index % 3) * 0.06, ease: EASE }}
      exit={{ opacity: 0, scale: 0.96 }}
      onMouseEnter={() => {
        if (videoRef.current) {
          videoRef.current.play().catch(() => {});
        }
      }}
    >
      <button className="project-open" onClick={() => onOpen(project)} aria-label={`View ${project.title}`}>
        <motion.div className="project-picture" style={enabled ? { y } : {}}>
          {hasDirectVideo ? (
            <video
              ref={videoRef}
              src={project.videoSrc}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="card-video-element"
              onLoadedData={(e) => {
                e.currentTarget.play().catch(() => {});
              }}
            />
          ) : (
            <MediaImage src={project.image} alt={project.title} />
          )}
        </motion.div>
        <span className="project-type">
          {project.type === 'render' ? '3D BREAKDOWN' : isVideo ? 'VIDEO / SHOWCASE' : 'WEB PLATFORM'}
        </span>
        <span className="project-hover">{isVideo ? <Play fill="currentColor" size={18} /> : <ArrowUpRight size={22} />}</span>
        <span className="project-frame" aria-hidden="true" />
      </button>
      <button className="project-caption" onClick={() => onOpen(project)}>
        <span className="project-number display">{String(index + 1).padStart(2, '0')}</span>
        <span>
          <h3>{project.title}</h3>
          <span className="project-category">{project.category}{project.year ? ` / ${project.year}` : ''}</span>
        </span>
        <ArrowUpRight size={20} />
      </button>
    </motion.article>
  );
}

function BrandStrip() {
  const [paused, setPaused] = useState(false);
  const [showAll, setShowAll] = useState(false);

  return (
    <Reveal className="brand-section">
      <div className="brand-heading">
        <p>
          TECHNICAL ECOSYSTEM &amp;<br />
          <strong>ENGINEERING STACK.</strong>
        </p>
        <div>
          <button
            className="brand-all"
            onClick={() => setShowAll((v) => !v)}
            aria-expanded={showAll}
            aria-controls="brand-collection"
          >
            {showAll ? 'SHOW SCROLL RAIL' : `VIEW ALL (${brands.length})`}
            {showAll ? <Minus size={14} /> : <Plus size={14} />}
          </button>
          {!showAll && (
            <button
              className="icon-button brand-pause"
              aria-label={paused ? 'Resume Logo Rail' : 'Pause Logo Rail'}
              aria-pressed={paused}
              onClick={() => setPaused((v) => !v)}
            >
              {paused ? <Play size={13} /> : <Pause size={13} />}
            </button>
          )}
        </div>
      </div>
      <div
        id="brand-collection"
        className={showAll ? 'brand-full-grid' : 'brand-viewport'}
        role={showAll ? 'list' : 'region'}
        aria-label="Partner brands and technologies"
      >
        {showAll ? (
          brands.map((b) => (
            <div className="brand-pill brand-pill-grid" key={b.name} role="listitem">
              <span className="brand-icon">
                <img src={`./Asset/svg/brand/${b.file}`} alt="" width="26" height="26" loading="lazy" />
              </span>
              <div className="brand-info">
                <span className="brand-name">{b.name}</span>
                <span className="brand-tag">{b.tag}</span>
              </div>
            </div>
          ))
        ) : (
          <div className={`brand-marquee-track ${paused ? 'is-paused' : ''}`}>
            {[0, 1].map((copy) => (
              <div className="brand-marquee-set" key={copy} aria-hidden={copy === 1 ? true : undefined}>
                {brands.map((b) => (
                  <div className="brand-pill" key={`${copy}-${b.name}`}>
                    <span className="brand-icon">
                      <img src={`./Asset/svg/brand/${b.file}`} alt="" width="24" height="24" loading="lazy" />
                    </span>
                    <span className="brand-name">{b.name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </Reveal>
  );
}

function Portfolio({ onProject }) {
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [expanded, setExpanded] = useState(false);
  const [limit, setLimit] = useState(9);

  const results = archive.filter(
    (p) =>
      (category === 'All' || p.category === category) &&
      `${p.title} ${p.category} ${p.role}`.toLowerCase().includes(query.toLowerCase())
  );
  const projects = expanded || category !== 'All' || query ? results.slice(0, limit) : featured;

  return (
    <section id="portfolio" className="portfolio section-wrap">
      <Reveal className="section-heading">
        <div>
          <span className="eyebrow">01 / SELECTED WORK</span>
          <h2>SYSTEMS THAT SPEAK<span className="accent">.</span></h2>
        </div>
        <button
          className="text-link"
          onClick={() => {
            if (expanded) {
              setExpanded(false);
              setCategory('All');
              setQuery('');
            } else {
              setExpanded(true);
              setLimit(9);
            }
          }}
        >
          {expanded ? 'FEATURED WORK' : 'ALL PROJECTS'}
          <ArrowRight size={21} />
        </button>
      </Reveal>
      <Reveal className="portfolio-toolbar">
        <div className="filters" role="group" aria-label="Project Categories">
          {categories.map((c) => (
            <button
              key={c}
              className={category === c ? 'selected' : ''}
              aria-pressed={category === c}
              onClick={() => {
                setCategory(c);
                setExpanded(true);
                setLimit(9);
              }}
            >
              {c}
              {c === category && <motion.span className="filter-line" layoutId="filter-line" />}
            </button>
          ))}
        </div>
        <label className="search-box">
          <Search size={15} />
          <span>Search</span>
          <input
            aria-label="Search systems"
            type="search"
            placeholder="Search systems, tools..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setExpanded(true);
              setLimit(9);
            }}
          />
        </label>
      </Reveal>
      <motion.div className="project-grid" layout>
        <AnimatePresence mode="popLayout">
          {projects.map((p, i) => (
            <ProjectCard key={p.id || p.category + p.title} project={p} index={i} onOpen={onProject} />
          ))}
        </AnimatePresence>
      </motion.div>
      {projects.length === 0 && (
        <div className="empty-state">
          <p>No projects found for “{query}”.</p>
          <button
            className="text-link"
            onClick={() => {
              setQuery('');
              setCategory('All');
            }}
          >
            Reset Search <X size={15} />
          </button>
        </div>
      )}
      {expanded && results.length > limit && (
        <div className="load-more">
          <button className="outline-button" onClick={() => setLimit((v) => v + 9)}>
            Show More Projects <Plus size={16} />
          </button>
          <span>{projects.length} of {results.length} projects</span>
        </div>
      )}
      <BrandStrip />
    </section>
  );
}

const processSteps = [
  ['01', 'THE ARCHITECTURE', 'Analyzing system constraints, p99 latency targets, and clean API boundaries.'],
  ['02', 'THE FOUNDATION', 'Architecting robust database schemas, state machines, and real-time WebGL viewports.'],
  ['03', 'THE CODE', 'Writing clean async services, lock-free ring buffers, and type-safe frontends.'],
  ['04', 'THE OPTIMIZATION', 'Profiling render budgets, query execution plans, and CDN caching for sub-10ms response.'],
  ['05', 'THE DEPLOYMENT', 'Zero-downtime CI/CD container orchestration, Prometheus telemetry, and production landing.'],
];

function Awards({ onProject }) {
  const [expanded, setExpanded] = useState(false);
  const laurelPath =
    'M48 94C8 68 9 30 35 5M22 61C8 60 3 49 3 44c12 0 19 6 19 17zm-5-19C5 35 6 23 8 19c11 5 13 14 9 23zm7-20C15 12 20 3 24 0c7 8 6 16 0 22zM31 79C17 79 8 70 7 64c13-2 22 4 24 15zm-3-18c-5-10-2-19 7-25 5 11 1 20-7 25zm10 24c-6-11-4-20 5-27 6 9 5 20-5 27z';

  return (
    <section id="awards" className={`recognition section-wrap ${expanded ? 'awards-expanded' : ''}`}>
      <Reveal className="recognition-intro">
        <span className="eyebrow">RECOGNITION &amp; AWARDS</span>
        <h2 className="display">
          THE WORK.<br />
          <span className="accent">THE RECOGNITION.</span>
        </h2>
        <div className="award-total">
          <svg viewBox="0 0 60 100" aria-hidden="true">
            <path d={laurelPath} fill="currentColor" />
          </svg>
          <span className="display">10<span>+</span></span>
          <svg viewBox="0 0 60 100" aria-hidden="true">
            <g transform="translate(60 0) scale(-1 1)">
              <path d={laurelPath} fill="currentColor" />
            </g>
          </svg>
          <span className="award-total-label">AWARDS WON</span>
        </div>
        <p>
          Architected with relentless precision.<br />
          Recognized for engineering reliability and technical craft.
        </p>
        <button
          className="text-link award-proof"
          onClick={() =>
            onProject({
              ...certificates[0],
              type: 'image',
              media: certificates[0].image,
              category: 'Award',
              description: 'Google Analytics Certificate, Valid 2026–2027.',
            })
          }
        >
          VIEW CERTIFICATES<ArrowUpRight size={18} />
        </button>
      </Reveal>
      <div className="recognition-list">
        <div className="recognition-list-head">
          <span>SELECTED RECOGNITION</span>
          <span>2020 – 2026</span>
        </div>
        <ol id="recognition-list">
          {awards.map((award, i) => (
            <Reveal as="li" className={`recognition-row ${i > 2 ? 'additional-award' : ''}`} key={award.year + award.title} delay={i * 0.045}>
              <span className="award-index">0{i + 1}</span>
              <div>
                <h3>{award.title}</h3>
                <p>{award.event}</p>
              </div>
              <span className="award-year display">{award.year}</span>
            </Reveal>
          ))}
        </ol>
        <button
          className="award-expand"
          aria-expanded={expanded}
          aria-controls="recognition-list"
          onClick={() => setExpanded((v) => !v)}
        >
          {expanded ? 'Show Fewer Awards' : 'View All Recognitions'}
          {expanded ? <Minus size={16} /> : <Plus size={16} />}
        </button>
      </div>
    </section>
  );
}

function Breakdown() {
  const scene = archive.find((p) => p.type === 'render');
  const ref = useRef(null);
  const enabled = useContext(MotionContext);
  const [manual, setManual] = useState(false);
  const [cut, setCut] = useState(65);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    if (!manual && enabled) setCut(Math.round(90 - v * 80));
  });

  const titleX = useTransform(scrollYProgress, [0, 1], [30, -30]);
  if (!scene) return null;

  return (
    <section className="breakdown section-wrap" ref={ref} aria-labelledby="breakdown-title">
      <Reveal className="breakdown-copy">
        <span className="eyebrow">A LOOK UNDER THE SURFACE</span>
        <motion.h2 id="breakdown-title" className="display" style={enabled ? { x: titleX } : {}}>
          FROM RAW.<br />
          <span className="accent">TO REAL.</span>
        </motion.h2>
        <p>
          One pipeline. Multi-layered engineering.<br />
          See how a real-time 3D environment evolves from untextured wireframe geometry into production Lumen lighting and GPU compute shaders.
        </p>
        <span className="breakdown-credit">
          3D INTERACTIVE TELEMETRY / 2025<br />
          REAL-TIME GRAPHICS &amp; SYSTEMS ARCHITECT
        </span>
      </Reveal>
      <Reveal className="comparison">
        <div className="comparison-stage" style={{ '--cut': `${enabled || manual ? cut : 50}%` }}>
          <MediaImage src={scene.renders[0].solid} alt="Wireframe solid pass before materials and lighting" />
          <div className="comparison-final">
            <MediaImage src={scene.renders[0].final} alt="Final render with real-time Lumen lighting and GPU compute shaders" />
          </div>
          <span className="comparison-label raw-label">SOLID VIEW</span>
          <span className="comparison-label final-label">FINAL RENDER</span>
          <div className="comparison-divider">
            <span>
              <ChevronLeft size={14} />
              <ChevronRight size={14} />
            </span>
          </div>
          <input
            aria-label="Comparison slider before and after render"
            aria-valuetext={`${cut}% solid, ${100 - cut}% final render`}
            type="range"
            min="0"
            max="100"
            value={cut}
            onChange={(e) => {
              setManual(true);
              setCut(Number(e.target.value));
            }}
          />
        </div>
        <div className="comparison-caption">
          <span>SLIDE TO INSPECT PIPELINE</span>
          <span>DRAG / SCROLL</span>
        </div>
      </Reveal>
    </section>
  );
}

function About() {
  const enabled = useContext(MotionContext);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 75%'] });

  return (
    <section id="about" className="about section-wrap" ref={ref}>
      <Reveal className="about-lead">
        <div>
          <span className="eyebrow">02 / BEHIND THE CODE</span>
          <h2 className="display">
            MORE THAN CODE.<br />
            ARCHITECTING <span className="accent">EXPERIENCES.</span>
          </h2>
        </div>
        <p>
          I am W.A. Nethuna Sahas, Full Stack &amp; AI Software Engineer and Systems Architect from Kalutara, Sri Lanka.
          Founder at NevuCore, engineering scalable web platforms, AI integrations, and real-time 3D WebGL experiences.
        </p>
      </Reveal>
      <div className="studio-grid">
        <Reveal className="education-panel">
          <h3 className="panel-heading">EDUCATION &amp; SKILLS</h3>
          <p className="eyebrow accent">EDUCATION</p>
          <div className="education-row">
            <strong>Java Institute for Advanced Technology</strong>
            <span>BSc in Software Engineering</span>
            <p>Full-stack architecture, OOP, distributed database systems &amp; cloud.</p>
          </div>
          <div className="education-row">
            <strong>NevuCore Engineering Studio</strong>
            <span>2024 – Present</span>
            <p>Full Stack &amp; AI Software Engineer and technical architecture lead.</p>
          </div>
          <div className="education-row">
            <strong>Certifications</strong>
            <p>Google Analytics (Valid 2026–2027) · Alison Software Engineering · Saylor CS302</p>
          </div>
          <p className="eyebrow accent skills-heading">TECHNICAL TOOLKIT</p>
          <div className="skill-tags">
            {[
              'Full-Stack Dev',
              'AI Integration',
              'React.js & Node.js',
              '3D WebGL & Three.js',
              'Unreal Engine 5',
              'Tailwind CSS',
              'MySQL & Database',
              'REST API & Cloud',
            ].map((s, i) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                whileHover={{
                  scale: 1.08,
                  borderColor: '#e32b3c',
                  color: '#ffffff',
                  boxShadow: '0 4px 16px rgba(227, 43, 60, 0.28)',
                }}
              >
                {s}
              </motion.span>
            ))}
          </div>
          <div className="software-row">
            {[
              ['react', 'React.js'],
              ['node', 'Node.js'],
              ['ts', 'TypeScript'],
              ['next', 'Next.js'],
              ['rust', 'Rust Systems'],
              ['cpp', 'C++23'],
              ['python', 'Python & AI'],
              ['postgres', 'PostgreSQL'],
              ['docker', 'Docker & Cloud'],
              ['three', 'Three.js / WebGL'],
            ].map(([file, name], i) => (
              <motion.div
                key={file}
                className="software-icon-wrap"
                animate={enabled ? { y: [0, -6, 0] } : {}}
                transition={{
                  duration: 2.8 + (i % 4) * 0.4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.18,
                }}
                whileHover={{
                  scale: 1.25,
                  y: -10,
                  rotate: [0, -3, 3, 0],
                  boxShadow: '0 8px 24px rgba(227, 43, 60, 0.45)',
                }}
              >
                <img
                  src={`./Asset/svg/${file}.svg`}
                  alt={name}
                  title={name}
                  loading="lazy"
                  width="36"
                  height="36"
                />
              </motion.div>
            ))}
          </div>
        </Reveal>
        <div className="process-panel">
          <Reveal>
            <h3 className="panel-heading">FROM ARCHITECTURE TO DEPLOYMENT</h3>
          </Reveal>
          <div className="process-list">
            <div className="process-track">
              <motion.div style={{ scaleY: enabled ? scrollYProgress : 1 }} />
            </div>
            {processSteps.map(([num, title, text], i) => (
              <Reveal key={num} className="process-row" delay={i * 0.035}>
                <span className="process-num display">{num}</span>
                <span className="process-node" />
                <div>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal className="quote-panel">
          <span className="quote-mark display">“</span>
          <blockquote>
            From core concept<br />
            and architecture,<br />
            <em>to a cinematic<br />
            user experience.</em>
          </blockquote>
          <span className="handwriting">Nethuna Sahas</span>
          <div className="quote-bottom">
            LET’S MAKE<br />
            THE NEXT SYSTEM COUNT.
            <span className="quote-symbol" aria-hidden="true">✳</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Journey({ onProject }) {
  const [open, setOpen] = useState(0);

  return (
    <section id="experience" className="journey section-wrap">
      <Reveal className="section-heading">
        <div>
          <span className="eyebrow">03 / THE JOURNEY</span>
          <h2>ALWAYS BUILDING. ALWAYS SHIPPING<span className="accent">.</span></h2>
        </div>
        <a className="text-link" href="./Asset/cv/resume.pdf" download="W.A._Nethuna_Sahas_CV.pdf">
          RESUME<Download size={16} />
        </a>
      </Reveal>
      <div className="journey-grid">
        <div className="experience-list">
          {experiences.map((job, i) => (
            <Reveal className={`experience-row ${open === i ? 'is-open' : ''}`} key={job.title}>
              <button aria-expanded={open === i} aria-controls={`job-${i}`} onClick={() => setOpen(open === i ? null : i)}>
                <span className="experience-date">{job.date}</span>
                <span>
                  <h3>{job.title}</h3>
                  <span className="experience-place">{job.place}</span>
                </span>
                {open === i ? <Minus size={18} /> : <Plus size={18} />}
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    id={`job-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: EASE }}
                  >
                    <p>{job.text}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </Reveal>
          ))}
        </div>
        <Reveal className="awards-panel">
          <p className="eyebrow">A FEW MILESTONES</p>
          <h3 className="display">
            LITTLE WINS.<br />
            <span className="accent">BIG MEANING.</span>
          </h3>
          <div className="award-list">
            {certificates.map((cert, i) => (
              <button
                key={cert.title}
                onClick={() =>
                  onProject({
                    ...cert,
                    type: 'image',
                    media: cert.image,
                    category: 'Certificate',
                    description: 'Official credential from W.A. Nethuna Sahas archive.',
                  })
                }
              >
                <span>{String(i + 1).padStart(2, '0')}</span>
                <span>
                  {cert.title}
                  <small>{cert.year}</small>
                </span>
                <ArrowUpRight size={19} />
              </button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Contact({ onProject }) {
  const [sent, setSent] = useState(false);

  const send = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const text = `Hello Nethuna Sahas, my name is ${data.get('name')}.\n\nProject Scope: ${data.get('type')}\nDetails: ${data.get('message')}`;
    window.open(`https://wa.me/94726920926?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
    setSent(true);
  };

  return (
    <section id="contact" className="contact section-wrap">
      <div className="contact-grid">
        <Reveal className="contact-intro">
          <span className="eyebrow">04 / YOUR NEXT PROJECT</span>
          <h2 className="display">
            LET’S WORK<br />
            TOGETHER<span className="accent">.</span>
          </h2>
          <p>
            Have a platform, 3D experience, or scalable architecture in mind?<br />
            Let’s build something extraordinary.
          </p>
          <Magnetic href="https://wa.me/94726920926" target="_blank" rel="noopener noreferrer" className="contact-cta">
            <span className="round-arrow">
              <ArrowUpRight size={21} />
            </span>
            START CONVERSATION
          </Magnetic>
        </Reveal>
        <Reveal className="contact-links" delay={0.1}>
          <a href="mailto:nethuna45@gmail.com">
            <Mail />
            <span>
              <small>EMAIL</small>nethuna45@gmail.com
            </span>
            <ArrowUpRight size={16} />
          </a>
          <a href="https://github.com/zOmbix0ploit" target="_blank" rel="noopener noreferrer">
            <ExternalLink />
            <span>
              <small>GITHUB</small>github.com/zOmbix0ploit
            </span>
            <ArrowUpRight size={16} />
          </a>
          <a href="https://www.linkedin.com/in/nethuna-sahas-a83544394/" target="_blank" rel="noopener noreferrer">
            <ExternalLink />
            <span>
              <small>LINKEDIN</small>linkedin.com/in/nethuna-sahas
            </span>
            <ArrowUpRight size={16} />
          </a>
          <a href="https://wa.me/94726920926" target="_blank" rel="noopener noreferrer">
            <Phone />
            <span>
              <small>PHONE / WHATSAPP</small>+94 72 692 0926
            </span>
            <ArrowUpRight size={16} />
          </a>
          <div>
            <MapPin />
            <span>
              <small>BASED IN</small>Kalutara, Sri Lanka
            </span>
          </div>
        </Reveal>
        <Reveal className="contact-reel" delay={0.2}>
          <button onClick={() => onProject(featured[0] || archive[0])} aria-label="Play showreel">
            <div className="reel-screen">
              <span className="reel-screen-top">
                NETHUNA SAHAS®<span>3D / GAMEPLAY SHOWREEL</span>
              </span>
              <MediaImage src={(featured[0] || archive[0])?.image} alt="Showreel" />
              <span className="reel-screen-title display">
                MAKE IT<br />
                <span>FEEL REAL.</span>
              </span>
              <span className="play-circle">
                <Play size={18} fill="currentColor" />
              </span>
            </div>
            <span className="reel-caption">PRESS PLAY. ENTER MY WORLD.</span>
          </button>
        </Reveal>
      </div>
      <Reveal>
        <details className="project-brief">
          <summary>
            Tell me about your project <Plus size={19} />
          </summary>
          <form onSubmit={send}>
            <label>
              Your Name / Organization
              <input name="name" required placeholder="Name or brand" autoComplete="name" maxLength="100" />
            </label>
            <label>
              Project Scope
              <select name="type">
                <option>Full-Stack Web &amp; LMS Platform</option>
                <option>3D WebGL &amp; Interactive Graphics</option>
                <option>Unreal Engine 5 Gameplay Mechanics</option>
                <option>Cloud Architecture &amp; Database Design</option>
                <option>Other Collaboration</option>
              </select>
            </label>
            <label className="brief-message">
              Project Details
              <textarea
                name="message"
                required
                rows="3"
                placeholder="Describe goals, technical stack, or estimated timeline…"
                maxLength="3000"
              />
            </label>
            <button className="solid-button" type="submit">
              Continue to WhatsApp <ArrowUpRight size={18} />
            </button>
            <p className="form-note" role="status">
              {sent ? 'Draft message prepared on WhatsApp. Click Send there to start conversation.' : 'Brief opens as a formatted draft on WhatsApp.'}
            </p>
          </form>
        </details>
      </Reveal>
    </section>
  );
}

function ProjectDialog({ project, onClose }) {
  const ref = useRef(null);
  const [renderMode, setRenderMode] = useState('final');
  const [shot, setShot] = useState(0);
  const enabled = useContext(MotionContext);

  const activeShot = project.type === 'render' ? project.renders?.[shot] : null;
  const isVideo = ['youtube', 'drive'].includes(project.type);
  const availableModes = [['layout', 'Layout'], ['solid', 'Solid'], ['material', 'Material'], ['lighting', 'Lighting'], ['final', 'Final render']].filter(
    ([mode]) => activeShot?.[mode]
  );
  const effectiveMode = activeShot?.[renderMode] ? renderMode : availableModes[0]?.[0];
  const rendered = activeShot?.[effectiveMode] || project.image;

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div className="dialog-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="dialog-title">
      <motion.div
        className="project-dialog"
        ref={ref}
        onClick={(e) => e.stopPropagation()}
        initial={enabled ? { opacity: 0, scale: 0.95, y: 16 } : false}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={enabled ? { opacity: 0, scale: 0.95, y: 16 } : false}
        transition={{ duration: 0.35, ease: EASE }}
      >
        <div className="dialog-toolbar">
          <span className="eyebrow">{project.category}</span>
          <button className="icon-button dialog-close" onClick={onClose} aria-label="Close dialog">
            <X size={18} />
          </button>
        </div>

        <div className="dialog-stage">
          {project.videoSrc ? (
            <div className="dialog-video-wrap">
              <video
                src={project.videoSrc}
                controls
                autoPlay
                playsInline
                className="dialog-video-element"
              />
            </div>
          ) : isVideo ? (
            <div className="dialog-video-wrap">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${project.media}?autoplay=1&rel=0`}
                title={project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="dialog-image-wrap">
              <MediaImage src={rendered} alt={project.title} />
            </div>
          )}
        </div>

        {project.type === 'render' && availableModes.length > 1 && (
          <div className="render-modes">
            {availableModes.map(([mode, label]) => (
              <button
                key={mode}
                className={effectiveMode === mode ? 'active' : ''}
                onClick={() => setRenderMode(mode)}
              >
                {label}
              </button>
            ))}
          </div>
        )}

        <div className="dialog-content">
          <h2 id="dialog-title" className="display">{project.title}</h2>
          <p className="dialog-role">{project.role}{project.year ? ` · ${project.year}` : ''}</p>
          <p className="dialog-desc">{project.description}</p>
        </div>
      </motion.div>
    </div>
  );
}

export function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [motionEnabled, setMotionEnabled] = useState(() => {
    const saved = localStorage.getItem('renando-motion');
    return saved !== null ? saved === 'true' : true;
  });

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    localStorage.setItem('renando-motion', motionEnabled.toString());
  }, [motionEnabled]);

  return (
    <MotionContext.Provider value={motionEnabled}>
      <div className="app-container">
        {motionEnabled && <motion.div className="reading-progress" style={{ scaleX }} />}
        <Header enabled={motionEnabled} onToggle={() => setMotionEnabled(!motionEnabled)} />
        <main>
          <Hero onProject={setSelectedProject} />
          <Portfolio onProject={setSelectedProject} />
          <Awards onProject={setSelectedProject} />
          <Breakdown />
          <About />
          <Journey onProject={setSelectedProject} />
          <Contact onProject={setSelectedProject} />
        </main>
        <footer className="site-footer">
          <div className="footer-wrap">
            <span className="display footer-brand">NETHUNA SAHAS<span>®</span></span>
            <p className="footer-copy">© 2026 NETHUNA SAHAS. FOUNDER AT NEVUCORE. ALL RIGHTS RESERVED.</p>
            <div className="footer-links">
              <a href="#home">Back to Top <ArrowDown style={{ transform: 'rotate(180deg)' }} size={14} /></a>
            </div>
          </div>
        </footer>

        <AnimatePresence>
          {selectedProject && (
            <ProjectDialog project={selectedProject} onClose={() => setSelectedProject(null)} />
          )}
        </AnimatePresence>
      </div>
    </MotionContext.Provider>
  );
}

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<App />);
}
