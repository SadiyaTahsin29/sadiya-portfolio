export const profile = {
  name: "Sadiya Tahsin Ansari",
  location: "Nagpur, India",

  headline:
    "Full-stack engineer building AI products that retrieve, reason over, and act on real information.",

  description:
    "I work where structured software meets unstructured information—building full-stack products with React, Django and MERN, and intelligent systems with RAG, vector search and LLM pipelines.",

  email: "sadiyatahsinansari103@gmail.com",

  linkedin:
    "https://linkedin.com/in/sadiya-tahsin-ansari-fullstackdeveloper",

  github:
    "https://github.com/SadiyaTahsin29",

  education:
    "B.Tech Computer Science & Engineering (AI & ML)",

  college:
    "Jhulelal Institute of Technology, Nagpur",

  years: "2022–2026",

  // Verify this before publishing.
  cgpa: "7.82 / 10",
};

export const projects = [
  {
    id: "athena",

    number: "01",

    title: "Athena AI",

    subtitle: "Document-grounded RAG chatbot",

    category: "AI / Retrieval",

    technologies: [
      "Python",
      "LangChain",
      "OpenAI API",
      "RAG",
      "Vector Search",
      "Embeddings",
      "Vector DB",
    ],

    problem:
      "General-purpose LLMs can answer fluently without being grounded in the user's documents. Athena AI was built to retrieve relevant information from uploaded sources before generating an answer.",

    role:
      "I worked on the retrieval pipeline: document ingestion, text preparation, embeddings, semantic retrieval and passing retrieved context into the generation step.",

    architecture: [
      "Upload documents",
      "Extract and prepare text",
      "Split content into retrievable chunks",
      "Generate embeddings",
      "Store vectors",
      "Retrieve semantically relevant chunks",
      "Pass retrieved context to the LLM",
      "Generate a source-grounded response",
    ],

    decisions: [
      {
        title: "Retrieval before generation",
        text:
          "The model receives retrieved document context before answering so responses can be grounded in uploaded information rather than relying only on model memory.",
      },

      {
        title: "Semantic search",
        text:
          "Embeddings and vector similarity are used to retrieve meaning-related passages even when the user's wording does not exactly match the document.",
      },

      {
        title: "Context control",
        text:
          "Only relevant retrieved content should enter the generation context rather than sending an entire large document to the model.",
      },
    ],

    iteration: {
      verified: false,

      text:
        "Add one real failure you encountered—for example, irrelevant retrieval, poor chunk boundaries or context-size problems—and explain exactly what you changed.",
    },

    metric: "~90%",

    metricLabel: "reported query accuracy",

    measurement:
      "This number must remain provisional until the exact test-set size, scoring rubric and evaluation procedure are documented. Do not present it as independently verified.",

    github: "",

    demo: "",

    screenshot: "",
  },

  {
    id: "resume-analyzer",

    number: "02",

    title: "AI Resume Analyzer",

    subtitle: "ATS-style resume analysis and recommendations",

    category: "AI / NLP",

    technologies: [
      "Python",
      "Streamlit",
      "OpenAI API",
      "NLP",
      "Prompt Engineering",
    ],

    problem:
      "Job seekers often receive a score without understanding why their resume does or does not align with a role. This project analyzes resume content against job requirements and returns structured recommendations.",

    role:
      "I worked on resume text processing, requirement matching, AI-assisted analysis and the Streamlit interface used to present scores, gaps and recommendations.",

    architecture: [
      "Upload resume",
      "Extract resume text",
      "Process job requirements",
      "Identify relevant skills and terms",
      "Compare resume with role requirements",
      "Generate structured AI feedback",
      "Present score, gaps and recommendations",
    ],

    decisions: [
      {
        title: "Evidence before recommendation",
        text:
          "Recommendations should be tied to information found in the resume and job requirements instead of returning generic career advice.",
      },

      {
        title: "Structured output",
        text:
          "The analysis separates alignment, missing skills and recommendations so users can act on specific gaps.",
      },

      {
        title: "Human comparison",
        text:
          "The reported evaluation compares system output with manual HR-style judgment rather than treating the LLM response itself as ground truth.",
      },
    ],

    iteration: {
      verified: false,

      text:
        "Add a real example where the analyzer scored or interpreted a resume incorrectly, then document the prompt, NLP or scoring change you made.",
    },

    metric: "~92%",

    metricLabel: "reported HR-evaluation alignment",

    measurement:
      "Keep this provisional until you document the number of resumes reviewed, who performed the manual evaluation and how agreement was calculated.",

    github: "",

    demo: "",

    screenshot: "",
  },

  {
    id: "dilsecurated",

    number: "03",

    title: "DilSeCurated",

    subtitle: "Full-stack e-commerce platform",

    category: "Full Stack",

    technologies: [
      "React.js",
      "Django",
      "MySQL",
      "REST APIs",
      "E-commerce",
    ],

    problem:
      "A curated-gifting business needs more than a product gallery: customers need product discovery, cart flows and a clear path from browsing to order confirmation.",

    role:
      "I worked across the storefront and backend integration, including product presentation, shopping workflows, inventory-related functionality, recommendation features and WhatsApp-assisted order confirmation.",

    architecture: [
      "React storefront",
      "Product catalogue",
      "Django backend",
      "REST API communication",
      "MySQL persistence",
      "Cart and ordering flow",
      "Recommendation layer",
      "WhatsApp-assisted confirmation",
    ],

    decisions: [
      {
        title: "Separate frontend and backend responsibilities",
        text:
          "React handles the customer-facing experience while Django manages backend logic and persistent application data.",
      },

      {
        title: "Commerce workflow over static catalogue",
        text:
          "The project focuses on product discovery, cart behavior and order progression rather than functioning as only a visual storefront.",
      },

      {
        title: "Practical order confirmation",
        text:
          "WhatsApp-assisted confirmation connects the web experience with the business's actual customer communication workflow.",
      },
    ],

    iteration: {
      verified: false,

      text:
        "Add one real engineering challenge from the project—for example cart state, API integration, inventory consistency or deployment—and describe how you solved it.",
    },

    metric: "Core ownership",

    metricLabel: "frontend + backend integration",

    measurement:
      "The earlier '~70% of development' claim has been removed because contribution percentages are difficult to defend without a documented feature/task breakdown.",

    github: "",

    demo: "",

    screenshot: "",
  },
];

