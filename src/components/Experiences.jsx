import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, Building2 } from "lucide-react";
import data from "../data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Experiences = () => {
  const scrollRef = React.useRef(null);
  const [isPaused, setIsPaused] = React.useState(false);
  const [isDragging, setIsDragging] = React.useState(false);
  const startY = React.useRef(0);
  const scrollTop = React.useRef(0);

  // Triple data for bi-directional infinite scroll effect
  const experiences = useMemo(
    () => [...data.experiences, ...data.experiences, ...data.experiences],
    []
  );

  React.useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Set initial scroll position to the middle set
    if (scrollContainer.scrollTop === 0) {
      scrollContainer.scrollTop = scrollContainer.scrollHeight / 3;
    }

    let animationFrameId;
    const scrollSpeed = 0.5; // Adjust speed as needed

    const scroll = () => {
      if (!isPaused && !isDragging) {
        scrollContainer.scrollTop += scrollSpeed;
      }

      const oneSetHeight = scrollContainer.scrollHeight / 3;

      // Reset scroll position when reaching the end of the second set (moving down)
      if (scrollContainer.scrollTop >= oneSetHeight * 2) {
        scrollContainer.scrollTop = oneSetHeight;
      }
      // Reset scroll position when reaching the start of the first set (moving up)
      else if (scrollContainer.scrollTop <= 0) {
        scrollContainer.scrollTop = oneSetHeight;
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, isDragging]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setIsPaused(true);
    startY.current = e.pageY - scrollRef.current.offsetTop;
    scrollTop.current = scrollRef.current.scrollTop;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsPaused(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const y = e.pageY - scrollRef.current.offsetTop;
    const walk = (y - startY.current) * 2; // Scroll-fast
    scrollRef.current.scrollTop = scrollTop.current - walk;
  };

  return (
    <section
      id="experiences"
      className="py-24 relative overflow-hidden bg-bg dark:bg-bg-dark transition-colors duration-300"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50 mix-blend-multiply dark:mix-blend-screen animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-50 mix-blend-multiply dark:mix-blend-screen animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 dark:bg-card-dark/50 backdrop-blur-sm border border-border/50 dark:border-border-dark/50 shadow-sm mb-6">
            <Briefcase size={16} className="text-primary" />
            <span className="text-sm font-semibold text-text dark:text-text-dark tracking-wide uppercase">
              Career Path
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-text dark:text-text-dark mb-6 tracking-tight">
            Professional Experience
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto leading-relaxed">
            My professional journey and the key milestones that have shaped my
            career.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <motion.div
            ref={scrollRef}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className={`relative max-h-[500px] md:max-h-[700px] overflow-y-auto md:overflow-hidden pr-4 scrollbar-hide overscroll-contain [linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            // Touch events for mobile compatibility
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            <div className="relative space-y-12 pb-8">
              {/* Vertical Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] md:-translate-x-1/2 min-h-full bg-linear-to-b from-transparent via-border dark:via-border-dark to-transparent" />

              {experiences.map((exp, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className={`relative flex flex-col md:flex-row md:items-center ${
                      isEven ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Date Column (Desktop) */}
                    <div
                      className={`hidden md:flex w-1/2 ${
                        isEven ? "justify-start pl-12" : "justify-end pr-12"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-card dark:bg-card-dark shadow-sm border border-border dark:border-border-dark">
                          <Calendar size={18} className="text-primary" />
                        </div>
                        <span className="text-lg font-bold text-text dark:text-text-dark">
                          {exp.date}
                        </span>
                      </div>
                    </div>

                    {/* Center Node */}
                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-primary border-4 border-card dark:border-card-dark shadow-lg z-10 relative group-hover:scale-125 transition-transform duration-300">
                        <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20" />
                      </div>
                    </div>

                    {/* Content Column */}
                    <div className="w-full pl-20 md:pl-0 md:w-1/2">
                      <div
                        className={`relative md:w-[90%] ${
                          isEven ? "md:mr-auto md:pr-0" : "md:ml-auto md:pl-0"
                        }`}
                      >
                        {/* Mobile Date */}
                        <div className="md:hidden mb-4 flex items-center gap-2">
                          <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                            {exp.date}
                          </span>
                        </div>

                        {/* Card */}
                        <div className="group relative bg-card/80 dark:bg-card-dark/80 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl border border-border dark:border-border-dark/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                          {/* Hover Gradient Border Effect */}
                          <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/10 rounded-2xl transition-colors duration-300 pointer-events-none" />

                          {/* Content */}
                          <div className="relative z-10">
                            <div>
                              <h3 className="text-xl font-bold text-text dark:text-text-dark group-hover:text-primary transition-colors duration-300">
                                {exp.title}
                              </h3>
                              <div className="flex items-center gap-2 text-secondary mt-1">
                                <Building2 size={16} />
                                <span className="font-medium text-sm">
                                  {exp.company}
                                </span>
                              </div>
                            </div>

                            <p className="text-secondary leading-relaxed text-sm md:text-base mt-4">
                              {exp.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
