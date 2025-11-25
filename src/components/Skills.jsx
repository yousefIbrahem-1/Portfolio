import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  Brain,
  Briefcase,
  Globe,
  Wrench,
  Users,
  Lightbulb,
  Sparkles,
  TrendingUp,
  Languages,
} from "lucide-react";
import data from "../data";

const Skills = () => {
  // Separate technical skills from soft skills and languages
  const technicalSkills = data.skills.filter(
    (category) =>
      category.type !== "Languages" && category.type !== "Soft Skills"
  );
  const languagesSkills = data.skills.find((cat) => cat.type === "Languages");
  const softSkills = data.skills.find((cat) => cat.type === "Soft Skills");

  // Dynamic category configuration
  const categoryConfig = {
    "Front-End": {
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      emoji: "💻",
      subtitle: "Web Interfaces",
    },
    "Back-End": {
      icon: Database,
      color: "from-green-500 to-emerald-500",
      emoji: "⚙️",
      subtitle: "Server & APIs",
    },
    "Artificial Intelligence": {
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      emoji: "🤖",
      subtitle: "ML & AI",
    },
    "Computer Science": {
      icon: Briefcase,
      color: "from-orange-500 to-red-500",
      emoji: "🎓",
      subtitle: "Algorithms & DS",
    },
    Tools: {
      icon: Wrench,
      color: "from-yellow-500 to-amber-500",
      emoji: "🛠️",
      subtitle: "Development Tools",
    },
    Languages: {
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      emoji: "🌐",
      subtitle: "Global Communication",
    },
    "Soft Skills": {
      icon: Users,
      color: "from-purple-500 to-pink-500",
      emoji: "💡",
      subtitle: "Professional Excellence",
    },
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const glowAnimation = {
    boxShadow: [
      "0 0 20px rgba(139, 92, 246, 0.3)",
      "0 0 40px rgba(139, 92, 246, 0.5)",
      "0 0 20px rgba(139, 92, 246, 0.3)",
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <section
      id="skills"
      className="py-24 bg-linear-to-b from-bg via-gray-50 to-bg dark:from-bg-dark dark:via-gray-900 dark:to-bg-dark transition-colors relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-5 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block mb-4"
          >
            <Sparkles className="w-12 h-12 text-primary mx-auto" />
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold text-text dark:text-text-dark mb-6 bg-clip-text text-transparent bg-linear-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient">
            Skills & Expertise
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="h-1.5 bg-linear-to-r from-primary via-secondary to-primary mx-auto rounded-full mb-6"
          />
          <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technical proficiency and interpersonal capabilities
            that drive innovative solutions
          </p>
        </motion.div>

        {/* Technical Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {technicalSkills.map((category, categoryIndex) => {
            const config =
              categoryConfig[category.type] || categoryConfig[" Front-End"];
            const CategoryIcon = config.icon;
            const gradientColor = config.color;

            return (
              <motion.div
                key={categoryIndex}
                variants={cardVariants}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group relative"
              >
                {/* Animated gradient border */}
                <div className="absolute -inset-0.5 bg-linear-to-r from-primary via-secondary to-primary rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500 group-hover:blur-md" />

                <div className="relative h-full bg-white dark:bg-gray-900 rounded-2xl p-7 border border-gray-200 dark:border-border-dark shadow-lg hover:shadow-2xl transition-all duration-500">
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6 pb-5 border-b border-gray-200 dark:border-border-dark">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.15 }}
                      transition={{ duration: 0.7, ease: "easeInOut" }}
                      className={`relative w-14 h-14 rounded-xl bg-linear-to-br ${gradientColor} flex items-center justify-center shadow-lg`}
                    >
                      <CategoryIcon className="w-7 h-7 text-white" />
                      <motion.div
                        className="absolute inset-0 rounded-xl"
                        animate={glowAnimation}
                      />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-text dark:text-text-dark group-hover:text-primary transition-colors">
                        {category.type}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {category.list.length} technologies
                      </p>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.04 }}
                    className="grid grid-cols-2 gap-3"
                  >
                    {category.list.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        variants={skillVariants}
                        whileHover={{
                          scale: 1.08,
                          y: -3,
                          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="relative px-3 py-2.5 bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 text-sm font-medium text-text dark:text-text-dark hover:border-primary/40 dark:hover:border-primary/40 transition-all cursor-pointer group/skill overflow-hidden"
                      >
                        <motion.div
                          className="absolute inset-0 bg-linear-to-r from-primary/10 to-secondary/10 opacity-0 group-hover/skill:opacity-100 transition-opacity"
                          layoutId={`skill-bg-${categoryIndex}-${skillIndex}`}
                        />
                        <span className="relative z-10 block text-center whitespace-normal leading-tight">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Animated Activity Indicator */}
                  <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800/50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Progress Step by Step | Always Learn
                      </span>
                      <TrendingUp className="w-3 h-3 text-primary" />
                    </div>
                    <div className="h-1.5 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden relative">
                      <motion.div
                        className={`absolute inset-y-0 left-0 w-1/3 bg-linear-to-r ${gradientColor} opacity-50 blur-sm`}
                        animate={{
                          x: ["-100%", "400%"],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      <motion.div
                        className={`absolute inset-y-0 left-0 w-1/3 bg-linear-to-r ${gradientColor}`}
                        animate={{
                          x: ["-100%", "400%"],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Languages & Soft Skills Section - Different Design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <motion.div animate={floatingAnimation} className="inline-block">
              <Lightbulb className="w-10 h-10 text-secondary mx-auto mb-3" />
            </motion.div>
            <h3 className="text-3xl md:text-4xl font-bold text-text dark:text-text-dark mb-3">
              Personal Attributes
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Communication and interpersonal excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
            {/* Languages */}
            {languagesSkills && (
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.03 }}
                className="relative group flex flex-col"
              >
                <div className="absolute -inset-1 bg-linear-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-20 group-hover:opacity-40 blur-lg transition-opacity" />
                <div className="relative flex flex-col h-full bg-linear-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 rounded-2xl p-8 border-2 border-blue-200 dark:border-blue-800 shadow-xl">
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                      className="w-16 h-16 rounded-full bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg"
                    >
                      <Globe className="w-8 h-8 text-white" />
                    </motion.div>
                    <div>
                      <h4 className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                        Languages
                      </h4>
                      <p className="text-sm text-blue-600 dark:text-blue-300">
                        Global Communication
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-center content-center gap-4 flex-1">
                    {languagesSkills.list.map((lang, index) => {
                      const Icon = lang.name === "English" ? Languages : Globe;
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{
                            scale: 1.05,
                            y: -2,
                          }}
                          className="flex items-center gap-4 px-6 py-4 bg-white/80 dark:bg-gray-900/80 rounded-2xl border border-blue-100 dark:border-blue-900/50 hover:border-blue-300 dark:hover:border-blue-700 transition-all cursor-pointer backdrop-blur-md shadow-sm hover:shadow-lg group/lang min-w-[160px]"
                        >
                          <div className="p-2.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover/lang:bg-blue-500 group-hover/lang:text-white transition-colors duration-300">
                            <Icon className="w-6 h-6" />
                          </div>
                          <div className="text-left">
                            <span className="block font-bold text-gray-800 dark:text-gray-100 text-lg">
                              {lang.name}
                            </span>
                            {lang.name === "Arabic" && (
                              <span className="text-xs text-blue-500 dark:text-blue-400 font-medium uppercase tracking-wider">
                                Native
                              </span>
                            )}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Soft Skills */}
            {softSkills && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.03 }}
                className="relative group flex flex-col"
              >
                <div className="absolute -inset-1 bg-linear-to-r from-purple-500 to-pink-500 rounded-2xl opacity-20 group-hover:opacity-40 blur-lg transition-opacity" />
                <div className="relative flex flex-col h-full bg-linear-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 rounded-2xl p-8 border-2 border-purple-200 dark:border-purple-800 shadow-xl">
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      whileHover={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.5 }}
                      className="w-16 h-16 rounded-full bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg"
                    >
                      <Users className="w-8 h-8 text-white" />
                    </motion.div>
                    <div>
                      <h4 className="text-2xl font-bold text-purple-900 dark:text-purple-100">
                        Soft Skills
                      </h4>
                      <p className="text-sm text-purple-600 dark:text-purple-300">
                        Professional Excellence
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 flex-1">
                    {softSkills.list.map((skill, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{
                          scale: 1.1,
                          rotate: [0, -2, 2, 0],
                        }}
                        className="p-4 bg-white/70 dark:bg-gray-900/70 rounded-xl border border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600 transition-all cursor-pointer backdrop-blur-sm text-center group/soft"
                      >
                        <motion.div
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: index * 0.3,
                          }}
                          className="text-2xl mb-2"
                        >
                          💡
                        </motion.div>
                        <span className="font-semibold text-purple-900 dark:text-purple-100 text-sm block">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Bottom Stats with Modern Horizontal Design */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20"
        >
          <div className="bg-linear-to-br from-white via-gray-50/50 to-white dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-900 rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-2xl overflow-hidden relative backdrop-blur-sm">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-linear-to-tr from-secondary/10 to-primary/10 rounded-full blur-3xl opacity-50" />

            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  label: "Technical Skills",
                  value: technicalSkills.reduce(
                    (acc, cat) => acc + cat.list.length,
                    0
                  ),
                  icon: Code,
                  color: "from-blue-500 to-cyan-500",
                  textColor: "text-blue-600 dark:text-blue-400",
                  iconBg: "from-blue-500 to-cyan-500",
                  borderColor: "border-blue-200 dark:border-blue-800/50",
                  hoverBorder:
                    "group-hover:border-blue-400 dark:group-hover:border-blue-500",
                },
                {
                  label: "Categories",
                  value: data.skills.length,
                  icon: Briefcase,
                  color: "from-green-500 to-emerald-500",
                  textColor: "text-green-600 dark:text-green-400",
                  iconBg: "from-green-500 to-emerald-500",
                  borderColor: "border-green-200 dark:border-green-800/50",
                  hoverBorder:
                    "group-hover:border-green-400 dark:group-hover:border-green-500",
                },
                {
                  label: "Languages",
                  value: languagesSkills?.list.length || 0,
                  icon: Globe,
                  color: "from-purple-500 to-pink-500",
                  textColor: "text-purple-600 dark:text-purple-400",
                  iconBg: "from-purple-500 to-pink-500",
                  borderColor: "border-purple-200 dark:border-purple-800/50",
                  hoverBorder:
                    "group-hover:border-purple-400 dark:group-hover:border-purple-500",
                },
                {
                  label: "Soft Skills",
                  value: softSkills?.list.length || 0,
                  icon: Users,
                  color: "from-orange-500 to-red-500",
                  textColor: "text-orange-600 dark:text-orange-400",
                  iconBg: "from-orange-500 to-red-500",
                  borderColor: "border-orange-200 dark:border-orange-800/50",
                  hoverBorder:
                    "group-hover:border-orange-400 dark:group-hover:border-orange-500",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                  }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="relative group"
                >
                  {/* Gradient glow on hover */}
                  <div
                    className={`absolute -inset-1 bg-linear-to-r ${stat.color} rounded-2xl opacity-0 group-hover:opacity-75 blur-lg transition-all duration-500`}
                  />

                  <div
                    className={`relative flex items-center gap-4 p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border-2 ${stat.borderColor} ${stat.hoverBorder} transition-all duration-300 shadow-lg group-hover:shadow-xl`}
                  >
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`relative shrink-0 w-16 h-16 rounded-xl bg-linear-to-br ${stat.iconBg} flex items-center justify-center shadow-lg overflow-hidden`}
                    >
                      <stat.icon className="w-8 h-8 text-white relative z-10" />
                      {/* Icon shine effect */}
                      <motion.div
                        animate={{
                          x: ["-100%", "100%"],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                          delay: index * 0.5,
                        }}
                        className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
                      />
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <motion.div
                        initial={{ scale: 0.8 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.3 + index * 0.1,
                          type: "spring",
                          stiffness: 200,
                        }}
                        className={`text-4xl font-bold ${stat.textColor} mb-1`}
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                        {stat.label}
                      </div>
                    </div>

                    {/* Animated accent indicator */}
                    <motion.div
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                      className={`absolute right-4 top-1/2 -translate-y-1/2 w-1.5 h-3/5 bg-linear-to-b ${stat.color} rounded-full shadow-lg`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
