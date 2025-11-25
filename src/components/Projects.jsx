import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import data from "../data";

// Dynamically import all project images
const projectImagesGlob = import.meta.glob("../assets/imgs/projects/*/*.png", {
  eager: true,
});

// Process images into a structured object: { projectId: [imgUrl1, imgUrl2, ...] }
const projectImages = Object.keys(projectImagesGlob).reduce((acc, path) => {
  // Extract project ID from path: ../assets/imgs/projects/1/1.png -> 1
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
    <div className="group relative flex flex-col h-full bg-card/80 dark:bg-card-dark/80 backdrop-blur-md rounded-2xl overflow-hidden border border-border dark:border-border-dark hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-2xl">
      {/* Image Carousel Section */}
      <div className="relative h-48 sm:h-56 overflow-hidden bg-gray-100 dark:bg-gray-800">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={images[currentImageIndex]}
            alt={`${project.name} screenshot ${currentImageIndex + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        </AnimatePresence>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Navigation Controls */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 hover:bg-primary transition-all duration-300 transform -translate-x-4 group-hover:translate-x-0"
              aria-label="Previous image"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 hover:bg-primary transition-all duration-300 transform translate-x-4 group-hover:translate-x-0"
              aria-label="Next image"
            >
              <ChevronRight size={18} />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {images.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                    idx === currentImageIndex ? "bg-primary" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Content Section */}
      <div className="flex flex-col grow p-6">
        <div className="flex justify-between items-start mb-3">
          <div className="text-xs font-bold tracking-wider text-primary uppercase bg-primary/10 px-2.5 py-1 rounded-md">
            {project.category}
          </div>
          <div className="flex gap-2">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
              title="View Source/Demo"
            >
              {project.link.includes("github") ? (
                <Github size={20} />
              ) : (
                <ExternalLink size={20} />
              )}
            </a>
          </div>
        </div>

        <h3 className="text-xl font-bold text-text dark:text-text-dark mb-3 group-hover:text-primary transition-colors">
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            {project.name}
          </a>
        </h3>

        <p className="text-secondary text-sm leading-relaxed mb-6 line-clamp-3 grow">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="px-2.5 py-1 text-xs font-medium text-secondary bg-bg dark:bg-bg-dark rounded-full border border-border dark:border-border-dark"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Highlight Line */}
      <div className="h-1 w-0 bg-linear-to-r from-primary to-secondary group-hover:w-full transition-all duration-500 ease-out" />
    </div>
  );
};

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <section
      id="projects"
      className="py-24 bg-linear-to-b from-bg via-gray-50 to-bg dark:from-bg-dark dark:via-gray-900 dark:to-bg-dark transition-colors overflow-hidden"
    >
      <div className="container mx-auto px-5">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text dark:text-text-dark mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1.5 bg-linear-to-r from-primary to-secondary rounded-full mx-auto mb-6" />
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            A selection of my recent work, showcasing technical proficiency and
            creative problem-solving.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {data.projects.map((project) => (
            <motion.div key={project.id} variants={cardVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
