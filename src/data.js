const data = {
  // Personal Info
  name: "Yousef Ibrahem",
  title: "Software Engineer | .NET Developer",
  email: "youssefibrahem414@gmail.com",
  address: "Al-Qalyubia, Egypt",
  phones: ["+20 1034377464"],
  

  // Professional Summary
  summary: [
  "A dedicated backend developer with a strong foundation in C#, .NET Core, and SQL Server, passionate about building scalable, high-performance",
    "systems. Experienced in designing RESTful APIs, implementing Clean Architecture, and optimizing database operations for efficiency and maintainability.",
    "With a problem-solving mindset",
  ],
  // external assets
  cv:"https://drive.google.com/file/d/10273Oa5m0JDzyb133F8O4FiKJkagDXp5/view?usp=sharing",
  // Social Media
  socialMedia: [
    {
      id: 1,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/yousef-ibrahem1/",
      icon: "FaLinkedin",
    },
    {
      id: 2,
      name: "GitHub",
      link: "https://github.com/yousefIbrahem-1",
      icon: "FaGithub",
    },
  ],
  skills: [
    {
      type: "Back-End",
      list: [
        { name: "C#" },
        { name: "OOP" },
        { name: "ASP.NET Core" },
        { name: "Web API" },
        { name: "MVC" },
        { name: ".NET Framework" },
        { name: "SignalR"},
      ],
    },
    {
      type: "Databases & ORM",
      list: [
        { name: "SQL Server" },
        { name: "LINQ" },
        { name: "Entity Framework" },
        { name: "EF Core" },
        { name: "ADO.NET"},
      ],
    },
    {
      type: "Core Concepts",
      list: [
        { name: "Problem Solving" },
        { name: "Data Structures" },
        { name: "Algorithms" },
        { name: "SOLID Principles" },
      ],
    },
    {
      type: "Tools",
      list: [
        { name: "Git" },
        { name: "GitHub"},
        { name: "GitHub Actions" },
        { name: "Azure"},
      ],
    },
    {
      type: "Programming Languages",
      list: [
        { name: "C++"},
        { name: "C#" },
        { name: "Python" },
        { name: "JavaScript" },
      ],
    },
    {
      type: "Front-End",
      list: [
        { name: "HTML5"},
        { name: "CSS3" },
        { name: "JavaScript" },
      ],
    },
    {
      type: "Languages",
      list: [{ name: "Arabic" }, { name: "English" }],
    },
    {
      type: "Soft Skills",
      list: [
        { name: "Teamwork"},
        { name: "Research" },
        { name: "Time Management" },
        { name: "Communication Skills"},
        { name: "Presentation Skills" },
      ],
    },
  ],
  projects: [
    {
      id: 1,
      name: "Driving & Vehicle License Department ",
      category: "desktop application",
      description:
        "Designed and implemented a full DVLD (Driving & Vehicle Licensing Department) management system using C#, .NET, and SQL Server. Built core features including applicant management, driving tests (vision, written, street), local and international license issuance, fee calculation, and violation tracking. Developed an organized multi-tier architecture (Presentation, Business Logic, and Data Access) with ADO.NET, stored procedures, and reusable service components.",
      techStack: ["C#", ".NET","WINFORMS","SQL Server/ADO.Net", "Multi-Tier Architecture (Presentation, Business, Data Access)"],
      link: "https://github.com/yousefIbrahem-1/DVLD",
    },
    {
      id: 2,
      name: "Multifunctional Robotic Arm Project",
      category: "robotics",
      description:
        "Developed a multifunctional robotic arm integrating Arduino, speech-to-text processing, and computer vision to enable advanced human–machine interaction. Implemented modules for sign language translation (speech/text to gestures), Morse code communication, and interactive behaviors including handshakes, waving, and a Rock-Paper-Scissors game. Designed the system to enhance accessibility, real-time communication, and automation through precise motion control and intelligent vision-based responses. Collaborated with a multidisciplinary team to deliver a fully functional, innovative robotic solution.",
      techStack: ["C++","Python", "Machine Learning", "Embedded Systems (Arduino)", "Computer Vision", "Speech-to-Text (STT) Processing"],
      link: "https://www.linkedin.com/posts/yousef-ibrahem1_robotics-innovation-technology-activity-7277648617102860288-nr0K?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9UNawBC4ow4-vDQR6JMVmg4FvksSqmBoU",
    },
    {
      id: 3,
      name: "Bank Management System",
      category: "desktop application",
      description:
        "Built a multi-layered C#/.NET Bank Management System with a clean architecture separating UI, business logic, and data access.Implemented core banking features including customer management, account operations, deposits, withdrawals, transfers, and loan processing, supported by a structured SQL Server database using stored procedures and ADO.NET.Focused on delivering a scalable, maintainable, and secure financial application.",
      techStack: ["C#", ".NET","WINFORMS","SQL Server/ADO.Net", "Multi-Tier Architecture (Presentation, Business, Data Access)"],
      link: "https://github.com/yousefIbrahem-1/BMS",
    },
  ],
  experiences: [
    {
      title:
        "Digital Egypt Pioneers Initiative (DEPI) – Full Stack .NET Web Developer",
      company: "DEPI",
      date: "2025",
      description:
        "Completed the Digital Egypt Pioneers Program (DEPI) as a Full Stack .NET Web Developer, mastering modern backend and frontend web development using ASP.NET, C#, SQL Server, and advanced web technologies. Demonstrated the ability to build full-stack solutions, integrate APIs, apply clean architecture, and deliver production-ready web applications within a real-world training environment.",
    },
    {
      title: "Freelance Web Developer",
      company: "Self-Employed",
      date: "2024 - Present",
      description:
        "Delivering custom web solutions for diverse clients using the MERN stack and TailwindCSS. Focused on performance optimization and responsive design implementation.",
    },
  ],
  certificates: [
    {
      degree: "Bachelor of Computer Science and Artificial Intelligence",
      institution: "BFCAI",
      status: "In Progress",
      link:"",
    },
    {
      degree:
        "Digital Egypt Pioneers Initiative (DEPI) – Full Stack .NET Web Developer",
      institution: "DEPI",
      status: "Completed",
      link: "https://drive.google.com/file/d/1CQJaE59qTCkEYNRUYc8B5Sd9DxcRTWW3/view?usp=sharing",
    },
  ],
};

export default data;
