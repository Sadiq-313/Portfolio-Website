/**
 * Site Configuration
 * 
 * Central place to manage your personal details, navigation items,
 * and contact links. Easy for React beginners to customize!
 */

export const siteConfig = {
  name: "Sadiq Ali",
  title: "MERN Stack Developer",
  shortBio: "Passionate full-stack developer specializing in MongoDB, Express.js, React, and Node.js. Dedicated to building clean, responsive user interfaces and robust RESTful APIs.",
  
  // Status indicator in Hero section
  status: {
    isOpenToWork: true,
    label: "Open to Opportunities",
    subtext: "Available for junior / associate roles & internships",
  },

  // Social and profile links (Replace with your actual URLs)
  social: {
    github: "https://github.com/muhammadsadiq-mern",
    linkedin: "https://linkedin.com/in/muhammadsadiq-dev",
    email: "muhammadsadiq41294@gmail.com",
  },

  // Navigation menu items
  navLinks: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ],

  // Resume configuration
  resume: {
    filePath: "/resume.pdf",
    fileName: "Sadiq_Ali_MERN_Resume.pdf",
  },
};
