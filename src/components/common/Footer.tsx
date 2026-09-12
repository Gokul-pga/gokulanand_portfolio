"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaDiscord,
} from "react-icons/fa";
import { FiMail, FiArrowUp, FiHeart, FiCode, FiSend } from "react-icons/fi";
import { useState } from "react";

export default function Footer() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/Gokul-2527",
      label: "GitHub",
      color: "hover:text-gray-300",
    },
    {
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com/in/gokulanand-p-b3a7341a0",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },

    {
      icon: FaInstagram,
      href: "https://www.instagram.com/gokul_pga25",
      label: "Instagram",
      color: "hover:text-pink-400",
    },
  ];

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/pages/Projects" },
    { label: "SkillSets", href: "/pages/Skillsets" },
    { label: "Contact", href: "/pages/Contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-[#030712] text-white">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-8">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="uppercase tracking-[0.3em] text-indigo-400 font-semibold text-sm mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-indigo-400" />
              Let's Connect
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Build Something
              </span>
              <br />
              <span className="text-slate-200">Great Together</span>
            </h2>

            <p className="text-slate-400 mb-6 max-w-sm">
              Passionate about creating amazing digital experiences. Let's bring
              your ideas to life.
            </p>

            <motion.a
              whileHover={{ scale: 1.05, x: 4 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:gokulanand2508@gmail.com"
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl text-white font-medium shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-300"
            >
              <FiSend className="text-lg" />
              gokulanand2508@gmail.com
            </motion.a>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:pl-8"
          >
            <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
              Quick Links
            </p>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-indigo-400 transition-all duration-300" />
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:pl-8"
          >
            <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
              Connect With Me
            </p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{
                    scale: 1.15,
                    y: -4,
                    transition: { type: "spring", stiffness: 400 },
                  }}
                  whileTap={{ scale: 0.9 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`group relative p-3 rounded-2xl bg-[#1a1a2e] border border-slate-700/50 hover:border-${
                    social.color.split("-")[1]
                  }-500/50 transition-all duration-300 ${social.color}`}
                >
                  <social.icon className="text-xl relative z-10" />

                  {/* Hover Glow Effect */}
                  <div
                    className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-${
                      social.color.split("-")[1]
                    }-500/10 blur-sm`}
                  />

                  {/* Tooltip */}
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-10 flex items-center gap-2 text-sm text-emerald-400 bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20 w-fit"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for projects
            </motion.div>
          </motion.div>
        </div>

        {/* Divider with animated gradient */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent my-16"
        />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-500 text-sm flex items-center gap-2"
          >
            © {currentYear} Gokulanand.
            <span className="flex items-center gap-1">
              Made with{" "}
              <FiHeart className="text-red-400 animate-pulse" size={14} />
              using <FiCode className="text-indigo-400" size={14} />
            </span>
          </motion.p>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              opacity: 0,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            className={`absolute w-1 h-1 rounded-full ${
              [
                "bg-indigo-400",
                "bg-purple-400",
                "bg-pink-400",
                "bg-blue-400",
                "bg-emerald-400",
              ][i % 5]
            }`}
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
          />
        ))}
      </div>

      {/* Huge Background Text */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 0.03 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 pointer-events-none select-none overflow-hidden"
      >
        <h1 className="font-black uppercase whitespace-nowrap text-[120px] md:text-[220px] lg:text-[180px] leading-none text-white">
          WEB DEVELOPER
        </h1>
      </motion.div>
    </footer>
  );
}