export const moreProjects = [
  {
    title: "Jarvis AI Assistant",

    description:
      "Voice-driven assistant exploring command execution, automation and AI-assisted interactions.",

    technologies: [
      "Python",
      "Voice Automation",
      "AI",
    ],

    github: "",
  },

  {
    title: "Flipkart Clone",

    description:
      "E-commerce replica focused on storefront structure, product browsing and full-stack shopping workflows.",

    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
    ],

    github: "",
  },
];

export const experience = [
  {
    number: "01",

    role: "Full Stack MERN Intern",

    company: "AVRDUS Technologies",

    date: "Jul 2025–Present",

    stack: [
      "MERN",
      "JavaScript",
      "Full Stack",
    ],

    contributions: [
      "Add the strongest feature or module you actually shipped.",
      "Add one technical problem you personally solved.",
    ],

    needsVerification: true,
  },

  {
    number: "02",

    role: "Technical Head & Mentor",

    company: "Neuronauts (JIT)",

    date: "2024–Present",

    stack: [
      "Technical Leadership",
      "Mentoring",
    ],

    contributions: [
      "Add one measurable technical initiative you led.",
      "Add the number/type of students or projects mentored if verifiable.",
    ],

    needsVerification: true,
  },

  {
    number: "03",

    role: "Mentor",

    company: "GirlScript Summer of Code",

    date: "Jul 2025–Present",

    stack: [
      "Open Source",
      "Mentoring",
    ],

    contributions: [
      "Add the repository/project you mentored on.",
      "Add one concrete contribution, review or mentoring outcome.",
    ],

    needsVerification: true,
  },

  {
    number: "04",

    role: "Web Development Intern",

    company: "Cognifyz Technologies",

    date: "Jun–Jul 2025",

    stack: [
      "Web Development",
    ],

    contributions: [
      "Add the strongest task or project completed during the internship.",
      "Link proof if a repository, certificate or demo is available.",
    ],

    needsVerification: true,
  },
];

export const skills = {
  Languages: [
    "Python",
    "JavaScript",
    "SQL",
  ],

  Frameworks: [
    "React.js",
    "Node.js",
    "Express.js",
    "Django",
  ],

  "AI / GenAI": [
    "OpenAI API",
    "LangChain",
    "RAG",
    "NLP",
    "Prompt Engineering",
    "Vector Search",
  ],

  "Databases & Tools": [
    "MySQL",
    "MongoDB",
    "Git",
    "Postman",
  ],
};

export const certifications = [
  {
    title: "Generative AI Mastermind",
    provider: "Outskill",
  },

  {
    title: "Python for GenAI",
    provider: "Coursera",
  },

  {
    title: "Fundamentals of Machine Learning",
    provider: "Microsoft",
  },

  {
    title: "Fundamentals of Cybersecurity",
    provider: "Zscaler",
  },
];