const projects = [
  {
    name: "SUPMOVIES / SUPCONTENT",
    type: "Projet d’équipe · 4 personnes",
    description: "Réseau social cinéma et séries, du web au mobile, avec authentification complète et déploiement cloud.",
    stack: ["React", "React Native", "Node.js", "PostgreSQL", "Docker"],
    highlights: ["JWT, OAuth2 Google et refresh tokens", "Déploiement Vercel, Render et Supabase"],
    featured: true,
  },
  {
    name: "ShopFlow",
    type: "Projet personnel",
    description: "Plateforme e-commerce headless multi-vendeurs avec paiements, temps réel et architecture conteneurisée.",
    stack: ["Next.js 14", "Prisma", "Redis", "Stripe", "Socket.io"],
    highlights: ["Paiements Stripe et uploads Cloudinary", "Résolution de problématiques SSR complexes"],
  },
  {
    name: "Best & Cheap Electro",
    type: "Projet personnel",
    description: "Application e-commerce full-stack avec espaces client, vendeur et administrateur.",
    stack: ["React", "Express", "MySQL", "Sequelize"],
    highlights: ["Catalogue, favoris et commandes", "Dashboards et gestion fine des rôles"],
  },
  {
    name: "Coursero",
    type: "Infrastructure multi-VM",
    description: "Infrastructure Linux résiliente avec répartition de charge et réplication de base de données.",
    stack: ["Ubuntu", "Apache", "MariaDB", "Python", "VirtualBox"],
    highlights: ["Load balancing et réplication primaire/secondaire", "Durcissement ufw, systemd et ulimits"],
  },
  {
    name: "TaskFlowAPI",
    type: "Projet co-développé",
    description: "API REST robuste pour la gestion collaborative de projets et de tâches.",
    stack: ["ASP.NET Core", "EF Core", "SQL Server", "JWT"],
    highlights: ["Architecture DTO et sérialisation maîtrisée", "Modèle Code First et authentification JWT"],
  },
];

const skillGroups = [
  { label: "Langages", items: "JavaScript, TypeScript, C#, Python, SQL" },
  { label: "Web & mobile", items: "React, Next.js, React Native, Tailwind CSS" },
  { label: "Backend", items: "Node.js, Express, ASP.NET Core" },
  { label: "Données", items: "PostgreSQL, SQL Server, MariaDB, Redis, Prisma" },
  { label: "Cloud & infra", items: "Docker, Linux, Render, Supabase, Apache, VirtualBox" },
  { label: "Outils", items: "Git, Stripe, Socket.io, JWT, OAuth, Cloudinary" },
];

export default function Home() {
  return (
    <>
      <section className="hero section" id="accueil">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Disponible pour une alternance</p>
          <h1>Je conçois des produits web <em>et des infrastructures fiables.</em></h1>
          <p className="hero-intro">Étudiant en Master Informatique à SUPINFO Lille, je développe des expériences full-stack et cloud, de la conception à la mise en production.</p>
          <div className="hero-actions">
            <a className="button primary" href="#projets">Voir mes projets <span>↗</span></a>
            <a className="button secondary" href="mailto:lotfikram2000@gmail.com">Me contacter</a>
          </div>
        </div>
        <div className="hero-aside">
          <div className="portrait-wrap">
            <div className="portrait-frame"><img src="/photo.png" alt="Portrait d’Ikram Lotfi" /></div>
            <div className="floating-card"><span>Focus actuel</span><strong>Développement<br />& Cloud</strong></div>
          </div>
          <div className="quick-facts"><span>Lille, France</span><span>FR · EN · AR</span></div>
        </div>
      </section>

      <section className="marquee" aria-label="Technologies principales"><div>REACT <i>✦</i> NEXT.JS <i>✦</i> NODE.JS <i>✦</i> DOCKER <i>✦</i> POSTGRESQL <i>✦</i> LINUX <i>✦</i> ASP.NET</div></section>

      <section className="section about" id="apropos">
        <div className="section-heading"><p className="section-number">01 — À propos</p><h2>Curieux, rigoureux,<br /><em>orienté solutions.</em></h2></div>
        <div className="about-content">
          <p className="lead">Je transforme des besoins complexes en applications utiles, maintenables et agréables à utiliser.</p>
          <p>Formé au développement full-stack et aux bases de l’administration système, j’aime comprendre un produit dans son ensemble : interface, API, données, sécurité, conteneurisation et déploiement.</p>
          <p>Plus de trois ans dans le service client m’ont aussi appris l’écoute, le calme sous pression et le travail d’équipe — des qualités que j’applique chaque jour aux projets techniques.</p>
          <div className="facts-grid"><div><strong>5</strong><span>projets techniques</span></div><div><strong>3+</strong><span>ans d’expérience client</span></div><div><strong>3</strong><span>langues courantes</span></div></div>
        </div>
      </section>

      <section className="projects-section" id="projets">
        <div className="section projects-inner">
          <div className="section-heading light"><p className="section-number">02 — Projets sélectionnés</p><h2>Construire, résoudre,<br /><em>mettre en production.</em></h2></div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className={`project-card ${project.featured ? "featured" : ""}`} key={project.name}>
                <div className="project-index">0{index + 1}</div>
                <p className="project-type">{project.type}</p>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <ul>{project.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
                <div className="tags">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section skills" id="competences">
        <div className="section-heading"><p className="section-number">03 — Compétences</p><h2>Une vision produit,<br /><em>une base technique solide.</em></h2></div>
        <div className="skills-list">{skillGroups.map((group, index) => <div className="skill-row" key={group.label}><span>0{index + 1}</span><h3>{group.label}</h3><p>{group.items}</p></div>)}</div>
      </section>

      <section className="section journey" id="parcours">
        <div className="section-heading"><p className="section-number">04 — Parcours</p><h2>Apprendre partout,<br /><em>progresser toujours.</em></h2></div>
        <div className="timeline">
          <div className="timeline-item"><time>2025 — 2028</time><div><h3>Master en Informatique</h3><p>SUPINFO · Lille, France</p><span>En cours</span></div></div>
          <div className="timeline-item"><time>2023</time><div><h3>Diplôme en programmation informatique</h3><p>Collège des Arts et Technologies · Ottawa, Canada</p></div></div>
          <div className="timeline-item"><time>2021</time><div><h3>Licence Physique, Mathématiques et Informatique</h3><p>Université des Sciences et Technologies · Settat, Maroc</p></div></div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section contact-inner"><p className="section-number">05 — Contact</p><h2>Un projet ou une alternance ?<br /><em>Parlons-en.</em></h2><p>Je recherche une alternance en développement ou cloud / infrastructure autour de Lille.</p><a className="contact-mail" href="mailto:lotfikram2000@gmail.com">lotfikram2000@gmail.com <span>↗</span></a><div className="contact-meta"><span>Lille, France</span><a href="https://github.com/Lotfi207" target="_blank" rel="noreferrer">GitHub ↗</a><span>07 45 37 92 10</span></div></div>
      </section>
    </>
  );
}
