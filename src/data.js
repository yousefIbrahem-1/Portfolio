const data = {
  // Personal Info
  name: "Kamal Sayed",
  title: "Full-Stack Developer & AI Engineer",
  email: "kk1412ec4869@gmail.com",
  address: "Al-Qalyubia, Khanka, Egypt",
  phones: ["+20 100 362 0544", "+20 100 582 6130"],

  // Professional Summary
  summary: [
    "Detail-oriented Full-Stack Developer and AI Engineer with a passion for building scalable, efficient web applications. I thrive in collaborative environments and am accustomed to meeting tight deadlines without compromising quality.",
    "I possess hands-on experience bridging the gap between modern front-end interfaces (React, TailwindCSS) and robust back-end logic (Python, Node.js, MySQL).",
    "Currently focused on integrating Artificial Intelligence solutions into web architecture to create innovative, data-driven user experiences.",
  ],

  // Social Media
  socialMedia: [
    {
      id: 1,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/kamal-sayed-82ba2b335/",
      icon: "FaLinkedin",
    },
    {
      id: 2,
      name: "GitHub",
      link: "https://github.com/kamalSayed2004",
      icon: "FaGithub",
    },
    {
      id: 3,
      name: "Facebook",
      link: "https://www.facebook.com/kamalsayedkamal2004/",
      icon: "FaFacebook",
    },
  ],
  skills: [
    {
      type: "Front-End",
      list: [
        { name: "HTML5", icon: "FaHtml5" },
        { name: "CSS3", icon: "FaCss3Alt" },
        { name: "JavaScript (ES6+)", icon: "SiJavascript" },
        { name: "React.js", icon: "FaReact" },
        { name: "TailwindCSS", icon: "SiTailwindcss" },
        { name: "Bootstrap", icon: "FaBootstrap" },
        { name: "Sass", icon: "FaSass" },
        { name: "Redux Toolkit", icon: "SiRedux" },
        { name: "Git", icon: "FaGitAlt" },
      ],
    },
    {
      type: "Artificial Intelligence",
      list: [
        { name: "Machine Learning", icon: "FaBrain" },
        { name: "Deep Learning", icon: "FaNetworkWired" },
        { name: "Data Processing", icon: "FaDatabase" },
        { name: "Supervised Learning", icon: "MdSupervisedUserCircle" },
        { name: "Unsupervised Learning", icon: "FaRobot" },
      ],
    },
    {
      type: "Back-End",
      list: [
        { name: "Python", icon: "FaPython" },
        // { name: "Node.js", icon: "FaNodeJs" },
        { name: "Django", icon: "SiDjango" },
        // { name: "Express.js", icon: "SiExpress" },
        { name: "MySQL", icon: "SiMysql" },
        // { name: "MongoDB", icon: "SiMongodb" },
        // { name: "Mongoose", icon: "SiMongoose" },
      ],
    },
    {
      type: "Computer Science",
      list: [
        { name: "Data Structures", icon: "FaLayerGroup" },
        { name: "Sorting Algorithms", icon: "FaSortAmountDown" },
        { name: "Searching Algorithms", icon: "FaSearch" },
      ],
    },
    {
      type: "Tools",
      list: [
        { name: "VS Code", icon: "SiVisualstudiocode" },
        { name: "Postman", icon: "SiPostman" },
        { name: "Figma", icon: "FaFigma" },
      ],
    },
    {
      type: "Languages",
      list: [
        { name: "Arabic", icon: "FaGlobe" },
        { name: "English", icon: "FaLanguage" },
      ],
    },
    {
      type: "Soft Skills",
      list: [
        { name: "Collaborative Teamwork", icon: "FaUsers" },
        { name: "Technical Research", icon: "FaBookReader" },
        { name: "Leadership", icon: "FaFlag" },
        { name: "Analytical Problem Solving", icon: "FaPuzzlePiece" },
      ],
    },
  ],
  projects: [
    {
      id: 1,
      name: "Diamate",
      category: "AI & Health",
      description:
        "A specialized medical application utilizing AI algorithms to assist in the early detection and management of diabetes.",
      techStack: ["React", "TailwindCSS", "Python", "Machine Learning"],
      link: "https://github.com/kamalSayed2004/diamate",
    },
    {
      id: 2,
      name: "Doctor Appointment System",
      category: "Full Stack",
      description:
        "A comprehensive booking platform allowing patients to schedule appointments and doctors to manage schedules efficiently.",
      techStack: ["HTML5", "CSS3", "JavaScript", "React", "TailwindCSS"],
      link: "https://github.com/kamalSayed2004/medical-project",
    },
    {
      id: 3,
      name: "Timer & Notes Manager",
      category: "Productivity",
      description:
        "A personal productivity suite combining task management with customizable timers to enhance workflow efficiency.",
      techStack: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/kamalSayed2004/time-manager",
    },
    {
      id: 4,
      name: "Productivity Dashboard",
      category: "UI/UX",
      description:
        "A responsive dashboard template featuring data visualization widgets and a clean, intuitive user interface.",
      techStack: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/kamalSayed2004/dashboard",
    },
    {
      id: 5,
      name: "Elzero Game Store",
      category: "E-Commerce",
      description:
        "A front-end simulation of a digital game store marketplace focusing on grid layouts and responsive design.",
      techStack: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/kamalSayed2004/elzero",
    },
    {
      id: 6,
      name: "Kasper Template",
      category: "UI/UX",
      description:
        "A pixel-perfect conversion of a design mockup into a responsive web interface.",
      techStack: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/kamalSayed2004/kasper",
    },
  ],
  experiences: [
    {
      title: "Machine Learning Trainee",
      company: "BFCAI",
      date: "2023",
      description:
        "Deepening expertise in AI algorithms, data preprocessing, and model training. Successfully completed practical projects involving supervised and unsupervised learning architectures.",
    },
    {
      title: "Freelance Web Developer",
      company: "Self-Employed",
      date: "2023 - Present",
      description:
        "Delivering custom web solutions for diverse clients using the MERN stack and TailwindCSS. Focused on performance optimization and responsive design implementation.",
    },
  ],
  certificates: [
    {
      degree: "Bachelor of Computer Science",
      institution: "BFCAI",
      status: "In Progress",
    },
    {
      degree: "Machine Learning Certification",
      institution: "BFCAI",
      status: "Completed",
    },
  ],
};

export default data;
