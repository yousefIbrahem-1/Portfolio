import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar } from "lucide-react";
import data from "../data";

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="education"
      className="py-24 relative overflow-hidden bg-bg dark:bg-bg-dark transition-colors duration-300"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50 mix-blend-multiply dark:mix-blend-screen animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl opacity-50 mix-blend-multiply dark:mix-blend-screen animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 dark:bg-card-dark/50 backdrop-blur-sm border border-border/50 dark:border-border-dark/50 shadow-sm mb-6">
            <GraduationCap size={16} className="text-primary" />
            <span className="text-sm font-semibold text-text dark:text-text-dark tracking-wide uppercase">
              Academic Background
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-text dark:text-text-dark mb-6 tracking-tight">
            Education & Certifications
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto leading-relaxed">
            My academic qualifications and professional certifications.
          </p>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {data.certificates.map((cert, index) => {
            const CardContent = () => (
              <>
                {/* Hover Gradient Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/10 rounded-2xl transition-colors duration-300 pointer-events-none" />

                <div className="relative z-10 flex items-start gap-6">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                    {cert.degree.includes("Bachelor") ? (
                      <GraduationCap size={28} />
                    ) : (
                      <Award size={28} />
                    )}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-text dark:text-text-dark mb-2 group-hover:text-primary transition-colors duration-300">
                      {cert.degree}
                    </h3>
                    <p className="text-secondary font-medium mb-3">
                      {cert.institution}
                    </p>

                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bg dark:bg-bg-dark border border-border dark:border-border-dark text-xs font-semibold text-secondary">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          cert.status === "Completed"
                            ? "bg-green-500"
                            : "bg-yellow-500"
                        }`}
                      />
                      {cert.status}
                    </div>
                  </div>
                </div>
              </>
            );

            const commonProps = {
              key: index,
              variants: itemVariants,
              className:
                "group relative bg-card/80 dark:bg-card-dark/80 backdrop-blur-md rounded-2xl p-8 shadow-sm hover:shadow-xl border border-border dark:border-border-dark/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden block text-left",
            };

            return cert.link ? (
              <motion.a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                {...commonProps}
              >
                <CardContent />
              </motion.a>
            ) : (
              <motion.div {...commonProps}>
                <CardContent />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
