import React from "react";
import { motion } from "framer-motion";
import data from "../data";
import landscapeImg from "../assets/imgs/landscapeImg.jpeg";

const Landscape = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="landscape"
      className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden"
    >
      {/* Background Image with Parallax Effect */}
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${landscapeImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/50 to-black/70"></div>

      {/* Animated Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-5 max-w-5xl"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white drop-shadow-2xl"
        >
          {data.name}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-6 font-light tracking-wide"
        >
          {data.title}
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg lg:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
        >
          {data.summary[0]}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 justify-center mt-10"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-primary text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/20 transition-colors"
          >
            Learn More
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Landscape;
