import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Code,
  Briefcase,
  GraduationCap,
  Eye,
  Linkedin,
  Github,
  Facebook,
} from "lucide-react";
import data from "../data";
import portfolioImg from "../assets/imgs/portfolioImg.jpg";
import cvFile from "../assets/cv.pdf";

const About = () => {
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

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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

  const stats = [
    { icon: Code, label: "Technologies", value: "15+" },
    { icon: Briefcase, label: "Projects", value: data.projects.length },
    {
      icon: GraduationCap,
      label: "Certifications",
      value: data.certificates.length,
    },
  ];

  const socialIcons = {
    LinkedIn: Linkedin,
    GitHub: Github,
    Facebook: Facebook,
  };

  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-card dark:bg-card-dark transition-colors duration-300"
    >
      <div className="container mx-auto px-5 max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text dark:text-text-dark mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-primary rounded-full mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Image Section */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="relative max-w-md mx-auto">
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="relative group"
                >
                  <div className="relative rounded-3xl overflow-hidden p-1 bg-linear-to-br from-primary via-secondary to-primary shadow-xl">
                    <div className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-inner">
                      <img
                        src={portfolioImg}
                        alt={data.name}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>
                  <div className="absolute -inset-1 bg-linear-to-r from-primary to-secondary rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10" />
                </motion.div>

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="absolute -bottom-4 -right-4 bg-linear-to-r from-primary to-secondary text-white px-6 py-3 rounded-full shadow-lg font-semibold"
                >
                  Available
                </motion.div>
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2 space-y-8"
            >
              {/* Introduction */}
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-text dark:text-text-dark">
                  {data.title}
                </h3>
                {data.summary.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    variants={itemVariants}
                    className="text-base md:text-lg text-text dark:text-text-dark leading-relaxed opacity-90"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>

              {/* Stats Cards */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-3 gap-4"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white dark:bg-bg-dark p-4 rounded-xl text-center border border-gray-200 dark:border-border-dark shadow-md hover:shadow-lg transition-all"
                  >
                    <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <div className="text-2xl font-bold text-text dark:text-text-dark">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-secondary opacity-70">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Contact Info */}
              <motion.div
                variants={itemVariants}
                className="space-y-3 p-6 bg-white dark:bg-bg-dark rounded-xl border border-gray-200 dark:border-border-dark shadow-md"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <a
                    href={`mailto:${data.email}`}
                    className="text-text dark:text-text-dark hover:text-primary transition-colors"
                  >
                    {data.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-text dark:text-text-dark">
                    {data.address}
                  </span>
                </div>
              </motion.div>

              {/* Social Media & CTA Buttons on same line */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap items-center gap-4"
              >
                {/* Social Media */}
                <div className="flex items-center gap-4">
                  <span className="text-text dark:text-text-dark font-semibold">
                    Follow me:
                  </span>
                  {data.socialMedia.map((social) => {
                    const Icon = socialIcons[social.name];
                    return (
                      <motion.a
                        key={social.id}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 rounded-full bg-primary/5 hover:bg-primary border border-primary/20 hover:border-primary flex items-center justify-center text-primary hover:text-white transition-all shadow-sm hover:shadow-md"
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </div>

                {/* Divider for larger screens */}
                <div className="hidden lg:block h-8 w-px bg-border dark:bg-border-dark mx-2" />

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 w-full lg:w-auto">
                  <motion.a
                    href="#projects"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-primary text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
                  >
                    View Projects
                  </motion.a>
                  <motion.a
                    href={cvFile}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-linear-to-r from-primary to-secondary text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow flex items-center gap-2"
                  >
                    <Eye className="w-5 h-5" />
                    View CV
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
