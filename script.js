/**
 * Shreyas Bharadwaj B M - Portfolio Application
 * Functional, Modular Architecture
 */

// ==========================================
// 1. DATA STORE
// ==========================================
const PORTFOLIO_DATA = {
  profile: {
    name: "Shreyas Bharadwaj B M",
    shortName: "Shreyas",
    title: "AI/ML Engineer • Generative AI & Backend Developer",
    summary:
      "An AI/ML Engineer with practical experience in developing backend APIs and generative AI apps in Python. Proficient in building and shipping production-grade machine learning models and solutions with a good understanding of the underlying mathematical concepts. Have experience with FastAPI, RAG pipelines for developing prototype applications.",
    status: "Open to opportunities",
    location: "Hassan, Karnataka, India",
    email: "shreyasbm2k5@gmail.com",
    phone: "+91 6361778392",
    githubUrl: "https://github.com/Shreyas-bm",
    linkedinUrl: "https://www.linkedin.com/in/shreyas-bharadwaj-b-m-256595249/",
    portfolioUrl: "https://shreyas-bm.github.io/Portfolio_sbbm/",
    resumePdf: "ShreyasRes.pdf",
    badges: [
      { icon: "robot", text: "Generative AI & LLMs" },
      { icon: "search", text: "RAG & Vector Search" },
      { icon: "server", text: "FastAPI & Python" },
      { icon: "cpu", text: "Model Fine-Tuning" }
    ]
  },

  skills: [
    {
      category: "Programming",
      icon: "code",
      skills: ["Python", "JavaScript", "Java", "C++", "SQL"]
    },
    {
      category: "Generative AI",
      icon: "robot",
      skills: [
        "Large Language Models (LLMs)",
        "Retrieval-Augmented Generation (RAG)",
        "Prompt Engineering",
        "Embeddings",
        "Semantic Search",
        "Vector Search",
        "LLM APIs"
      ]
    },
    {
      category: "AI / Machine Learning",
      icon: "brain",
      skills: [
        "Natural Language Processing (NLP)",
        "Hugging Face",
        "Scikit-learn",
        "TensorFlow",
        "Keras",
        "Pandas",
        "NumPy",
        "OpenCV",
        "Model Fine-Tuning"
      ]
    },
    {
      category: "Vector Databases",
      icon: "database",
      skills: ["ChromaDB", "FAISS", "Embedding Pipelines", "Similarity Search"]
    },
    {
      category: "Databases / Tools",
      icon: "tools",
      skills: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Git",
        "Docker",
        "Docker Compose",
        "Linux"
      ]
    }
  ],

  experience: [
    {
      role: "NLP Intern",
      organization: "CCC Innovation and Incubation Center",
      location: "Hassan, Karnataka",
      period: "2024",
      bullets: [
        "Developed an NLP-based chatbot to automate conversational interactions by using natural language processing and context-aware response generation."
      ]
    }
  ],

  projects: [
    {
      id: "storyvoice-ai",
      title: "StoryVoiceAI – AI-Powered Storytelling & Audiobook Generator",
      shortTitle: "StoryVoiceAI",
      category: "ai web",
      image: "assets/storyvoice_ai_preview.png",
      githubUrl: "https://github.com/Shreyas-bm/StoryVoiceAI",
      bullets: [
        "Developed an offline-first AI storytelling platform using Next.js, TypeScript, and FastAPI, enabling audiobook generation without external API dependencies.",
        "Fine-tuned a DistilRoBERTa model for dialogue emotion classification, achieving 93% validation accuracy.",
        "Designed a hybrid offline Text-to-Speech (TTS) and procedural audio synthesis pipeline to generate distinct voices and audio for story characters."
      ],
      tags: [
        "Next.js",
        "TypeScript",
        "FastAPI",
        "DistilRoBERTa",
        "Offline-First",
        "TTS Audio Pipeline",
        "Emotion Classification"
      ]
    },
    {
      id: "smartpdf-ai",
      title: "SmartPDF AI – Local-First Document Summarizer & Study Assistant",
      shortTitle: "SmartPDF AI",
      category: "ai web",
      image: "assets/smartpdf_ai_preview.png",
      githubUrl: "https://github.com/Shreyas-bm/Smart-pdf-AI",
      bullets: [
        "Developed a document AI application that generates summaries, quizzes, and flashcards from PDF and DOCX documents.",
        "Built a custom Retrieval-Augmented Generation (RAG) pipeline using embeddings and vector search, achieving 95% retrieval accuracy on domain-specific queries.",
        "Implemented Next.js 15, FastAPI, Server-Sent Events (SSE), and PDF.js for streaming document-based responses with source citations."
      ],
      tags: [
        "Next.js 15",
        "FastAPI",
        "RAG Pipeline",
        "Vector Search",
        "ChromaDB",
        "PDF.js",
        "Server-Sent Events (SSE)"
      ]
    }
  ],

  publications: [
    {
      title: "Large Language Models Hallucinate and How Retrieval-Augmented Generation Mitigates It",
      journal: "International Journal for Research in Applied Science & Engineering Technology (IJRASET)",
      date: "Aug. 2026",
      tag: "Journal Publication",
      url: "https://www.ijraset.com/research-paper/large-language-models-hallucinate-and-how-retrieval-augmented-generation-mitigates",
      summary:
        "Comprehensive research analyzing the root causes of hallucinations in LLMs and establishing mitigation architectures via Retrieval-Augmented Generation (RAG), vector embeddings, and contextual grounding."
    }
  ],

  education: [
    {
      degree: "B.E. Artificial Intelligence and Machine Learning",
      institution: "Bahubali College of Engineering, Shravanabelagola",
      period: "2023 - 2027",
      details: "Comprehensive engineering curriculum emphasizing AI/ML architectures, Deep Learning, NLP, Data Structures, and Generative Systems."
    },
    {
      degree: "Class XII – Karnataka State Board",
      institution: "St. Joseph's PU College, Hassan",
      period: "2021 - 2023",
      details: "Focused on Science with Mathematics, Physics, Chemistry, and Computer Science."
    }
  ],

  achievements: [
    {
      title: "Journal Publication in IJRASET",
      description:
        "Published a journal called 'Large Language Models Hallucinate and How Retrieval-Augmented Generation Mitigates It' in IJRASET.",
      highlight: "Published Research Author"
    },
    {
      title: "Techathon Participant at BGMIT, Mudhol",
      description:
        "Participated and competed in the Techathon hackathon event at BGMIT, Mudhol.",
      highlight: "Competitive AI/ML Development"
    },
    {
      title: "Hackathon Participant at Bahubali College of Engineering (BCE)",
      description:
        "Participated in the university hackathon at Bahubali College of Engineering.",
      highlight: "Rapid Prototyping & Collaboration"
    }
  ]
};

