"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiTailwindcss,
  SiMui,
  SiNodedotjs,
  SiMongodb,
  SiReactquery,
  SiGit,
  SiGithub,
  SiFigma,
  SiExpress,
  SiFramer,
  SiGsap,
  SiHostinger,
} from "react-icons/si";
import { TbTableFilled } from "react-icons/tb";
import { FaMobileAlt } from "react-icons/fa";
import { FiCpu, FiLayers, FiActivity } from "react-icons/fi";
const AwsIcon = ({
  size = 20,
  color = "#FF9900",
}: {
  size?: number;
  color?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6.75 8.25c0-.414.336-.75.75-.75h2.25c.414 0 .75.336.75.75v3.75h2.25V8.25c0-.414.336-.75.75-.75h2.25c.414 0 .75.336.75.75v7.5c0 .414-.336.75-.75.75h-2.25c-.414 0-.75-.336-.75-.75v-2.25h-2.25v2.25c0 .414-.336.75-.75.75H7.5c-.414 0-.75-.336-.75-.75v-7.5zM.008 18.238c.117.202.355.29.569.183 2.155-1.077 4.71-1.642 7.308-1.642 2.766 0 5.485.643 7.749 1.83.197.103.438.035.548-.152l.628-1.077c.11-.188.047-.432-.146-.538-2.585-1.41-5.69-2.148-8.779-2.148-2.903 0-5.76.657-8.17 1.862-.213.106-.289.362-.17.568l.463.814zm23.635-4.524c-.217-.184-2.175-1.583-4.886-1.127-.245.041-.336.331-.149.49 1.168.995 2.147 1.481 3.203 2.01.21.105.45-.045.438-.281l-.031-.295c-.015-.145.717-.26.837-.367.12-.107.822-.206.588-.43zm-11.89-1.922c0-.414.336-.75.75-.75h2.25c.414 0 .75.336.75.75v1.5h-3.75v-1.5z" />
  </svg>
);
const skills = [
  // --- FRONTEND CORE ---
  {
    name: "React",
    icon: SiReact,
    color: "#61DAFB",
    left: "8%",
    top: "15%",
    category: "frontend",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#FFFFFF",
    left: "68%",
    top: "10%",
    category: "frontend",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    left: "42%",
    top: "20%",
    category: "frontend",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
    left: "18%",
    top: "35%",
    category: "frontend",
  },
  {
    name: "TanStack Table",
    icon: TbTableFilled,
    color: "#FF6B35",
    left: "55%",
    top: "72%",
    category: "frontend",
  },

  // --- DATA & STATE MANAGEMENT ---
  {
    name: "Redux",
    icon: SiRedux,
    color: "#764ABC",
    left: "75%",
    top: "32%",
    category: "state",
  },
  {
    name: "TanStack Query",
    icon: SiReactquery,
    color: "#FF4154",
    left: "30%",
    top: "52%",
    category: "state",
  },

  // --- UI, ANIMATION & DESIGN ---
  {
    name: "Tailwind",
    icon: SiTailwindcss,
    color: "#38BDF8",
    left: "8%",
    top: "78%",
    category: "ui",
  },
  {
    name: "Material UI",
    icon: SiMui,
    color: "#007FFF",
    left: "82%",
    top: "75%",
    category: "ui",
  },
  {
    name: "Framer Motion",
    icon: SiFramer,
    color: "#0055FF",
    left: "28%",
    top: "32%",
    category: "ui",
  },
  {
    name: "GSAP",
    icon: SiGsap,
    color: "#88CE02",
    left: "60%",
    top: "45%",
    category: "ui",
  },
  {
    name: "Figma",
    icon: SiFigma,
    color: "#F24E1E",
    left: "85%",
    top: "52%",
    category: "ui",
  },

  // --- BACKEND & DATABASE ---
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#5FA04E",
    left: "22%",
    top: "82%",
    category: "backend",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    color: "#EEEEEE",
    left: "40%",
    top: "85%",
    category: "backend",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
    left: "50%",
    top: "8%",
    category: "backend",
  },
  {
    name: "React Native",
    icon: FaMobileAlt,
    color: "#61DAFB",
    left: "88%",
    top: "16%",
    category: "backend",
  },

  // --- DEVOPS & DEPLOYMENT TOOLS ---
  {
    name: "Git",
    icon: SiGit,
    color: "#F05032",
    left: "5%",
    top: "55%",
    category: "devops",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    color: "#FFFFFF",
    left: "18%",
    top: "62%",
    category: "devops",
  },
  {
    name: "AWS",
    icon: AwsIcon,
    color: "#FF9900",
    left: "65%",
    top: "85%",
    category: "devops",
  },
  {
    name: "Hostinger",
    icon: SiHostinger,
    color: "#673DE6",
    left: "48%",
    top: "45%",
    category: "devops",
  },
];

