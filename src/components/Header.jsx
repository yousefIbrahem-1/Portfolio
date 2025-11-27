import React, { useState, useEffect, useMemo } from "react";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import data from "../data";

const navItems = ["About", "Skills", "Projects", "Experiences", "Education"];

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const firstName = useMemo(() => data.name.split(" ")[0], []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.toLowerCase());
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Determine text color based on scroll state
  // When not scrolled (transparent bg), text should be white to contrast with dark landscape overlay
  // When scrolled (solid bg), text should follow the theme
  const textColorClass = scrolled
    ? "text-text dark:text-text-dark"
    : "text-white";

  const getNavItemClass = (isActive) => {
    if (scrolled) {
      return isActive
        ? "text-primary font-semibold"
        : "text-text dark:text-text-dark hover:text-primary";
    } else {
      return isActive
        ? "text-primary font-semibold" // Primary color usually looks okay on dark, or could force white/lighter primary
        : "text-white/90 hover:text-white";
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-lg bg-white/90 dark:bg-header-dark shadow-lg border-b border-gray-200 dark:border-border-dark py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-5 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className={`text-2xl font-bold cursor-pointer transition-colors duration-300 ${textColorClass}`}
          whileHover={{ scale: 1.05, letterSpacing: "1px" }}
        >
          {firstName}
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex list-none m-0 p-0 gap-5">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.toLowerCase();
              return (
                <li
                  key={item}
                  className="relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    className={`relative z-10 px-3 py-2 transition-colors duration-300 ${getNavItemClass(
                      isActive
                    )}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById(
                        item.toLowerCase()
                      );
                      if (element) {
                        const headerOffset = 80;
                        const elementPosition =
                          element.getBoundingClientRect().top;
                        const offsetPosition =
                          elementPosition + window.pageYOffset - headerOffset;

                        window.scrollTo({
                          top: offsetPosition,
                          behavior: "smooth",
                        });
                      }
                    }}
                  >
                    {item}
                  </a>
                  {hoveredIndex === index && (
                    <motion.div
                      layoutId="hoverBackground"
                      className={`absolute inset-0 rounded-lg shadow-sm z-0 ${
                        scrolled
                          ? "bg-linear-to-r from-primary/10 via-primary/5 to-transparent"
                          : "bg-white/10"
                      }`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                      }}
                    />
                  )}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <motion.button
            whileTap={{ scale: 0.9, rotate: 180 }}
            onClick={toggleTheme}
            className={`cursor-pointer p-2 border-none rounded-full transition-all shadow-sm hover:shadow-md ${
              scrolled
                ? "bg-gray-100 dark:bg-transparent text-text dark:text-text-dark hover:bg-primary/10 dark:hover:bg-secondary/10"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}
          </motion.button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className={`md:hidden cursor-pointer p-2 border-none rounded-full transition-all shadow-sm hover:shadow-md ${
              scrolled
                ? "bg-gray-100 dark:bg-transparent text-text dark:text-text-dark hover:bg-primary/10 dark:hover:bg-secondary/10"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white/95 dark:bg-header-dark backdrop-blur-lg border-b border-gray-200 dark:border-border-dark shadow-xl"
          >
            <div className="absolute inset-0 bg-linear-to-b from-transparent to-gray-50/50 dark:to-transparent pointer-events-none" />
            <ul className="relative flex flex-col list-none m-0 p-0 gap-4 px-5 py-5">
              {navItems.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    className={`block transition-colors ${
                      activeSection === item.toLowerCase()
                        ? "text-primary font-semibold"
                        : "text-text dark:text-text-dark hover:text-primary"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMenuOpen(false);
                      setTimeout(() => {
                        const element = document.getElementById(
                          item.toLowerCase()
                        );
                        if (element) {
                          const headerOffset = 80;
                          const elementPosition =
                            element.getBoundingClientRect().top;
                          const offsetPosition =
                            elementPosition + window.pageYOffset - headerOffset;

                          window.scrollTo({
                            top: offsetPosition,
                            behavior: "smooth",
                          });
                        }
                      }, 100);
                    }}
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