// ==========================================
// 2. ICON SVG HELPER FUNCTION
// ==========================================
function getIconSvg(iconName, width = 20, height = 20) {
  const icons = {
    moon: `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
    sun: `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
    menu: `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,
    close: `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
    code: `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    robot: `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/></svg>`,
    brain: `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04z"/></svg>`,
    database: `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
    tools: `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
    search: `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
    server: `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,
    cpu: `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>`,
    external: `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
    github: `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`,
    linkedin: `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
    email: `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
    phone: `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
    pin: `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
    book: `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
    award: `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>`,
    download: `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`
  };

  return icons[iconName] || icons.code;
}

// ==========================================
// 3. UI BUILDER FUNCTIONS (PURE RENDERERS)
// ==========================================

/**
 * Creates Hero Badges elements
 */
function createHeroBadge(badge) {
  const span = document.createElement("span");
  span.className = "hero-badge";
  span.innerHTML = `${getIconSvg(badge.icon, 14, 14)}<span>${badge.text}</span>`;
  return span;
}

function renderHeroBadges(badges, containerId = "heroBadges") {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = "";
  badges.forEach(badge => container.appendChild(createHeroBadge(badge)));
}

/**
 * Creates a Skill Card element
 */
function createSkillCard(skillGroup) {
  const card = document.createElement("article");
  card.className = "card skill-card reveal";

  const chipsHtml = skillGroup.skills
    .map(skill => `<span class="skill-chip">${skill}</span>`)
    .join("");

  card.innerHTML = `
    <div class="skill-header">
      <div class="skill-icon">
        ${getIconSvg(skillGroup.icon, 22, 22)}
      </div>
      <h3>${skillGroup.category}</h3>
    </div>
    <div class="skill-chips">
      ${chipsHtml}
    </div>
  `;
  return card;
}

function renderSkills(skillsList, containerId = "skillsContainer") {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = "";
  skillsList.forEach(group => container.appendChild(createSkillCard(group)));
}

/**
 * Creates an Experience Timeline element
 */
