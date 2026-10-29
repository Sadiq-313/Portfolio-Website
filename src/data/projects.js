/**
 * Projects Data (Dummy / Concept Showcase)
 * 
 * NOTE: These project entries are sample conceptual projects representing MERN stack
 * architecture and frontend interfaces. Replace the placeholder links with your real
 * GitHub repository and live deployment URLs as you build and deploy them!
 */

export const projects = [
  {
    id: 1,
    title: "MultiVendor E-Commerce Platform",
    subtitle: "Full-Stack Marketplace Architecture",
    description: "A marketplace interface concept for browsing products, managing a shopping cart, and exploring seller features.",
    detailedDescription: "Designed with an intuitive shopping experience featuring dynamic category filtering, a slide-out cart drawer, and seller store management workflows. Demonstrates end-to-end data flow with RESTful product endpoints.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    category: "Full Stack",
    featured: true,
    isSampleData: true,
    githubUrl: "https://github.com/muhammadsadiq-mern/multivendor-ecommerce-concept",
    liveUrl: "https://example.com/demo/multivendor-ecommerce",
    image: "/src/assets/images/ecommerce_mockup_1793042061380.jpg",
    highlights: [
      "Product catalog with real-time stock indicators",
      "Dynamic shopping cart state with local storage persistence",
      "Multi-vendor store dashboard concepts",
      "RESTful API route structure for products and orders"
    ]
  },
  {
    id: 2,
    title: "User Management Dashboard",
    subtitle: "Enterprise CRUD & Data Grid Concept",
    description: "A dashboard concept for searching users, filtering records, sorting data, and navigating paginated results.",
    detailedDescription: "An administrative panel tailored for user role delegation, activity tracking, and bulk data operations. Implements client-side and server-side pagination patterns with fast search filtering.",
    technologies: ["React", "JavaScript", "Node.js", "Express.js", "MongoDB"],
    category: "Full Stack",
    featured: true,
    isSampleData: true,
    githubUrl: "https://github.com/muhammadsadiq-mern/user-management-dashboard-concept",
    liveUrl: "https://example.com/demo/user-dashboard",
    image: "/src/assets/images/user_dashboard_mockup_1793042061133.jpg",
    highlights: [
      "Instant multi-column search and status filters",
      "Modal-driven user creation and edit workflows",
      "Tabular layout with clean pagination controls",
      "Role-based permission access tier concepts"
    ]
  },
  {
    id: 3,
    title: "Donation Tracking Dashboard",
    subtitle: "Fintech Analytics & Contribution Ledger",
    description: "A dashboard concept for organizing donation records, tracking contributions, and reviewing totals.",
    detailedDescription: "A clean financial oversight dashboard created for charitable causes and community funds. Visualizes campaign milestones, donor contribution history, and statistical aggregations with deep dark surfaces.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    category: "Full Stack",
    featured: true,
    isSampleData: true,
    githubUrl: "https://github.com/muhammadsadiq-mern/donation-tracking-dashboard-concept",
    liveUrl: "https://example.com/demo/donation-tracker",
    image: "/src/assets/images/donation_tracker_mockup_1793042062543.jpg",
    highlights: [
      "Total funds raised and active donor metric cards",
      "Contribution activity line chart visualization",
      "Real-time donor transactions table with status indicators",
      "Campaign goal progress bar tracking"
    ]
  },
  {
    id: 4,
    title: "Developer Portfolio Website",
    subtitle: "Modern React & Framer Motion Showcase",
    description: "A responsive portfolio website showcasing skills, projects, and contact information.",
    detailedDescription: "The exact portfolio application you are browsing right now! Crafted strictly with plain JavaScript (JSX), Tailwind CSS, and Framer Motion to provide a smooth, accessible developer identity without TypeScript overhead.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Framer Motion"],
    category: "Frontend",
    featured: true,
    isSampleData: true,
    githubUrl: "https://github.com/muhammadsadiq-mern/sadiq-mern-portfolio",
    liveUrl: "#hero",
    image: "/src/assets/images/portfolio_preview_mockup_1793042061785.jpg",
    highlights: [
      "Pure React with plain JavaScript & JSX (no TypeScript complexity)",
      "Dynamic project filtering with instant reactivity",
      "Interactive code console and client-side contact validation",
      "100% responsive dark mode design with Framer Motion animations"
    ]
  }
];

// Available filter tags for the project section
export const filterOptions = [
  "All Projects",
  "React",
  "JavaScript",
  "Node.js",
  "MongoDB",
  "Full Stack"
];