const corePrinciples = [
  {
    title: "Performance First",
    desc: "Optimized bundle sizes, dynamic code-splitting, and perfect Core Web Vitals score baselines.",
    icon: FiActivity,
  },
  {
    title: "Type Safety & Security",
    desc: "End-to-end type integrity with rigid enterprise architecture schemas.",
    icon: FiCpu,
  },
  {
    title: "Scalable Architecture",
    desc: "Clean code structure engineered for progressive features and agile team cross-collaboration.",
    icon: FiLayers,
  },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Technologies" },
    { id: "frontend", name: "Frontend Core" },
    { id: "state", name: "Data & State" },
    { id: "ui", name: "UI Engineering" },
    { id: "backend", name: "Backend Ecosystem" },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section
      id="skills"
      className="relative bg-black overflow-hidden pt-24 pb-24 text-white"
    >
      {/* Huge Background Canvas Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <h1 className="text-[24vw] font-black text-white/[0.015] uppercase tracking-wider">
          STACK
        </h1>
      </div>

      {/* Top Header Layout */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 mb-16">
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <p className="uppercase tracking-[0.4em] text-gray-500 mb-4 text-sm font-medium">
              Skills & Stack
            </p>
            <h2 className="text-white text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
              Technologies
              <br />I Work With
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-gray-400 text-base md:text-lg leading-relaxed border-l-2 border-white/20 pl-4">
              Building reliable web apps requires a balanced mixture of
              structured database layouts, predictable asynchronous global state
              modules, and intuitive component trees.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Constellation Visual Field (Hidden on smaller screens to prevent component layout collisions) */}
      <div className="relative h-[650px] hidden md:block max-w-7xl mx-auto z-10">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              className="absolute cursor-pointer"
              style={{
                left: skill.left,
                top: skill.top,
              }}
              animate={{
                y: [0, -20, 0, 15, 0],
                x: [0, 12, 0, -12, 0],
              }}
              transition={{
                duration: 8 + index,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.25,
              }}
            >
              <div className="relative group flex flex-col items-center">
                {/* Glow Mask */}
                <div
                  className="absolute w-24 h-24 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-all duration-500"
                  style={{ backgroundColor: skill.color }}
                />

                {/* Main Icon */}
                <Icon
                  size={64}
                  style={{ color: skill.color }}
                  className="relative z-10 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                />

                {/* Popover Card Label */}
                <span className="mt-3 text-xs uppercase tracking-[0.2em] text-white opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-white/5 border border-white/10 px-3 py-1 rounded-full backdrop-blur-md">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Adaptive Mobile Grid System (Displays dynamically only on mobile screens) */}
      <div className="block md:hidden max-w-7xl mx-auto px-6 mb-16 relative z-10">
        <div className="grid grid-cols-3 gap-6">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="flex flex-col items-center justify-center p-4 bg-white/[0.02] border border-white/5 rounded-2xl"
              >
                <Icon size={40} style={{ color: skill.color }} />
                <span className="text-[10px] uppercase tracking-wider text-gray-400 mt-2 text-center">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Expanded Block Context Layer 01: Engineering Principles */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 mt-12 mb-24">
        <div className="grid md:grid-cols-3 gap-8">
          {corePrinciples.map((principle, index) => {
            const CurrentIcon = principle.icon;
            return (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 md:p-8 hover:bg-white/[0.04] transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <CurrentIcon className="text-xl text-gray-300" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  {principle.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {principle.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Expanded Block Context Layer 02: Directory Filter List Layout */}
      <div className="relative z-20 max-w-7xl mx-auto px-6">
        <div className="border-t border-white/10 pt-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <h3 className="text-2xl font-bold">Stack Directory Index</h3>

            {/* Horizontal Filter Navigation Bar */}
            <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 whitespace-nowrap ${
                    activeCategory === cat.id
                      ? "bg-white text-black font-semibold"
                      : "bg-white/5 text-gray-400 hover:bg-white/10"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Catalog Data Grid */}
          <motion.div
            layout
            className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {filteredSkills.map((skill) => {
              const ItemIcon = skill.icon;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={`list-${skill.name}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.01] border border-white/5 hover:border-white/20 hover:bg-white/[0.03] transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                    <ItemIcon style={{ color: skill.color }} size={20} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-semibold text-white group-hover:text-gray-200 transition-colors truncate">
                      {skill.name}
                    </h4>
                    <span className="text-[10px] text-gray-500 capitalize tracking-wide">
                      {skill.category} node
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