function createExperienceItem(exp) {
  const item = document.createElement("div");
  item.className = "timeline-item";

  const bulletsHtml = exp.bullets
    .map(bullet => `<li>${bullet}</li>`)
    .join("");

  item.innerHTML = `
    <div class="timeline-header">
      <h3 class="timeline-role">${exp.role}</h3>
      <span class="timeline-date">${exp.period}</span>
    </div>
    <div class="timeline-org">${exp.organization} • ${exp.location}</div>
    <ul class="timeline-bullets">
      ${bulletsHtml}
    </ul>
  `;
  return item;
}

function renderExperience(experienceList, containerId = "experienceContainer") {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = "";
  experienceList.forEach(exp => container.appendChild(createExperienceItem(exp)));
}

/**
 * Creates a Project Card element
 */
function createProjectCard(project) {
  const card = document.createElement("article");
  card.className = "card project-card reveal";
  card.dataset.category = project.category;

  const tagsHtml = project.tags
    .map(tag => `<span class="tag">${tag}</span>`)
    .join("");

  const bulletsHtml = project.bullets
    .map(b => `<li>${b}</li>`)
    .join("");

  card.innerHTML = `
    <div class="project-visual">
      <img src="${project.image}" alt="${project.title} Preview" class="project-visual-img" loading="lazy" />
    </div>
    <div class="project-body">
      <h3>${project.shortTitle}</h3>
      <div class="project-headline">${project.title}</div>
      <ul class="project-bullets">
        ${bulletsHtml}
      </ul>
      <div class="tag-row">
        ${tagsHtml}
      </div>
      <div class="project-links">
        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer">
          ${getIconSvg("github", 16, 16)} View Code ${getIconSvg("external", 14, 14)}
        </a>
      </div>
    </div>
  `;
  return card;
}

function renderProjects(projectsList, containerId = "projectsContainer") {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = "";
  projectsList.forEach(proj => container.appendChild(createProjectCard(proj)));
}

/**
 * Creates a Publication Card element
 */
function createPublicationCard(pub) {
  const card = document.createElement("article");
  card.className = "card publication-card reveal";

  const linkHtml = pub.url
    ? `<a href="${pub.url}" target="_blank" rel="noopener noreferrer" class="pub-link">
        Read Paper ${getIconSvg("external", 14, 14)}
       </a>`
    : "";

  const titleHtml = pub.url
    ? `<a href="${pub.url}" target="_blank" rel="noopener noreferrer">${pub.title}</a>`
    : pub.title;

  card.innerHTML = `
    <div class="pub-tag">
      ${getIconSvg("book", 16, 16)} ${pub.tag}
    </div>
    <h3 class="publication-title">${titleHtml}</h3>
    <div class="publication-journal">${pub.journal}</div>
    <p class="timeline-desc">${pub.summary}</p>
    <div class="pub-footer">
      <span class="pub-date">Published: ${pub.date}</span>
      ${linkHtml}
    </div>
  `;
  return card;
}

function renderPublications(publicationsList, containerId = "publicationsContainer") {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = "";
  publicationsList.forEach(pub => container.appendChild(createPublicationCard(pub)));
}

/**
 * Creates an Education Timeline element
 */
function createEducationItem(edu) {
  const item = document.createElement("div");
  item.className = "timeline-item";

  item.innerHTML = `
    <div class="timeline-header">
      <h3 class="timeline-role">${edu.degree}</h3>
      <span class="timeline-date">${edu.period}</span>
    </div>
    <div class="timeline-org">${edu.institution}</div>
    <p class="timeline-desc">${edu.details}</p>
  `;
  return item;
}

function renderEducation(educationList, containerId = "educationContainer") {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = "";
  educationList.forEach(edu => container.appendChild(createEducationItem(edu)));
}

/**
 * Creates an Achievement List Item element
 */
function createAchievementItem(itemData) {
  const li = document.createElement("li");
  li.className = "achievement-item";

  li.innerHTML = `
    <div class="achievement-icon">
      ${getIconSvg("award", 18, 18)}
    </div>
    <div class="achievement-text">
      <strong>${itemData.highlight}:</strong> ${itemData.description}
    </div>
  `;
  return li;
}

function renderAchievements(achievementsList, containerId = "achievementsContainer") {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = "";
  achievementsList.forEach(ach => container.appendChild(createAchievementItem(ach)));
}

/**
 * Renders all sections from data
 */
function renderAllSections(data = PORTFOLIO_DATA) {
  renderHeroBadges(data.profile.badges);
  renderSkills(data.skills);
  renderExperience(data.experience);
  renderProjects(data.projects);
  renderPublications(data.publications);
  renderEducation(data.education);
  renderAchievements(data.achievements);
}

