import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Facebook,
  Mail,
  MapPin,
  Phone,
  Heart,
} from "lucide-react";
import data from "../data";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialIcons = {
    FaGithub: Github,
    FaLinkedin: Linkedin,
    FaFacebook: Facebook,
  };

  const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experiences", href: "#experiences" },
    { name: "Education", href: "#education" },
  ];

  return (
    <footer className="relative bg-header dark:bg-header-dark pt-16 pb-8 overflow-hidden border-t border-border dark:border-border-dark transition-colors duration-300">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-30" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-text dark:text-text-dark tracking-tight">
              {data.name}
            </h3>
            <p className="text-secondary leading-relaxed">
              {data.summary[0].split(".")[0]}. Building digital experiences with
              passion and precision.
            </p>
            <div className="flex gap-4 pt-2">
              {data.socialMedia.map((social) => {
                const Icon = socialIcons[social.icon] || Github;
                return (
                  <a
                    key={social.id}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-card dark:bg-card-dark border border-border dark:border-border-dark flex items-center justify-center text-secondary hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group"
                    aria-label={social.name}
                  >
                    <Icon
                      size={20}
                      className="group-hover:scale-110 transition-transform"
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-text dark:text-text-dark mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-secondary hover:text-primary transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-text dark:text-text-dark mb-6">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-secondary">
                <MapPin size={20} className="text-primary shrink-0 mt-1" />
                <span>{data.address}</span>
              </li>
              <li className="flex items-center gap-3 text-secondary">
                <Mail size={20} className="text-primary shrink-0" />
                <a
                  href={`mailto:${data.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {data.email}
                </a>
              </li>
              {data.phones.map((phone, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 text-secondary"
                >
                  <Phone size={20} className="text-primary shrink-0" />
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="hover:text-primary transition-colors"
                  >
                    {phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / CTA (Optional placeholder) */}
          <div>
            <h4 className="text-lg font-bold text-text dark:text-text-dark mb-6">
              Let's Connect
            </h4>
            <p className="text-secondary mb-4">
              Open for opportunities and collaborations. Feel free to reach out!
            </p>
            <a
              href={`mailto:${data.email}`}
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary text-white font-medium shadow-lg shadow-primary/25 hover:bg-primary/90 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300 w-full md:w-auto"
            >
              Say Hello
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border dark:border-border-dark flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary text-sm">
            &copy; {currentYear} {data.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
