/**
 * Skills & Technologies Data
 * 
 * Organized by domain: Frontend, Backend, Databases, and Development Tools.
 * No fabricated percentages or progress bars - just pure stack focus.
 */

export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Creating responsive, interactive, and user-centric interfaces.",
    icon: "Layout",
    skills: [
      {
        name: "HTML5",
        level: "Core Markup",
        description: "Semantic elements, accessibility standards, and clean page structuring.",
        badge: "Markup",
      },
      {
        name: "CSS3",
        level: "Styling",
        description: "Flexbox, CSS Grid, media queries, animations, and custom variables.",
        badge: "Styling",
      },
      {
        name: "JavaScript",
        level: "ES6+",
        description: "Modern JavaScript, asynchronous logic, DOM manipulation, and promises.",
        badge: "Language",
      },
      {
        name: "React",
        level: "Library",
        description: "Functional components, custom hooks, state management, and JSX syntax.",
        badge: "UI Library",
      },
      {
        name: "Tailwind CSS",
        level: "Framework",
        description: "Utility-first design system, responsive layouts, and clean dark mode themes.",
        badge: "CSS Framework",
      },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    description: "Architecting server logic, routing, and RESTful web services.",
    icon: "Server",
    skills: [
      {
        name: "Node.js",
        level: "Runtime",
        description: "Event-driven asynchronous server-side JavaScript environment.",
        badge: "Runtime",
      },
      {
        name: "Express.js",
        level: "Framework",
        description: "Fast, unopinionated routing, middleware pipelines, and API creation.",
        badge: "Web Framework",
      },
      {
        name: "REST APIs",
        level: "Architecture",
        description: "CRUD operations, HTTP status codes, JSON payload processing, and authentication.",
        badge: "API Architecture",
      },
    ],
  },
  {
    id: "databases",
    title: "Databases & Storage",
    description: "Designing data schemas, queries, and document relationships.",
    icon: "Database",
    skills: [
      {
        name: "MongoDB",
        level: "NoSQL",
        description: "Document-oriented database, Mongoose ODM schemas, and aggregation pipelines.",
        badge: "NoSQL Database",
      },
      {
        name: "PostgreSQL",
        level: "Relational SQL",
        description: "Relational data modeling, table structures, foreign keys, and SQL queries.",
        badge: "SQL Database",
      },
    ],
  },
  {
    id: "tools",
    title: "Development Tools",
    description: "Workflows, version control, and API testing utilities.",
    icon: "Wrench",
    skills: [
      {
        name: "Git",
        level: "Version Control",
        description: "Branching strategies, commit history, merge conflict resolution.",
        badge: "VCS",
      },
      {
        name: "GitHub",
        level: "Collaboration",
        description: "Remote repositories, code hosting, pull requests, and project tracking.",
        badge: "Platform",
      },
      {
        name: "Postman",
        level: "API Testing",
        description: "Testing API routes, inspecting headers, payloads, and response status codes.",
        badge: "Testing",
      },
      {
        name: "VS Code",
        level: "Code Editor",
        description: "Configured extensions, linting integration, debugging, and terminal tools.",
        badge: "IDE",
      },
    ],
  },
];