// ==========================================
// 4. THEME MANAGEMENT FUNCTIONS
// ==========================================
function getStoredTheme() {
  const saved = localStorage.getItem("portfolio-theme");
  if (saved) return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function updateThemeToggleUI(theme) {
  const themeToggle = document.getElementById("themeToggle");
  if (!themeToggle) return;
  themeToggle.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} mode`);
  themeToggle.innerHTML = theme === "dark" ? getIconSvg("sun", 18, 18) : getIconSvg("moon", 18, 18);
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("portfolio-theme", theme);
  updateThemeToggleUI(theme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  setTheme(newTheme);
}

function initThemeManager() {
  const initialTheme = getStoredTheme();
  setTheme(initialTheme);

  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }
}

// ==========================================
// 5. NAVIGATION & OBSERVERS
// ==========================================
function initMobileNav() {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  if (!menuToggle || !navLinks) return;

  function setMobileNavState(isOpen) {
    navLinks.classList.toggle("open", isOpen);
    menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    menuToggle.innerHTML = isOpen ? getIconSvg("close", 18, 18) : getIconSvg("menu", 18, 18);
  }

  menuToggle.addEventListener("click", () => {
    const willOpen = !navLinks.classList.contains("open");
    setMobileNavState(willOpen);
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      setMobileNavState(false);
    });
  });
}

function initActiveNavObserver() {
  const sections = document.querySelectorAll("main section[id]");
  const links = document.querySelectorAll(".nav-links a");
  if (!sections.length || !links.length) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          links.forEach(link => {
            const href = link.getAttribute("href");
            link.classList.toggle("active", href === `#${id}`);
          });
        }
      });
    },
    { rootMargin: "-30% 0px -60% 0px" }
  );

  sections.forEach(section => observer.observe(section));
}

function initScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal");
  if (!revealElements.length) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  revealElements.forEach(el => observer.observe(el));
}

// ==========================================
// 6. INTERACTIVE FILTERS & ACTIONS
// ==========================================
function filterProjects(selectedCategory, filterButtons, projectCards) {
  filterButtons.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.filter === selectedCategory);
  });

  projectCards.forEach(card => {
    const categories = card.dataset.category ? card.dataset.category.split(" ") : [];
    if (selectedCategory === "all" || categories.includes(selectedCategory)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
}

function initProjectFilters() {
  const filterButtons = document.querySelectorAll(".filter");
  const projectCards = document.querySelectorAll(".project-card");
  if (!filterButtons.length || !projectCards.length) return;

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterProjects(btn.dataset.filter, filterButtons, projectCards);
    });
  });
}

// ==========================================
// 7. TOAST NOTIFICATIONS
// ==========================================
let toastTimeout = null;

function showToast(message, duration = 3200) {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  if (toastTimeout) clearTimeout(toastTimeout);

  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, duration);
}

// ==========================================
// 8. CONTACT FORM HANDLER
// ==========================================
function createMailtoUrl(name, email, subject, message) {
  const encodedSubject = encodeURIComponent(`[Portfolio Contact] ${subject}`);
  const encodedBody = encodeURIComponent(
    `Hi Shreyas,\n\n${message}\n\nSender Details:\nName: ${name}\nEmail: ${email}`
  );
  return `mailto:shreyasbm2k5@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;
}

function handleContactSubmit(event) {
  event.preventDefault();

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const subjectInput = document.getElementById("subject");
  const messageInput = document.getElementById("message");

  const name = nameInput ? nameInput.value.trim() : "";
  const email = emailInput ? emailInput.value.trim() : "";
  const subject = subjectInput ? subjectInput.value.trim() : "";
  const message = messageInput ? messageInput.value.trim() : "";

  if (!name || !email || !subject || !message) {
    showToast("Please complete all required fields.");
    return;
  }

  const mailtoUrl = createMailtoUrl(name, email, subject, message);
  window.location.href = mailtoUrl;

  showToast("Opening your default email client...");
  event.target.reset();
}

function initContactForm() {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", handleContactSubmit);
  }
}

// ==========================================
// 9. FOOTER UTILITIES
// ==========================================
function initFooterYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

// ==========================================
// 10. APPLICATION INITIALIZATION
// ==========================================
function initPortfolioApp() {
  // 1. Render all dynamic content first
  renderAllSections(PORTFOLIO_DATA);

  // 2. Initialize feature managers
  initThemeManager();
  initMobileNav();
  initActiveNavObserver();
  initScrollReveal();
  initProjectFilters();
  initContactForm();
  initFooterYear();
}

// Kick off when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initPortfolioApp);
} else {
  initPortfolioApp();
}