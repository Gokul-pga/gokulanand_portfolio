"use client";

import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiArrowUpRight,
  FiCheckCircle,
  FiClock,
  FiLayers,
  FiZap,
  FiLayout,
} from "react-icons/fi";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden bg-white min-h-screen text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Background Radial Glow Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-400/10 blur-[130px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-indigo-400/10 blur-[130px]" />
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-sky-300/10 blur-[150px]" />
      </div>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-7xl mx-auto px-6 pt-32 pb-44 z-10"
      >
        {/* Subtitle Badge */}
        <motion.div variants={itemVariants} className="mb-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-[0.25em]">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            Contact & Collaboration
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] text-slate-900"
        >
          Let's Connect. <br />
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-slate-400 bg-clip-text text-transparent">
            Build Something Massive
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="mt-8 max-w-3xl text-lg md:text-xl text-slate-600 leading-relaxed font-normal"
        >
          Whether you're building a startup, scaling an existing product, or
          looking for a developer to bring ideas to life, I'm always open to
          discussing exciting opportunities, collaborations, and ambitious
          projects.
        </motion.p>

        {/* Contact Cards */}
        <motion.div
          variants={itemVariants}
          className="grid md:grid-cols-3 gap-6 mt-16"
        >
          {/* Email Card */}
          <motion.a
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            href="mailto:gokulanand2508@gmail.com"
            className="group relative p-8 rounded-[32px] border border-slate-200/80 bg-white/70 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.08)] hover:border-blue-200 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <FiMail size={26} />
              </div>
              <h3 className="text-sm uppercase tracking-wider text-slate-400 font-bold mt-8">
                Direct Email
              </h3>
              <p className="mt-2 text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors break-all">
                gokulanand2508@gmail.com
              </p>
            </div>
            <div className="mt-8 flex items-center text-xs font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
              <span>Send Email</span>
              <FiArrowUpRight className="ml-1" size={16} />
            </div>
          </motion.a>

          {/* Phone Card */}
          <motion.a
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            href="tel:+919500593141"
            className="group relative p-8 rounded-[32px] border border-slate-200/80 bg-white/70 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(16,185,129,0.08)] hover:border-emerald-200 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                <FiPhone size={26} />
              </div>
              <h3 className="text-sm uppercase tracking-wider text-slate-400 font-bold mt-8">
                Phone / WhatsApp
              </h3>
              <p className="mt-2 text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                +91 95005 93141
              </p>
            </div>
            <div className="mt-8 flex items-center text-xs font-semibold text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity">
              <span>Call Now</span>
              <FiArrowUpRight className="ml-1" size={16} />
            </div>
          </motion.a>

          {/* Location Card */}
          <motion.div
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="group relative p-8 rounded-[32px] border border-slate-200/80 bg-white/70 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(244,63,94,0.08)] hover:border-rose-200 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-500 group-hover:scale-110 group-hover:bg-rose-500 group-hover:text-white transition-all duration-300">
                <FiMapPin size={26} />
              </div>
              <h3 className="text-sm uppercase tracking-wider text-slate-400 font-bold mt-8">
                Location
              </h3>
              <p className="mt-2 text-lg font-bold text-slate-900 leading-snug">
                Sathyamangalam, <br />
                <span className="text-slate-600 font-medium">
                  Tamil Nadu - 638402, India
                </span>
              </p>
            </div>
            <div className="mt-8 flex items-center text-xs font-semibold text-rose-500">
              <span>Timezone: IST (UTC+5:30)</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Availability Box */}
        <motion.div
          variants={itemVariants}
          className="mt-16 bg-slate-50/80 border border-slate-200/80 rounded-[36px] p-8 md:p-12 backdrop-blur-sm shadow-sm relative overflow-hidden"
        >
          <div className="flex items-start justify-between flex-wrap gap-6 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/60 mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-xs font-semibold text-emerald-700">
                  Available for new opportunities
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                Let's Work Together
              </h2>
              <p className="text-slate-600 text-base md:text-lg max-w-2xl mt-3 leading-relaxed">
                I'm currently available for full-time roles, contract work, or
                high-impact freelance projects. Let’s create software people
                love using.
              </p>
            </div>
          </div>

          {/* Capability Badges */}
          <div className="mt-10 relative z-10">
            <div className="flex flex-wrap gap-3">
              {[
                {
                  label: "Full Time",
                  icon: "💼",
                  badgeColor: "hover:border-blue-400 hover:text-blue-600",
                },
                {
                  label: "Freelance",
                  icon: "🚀",
                  badgeColor: "hover:border-purple-400 hover:text-purple-600",
                },
                {
                  label: "Remote",
                  icon: "🌍",
                  badgeColor: "hover:border-emerald-400 hover:text-emerald-600",
                },
                {
                  label: "Contract",
                  icon: "📝",
                  badgeColor: "hover:border-amber-400 hover:text-amber-600",
                },
                {
                  label: "Startups",
                  icon: "🤝",
                  badgeColor: "hover:border-pink-400 hover:text-pink-600",
                },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className={`px-5 py-3 rounded-2xl bg-white border border-slate-200 text-slate-700 font-medium text-sm flex items-center gap-2.5 shadow-sm transition-all duration-200 cursor-default ${item.badgeColor}`}
                >
                  <span className="text-base">{item.icon}</span>
                  <span>{item.label}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 ml-1" />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-slate-200/70 flex flex-wrap items-center justify-between gap-4 text-sm text-slate-500 relative z-10">
            <div className="flex flex-wrap items-center gap-4">
              <span className="flex items-center gap-2">
                <FiMail className="text-blue-600" /> gokulanand2508@gmail.com
              </span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span className="flex items-center gap-2">
                <FiClock className="text-slate-400" /> Response within 24 hours
              </span>
            </div>
          </div>
        </motion.div>

        {/* Why Work With Me */}
        <motion.div variants={itemVariants} className="mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 tracking-tight">
            Engineering Value
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Modern Frontend",
                desc: "Crafting scalable, responsive designs using React, Next.js & Tailwind CSS.",
                icon: FiLayout,
                color: "text-blue-600 bg-blue-50 border-blue-100",
              },
              {
                title: "Scalable Architecture",
                desc: "Robust state management, optimized REST APIs, and clean backend models.",
                icon: FiLayers,
                color: "text-indigo-600 bg-indigo-50 border-indigo-100",
              },
              {
                title: "High Performance",
                desc: "Pixel-perfect implementation focused on Core Web Vitals & speed.",
                icon: FiZap,
                color: "text-amber-600 bg-amber-50 border-amber-100",
              },
            ].map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="p-8 rounded-[28px] border border-slate-200/80 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div
                    className={`w-12 h-12 rounded-2xl border ${feature.color} flex items-center justify-center mb-6`}
                  >
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Social Online Links */}
        <motion.div variants={itemVariants} className="mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 tracking-tight">
            Find Me Online
          </h2>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-7 py-4 rounded-full bg-slate-900 text-white font-semibold text-sm hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <FiGithub size={18} />
              <span>GitHub</span>
              <FiArrowUpRight size={16} className="opacity-70" />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-7 py-4 rounded-full bg-white border border-slate-200 text-slate-800 font-semibold text-sm hover:border-blue-600 hover:text-blue-600 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <FiLinkedin size={18} className="text-blue-600" />
              <span>LinkedIn</span>
              <FiArrowUpRight size={16} className="opacity-70" />
            </a>
          </div>
        </motion.div>
      </motion.section>

      {/* Massive Faded Background Watermark */}
      <div className="absolute bottom-[-20px] left-0 text-[12vw] font-black text-slate-900/[0.03] leading-none pointer-events-none select-none z-0 tracking-tight">
        GET IN TOUCH
      </div>
    </main>
  );
}
