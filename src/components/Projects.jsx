import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";
import data from "../data";

// Dynamically import all project images
const projectImagesGlob = import.meta.glob("../assets/imgs/projects/*/*.{jpg,jpeg,png,gif,webp,svg}", {
  eager: true,
});

// Process images into a structured object
const projectImages = Object.keys(projectImagesGlob).reduce((acc, path) => {
  const match = path.match(/\/projects\/(\d+)\//);
  if (match) {
    const projectId = match[1];
    if (!acc[projectId]) {
      acc[projectId] = [];
    }
    acc[projectId].push(projectImagesGlob[path].default);
  }
  return acc;
}, {});

const ProjectCard = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = projectImages[project.id] || [];
  const [isHovered, setIsHovered] = useState(false);

  const nextImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (images.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }
  };

  const prevImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (images.length > 1) {
      setCurrentImageIndex(
        (prev) => (prev - 1 + images.length) % images.length
      );
    }
  };

  return (
    <div
      className="group relative flex flex-col h-full bg-white/5 dark:bg-white/5 backdrop-blur-2xl rounded-2xl overflow-hidden border border-white/10 dark:border-white/5 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section - Fixed Height h-100 (208px) for larger constant size */}
      <div className="relative h-100  overflow-hidden bg-gray-100 dark:bg-gray-800/50 shrink-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={images[currentImageIndex]}
            alt={`${project.name} screenshot ${currentImageIndex + 1}`}
            loading="lazy"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        </AnimatePresence>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

        {/* Navigation Controls (Visible on Hover) */}
        {images.length > 1 && (
          <div
            className={`absolute inset-0 flex items-center justify-between px-3 transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <button
              onClick={prevImage}
              className="p-2 rounded-full bg-black/20 backdrop-blur-md text-white hover:bg-primary hover:text-white transition-all border border-white/10"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={nextImage}
              className="p-2 rounded-full bg-black/20 backdrop-blur-md text-white hover:bg-primary hover:text-white transition-all border border-white/10"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 text-[10px] font-bold tracking-widest text-white uppercase bg-black/30 backdrop-blur-md rounded-full border border-white/10">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col grow p-5 relative">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-text dark:text-white group-hover:text-primary transition-colors tracking-tight truncate pr-2">
            {project.name}
          </h3>
          <div className="flex gap-2 shrink-0">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-bg/50 dark:bg-white/5 text-secondary hover:text-primary hover:bg-primary/10 transition-all duration-300"
              title="View Project"
            >
              {project.link.includes("github") ? (
                <Github size={18} />
              ) : (
                <ArrowUpRight size={18} />
              )}
            </a>
          </div>
        </div>

        <p className="text-secondary dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-10 grow font-medium">
          {project.description}
        </p>

        {/* Tech Stack - Standard Size */}
        <div className="flex flex-wrap gap-3 mt-auto">
          {project.techStack.slice(0, 7).map((tech, index) => (
            <span
              key={index}
              className="px-2.5 py-1 text-xs font-medium text-secondary/80 dark:text-gray-300 bg-bg/50 dark:bg-white/5 rounded-md border border-border/50 dark:border-white/5"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 8 && (
            <span className="px-2.5 py-1 text-xs font-medium text-secondary/80 dark:text-gray-300 bg-bg/50 dark:bg-white/5 rounded-md border border-border/50 dark:border-white/5">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = direction === "left" ? -350 : 350;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section
      id="projects"
      className="py-24 bg-bg dark:bg-bg-dark transition-colors overflow-hidden relative"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[1000px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6 text-center md:text-left"
        >
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-text dark:text-white mb-4 tracking-tight">
              Selected <span className="text-primary">Works</span>
            </h2>
            <p className="text-base text-secondary dark:text-gray-400 leading-relaxed max-w-lg">
              A showcase of projects that demonstrate my passion for creating
              intuitive and impactful digital experiences.
            </p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="p-3 rounded-full border border-border dark:border-white/10 text-text dark:text-white hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 rounded-full border border-border dark:border-white/10 text-text dark:text-white hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>

        {/* Projects Horizontal Scroll */}
        <motion.div
          ref={scrollContainerRef}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex overflow-x-auto gap-6 pb-10 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 scroll-smooth"
        >
          {data.projects.map((project) => (
            <div
              key={project.id}
              className="w-[85vw] sm:w-[320px] md:w-[420px] snap-center flex-none"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
