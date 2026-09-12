"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { BsFillPaletteFill } from "react-icons/bs";
import {
  FiSearch,
  FiCode,
  FiLayout,
  FiZap,
  FiCheckCircle,
  FiArrowRight,
  FiGithub,
  FiMonitor,
  FiGlobe,
} from "react-icons/fi";

const phases = [
  {
    id: 1,
    title: "01 · Discovery",
    icon: FiSearch,
    gradient: "from-indigo-600 to-violet-600",
    steps: [
      {
        title: "Requirement Analysis",
        desc: "Define core business goals, target audience, and scope.",
        icon: FiSearch,
      },
      {
        title: "Research & Benchmarking",
        desc: "Analyze competitors and market trends for strategic positioning.",
        icon: FiGlobe,
      },
      {
        title: "Project Planning",
        desc: "Establish milestones, priority features, and delivery timelines.",
        icon: FiLayout,
      },
    ],
  },
  {
    id: 2,
    title: "02 · Design",
    icon: BsFillPaletteFill,
    gradient: "from-pink-600 to-rose-600",
    steps: [
      {
        title: "System Architecture",
        desc: "Design scalable folder structure, APIs, and data models.",
        icon: FiCode,
      },
      {
        title: "UI/UX Design",
        desc: "Craft modern, accessible, and high-converting interface layouts.",
        icon: FiMonitor,
      },
      {
        title: "Design System",
        desc: "Define reusable components, typography, and color tokens.",
        icon: BsFillPaletteFill,
      },
    ],
  },
  {
    id: 3,
    title: "03 · Build",
    icon: FiCode,
    gradient: "from-blue-600 to-cyan-600",
    steps: [
      {
        title: "Frontend Engineering",
        desc: "Build responsive UIs with React, Next.js, and Tailwind CSS.",
        icon: FiMonitor,
      },
      {
        title: "Backend Services",
        desc: "Develop secure RESTful APIs, auth, and database logic.",
        icon: FiGithub,
      },
      {
        title: "System Integration",
        desc: "Connect frontend, backend, and third-party services smoothly.",
        icon: FiZap,
      },
    ],
  },
  {
    id: 4,
    title: "04 · Optimize",
    icon: FiCheckCircle,
    gradient: "from-emerald-600 to-green-600",
    steps: [
      {
        title: "Quality Assurance",
        desc: "Validate functionality, cross-device responsiveness, and edge cases.",
        icon: FiCheckCircle,
      },
      {
        title: "Performance Tuning",
        desc: "Optimize Core Web Vitals, bundle size, and loading speeds.",
        icon: FiZap,
      },
      {
        title: "Security Auditing",
        desc: "Ensure data protection, authorization, and input validation.",
        icon: FiCode,
      },
    ],
  },
  {
    id: 5,
    title: "05 · Launch",
    icon: FiGithub,
    gradient: "from-amber-600 to-orange-600",
    steps: [
      {
        title: "Production Deployment",
        desc: "Deploy via CI/CD pipelines with optimal environment setups.",
        icon: FiGithub,
      },
      {
        title: "Health Monitoring",
        desc: "Track uptime, performance metrics, and application errors.",
        icon: FiMonitor,
      },
      {
        title: "Iterative Updates",
        desc: "Refine based on real-world usage and user feedback.",
        icon: FiArrowRight,
      },
    ],
  },
];

const DevelopmentJourney = () => {
  const [activePhase, setActivePhase] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const ActiveIcon = phases[activePhase].icon;

  return (
    <section
      ref={ref}
      className="py-12 md:py-20 px-4 md:px-6 bg-gray-50 text-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-xs uppercase tracking-widest font-semibold text-violet-600 bg-violet-100/60 px-3 py-1 rounded-full border border-violet-200"
          >
            Process Overview
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mt-3 tracking-tight"
          >
            Development Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mt-3 text-sm md:text-base text-gray-600"
          >
            A structured workflow to transform complex ideas into performant,
            scalable digital products.
          </motion.p>
        </div>

        {/* Phase Tabs */}
        <div className="flex overflow-x-auto pb-3 mb-8 gap-2 no-scrollbar justify-start md:justify-center">
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            const isActive = activePhase === index;
            return (
              <button
                key={phase.id}
                onClick={() => setActivePhase(index)}
                className={`px-4 py-2 rounded-full font-medium text-xs md:text-sm whitespace-nowrap transition-all duration-200 flex items-center gap-2 shrink-0 ${
                  isActive
                    ? `bg-gradient-to-r ${phase.gradient} text-white shadow-md`
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                <Icon className="text-sm" />
                {phase.title}
              </button>
            );
          })}
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-6 items-start">
          {/* Detailed Steps List */}
          <motion.div
            key={activePhase}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-4"
          >
            <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
              <ActiveIcon className="text-2xl text-violet-600" />
              <h3 className="text-lg md:text-xl font-bold">
                {phases[activePhase].title}
              </h3>
            </div>

            <div className="space-y-3">
              {phases[activePhase].steps.map((step, idx) => {
                const StepIcon = step.icon;
                return (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-gray-50/80 border border-gray-100 flex items-start gap-3"
                  >
                    <StepIcon className="text-base text-violet-600 mt-1 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm text-gray-800">
                        {step.title}
                      </h4>
                      <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Graphical Summary / Overview */}
          <motion.div
            key={`summary-${activePhase}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold uppercase text-gray-400 tracking-wider">
                  Phase Progress
                </span>
                <span className="text-xs font-semibold text-violet-600">
                  {activePhase + 1} of {phases.length}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden mb-6">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{
                    width: `${((activePhase + 1) / phases.length) * 100}%`,
                  }}
                  transition={{ duration: 0.4 }}
                  className="h-full bg-violet-600"
                />
              </div>

              {/* Quick Deliverable Summary */}
              <div className="space-y-2">
                {phases[activePhase].steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-gray-50 text-xs font-medium text-gray-700"
                  >
                    <span className="truncate">{step.title}</span>
                    <FiArrowRight className="text-gray-400 shrink-0 ml-2" />
                  </div>
                ))}
              </div>
            </div>

            {/* Mindset Footer */}
            <div className="mt-6 pt-4 border-t border-gray-100">
              <p className="text-xs text-gray-500 italic">
                "Emphasis on performance, accessibility, and clean architecture
                at every milestone."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentJourney;
