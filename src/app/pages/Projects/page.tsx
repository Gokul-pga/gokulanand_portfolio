import { FiCpu, FiShield, FiSliders, FiActivity } from "react-icons/fi";
import { motion } from "framer-motion";
import ProjectsListing from "@/src/components/sections/Projects";
import Skills from "@/src/components/sections/SkillsSection";

export default function SkillsPage() {
  return (
    <main className="bg-white min-h-screen text-black">
      {/* Hero */}
      <section className="pt-36 pb-6 px-6 bg-gradient-to-b from-transparent to-black/5">
        <div className="max-w-7xl mx-auto">
          {/* Animated Subtitle */}
          <p className="uppercase tracking-[0.4em] text-xs font-semibold text-gray-500 mb-5">
            Projects
          </p>

          {/* Primary Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-gray-800">
            Selected Work &
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-600 to-gray-400">
              Production Apps
            </span>
          </h1>

          {/* Focused, Project-Oriented Context Paragraph */}
          <p className="mt-8 max-w-3xl text-lg md:text-xl text-gray-600 leading-relaxed font-light">
            A curated collection of full-stack platforms, interactive
            dashboards, and mobile experiences. Each project represents a deep
            dive into solving real-world performance problems, architecting
            scalable state systems, and translating complex UI mockups into
            pixel-perfect production code.
          </p>
        </div>
      </section>

      {/* Skills Grid */}
      <ProjectsListing />

      {/* Experience Summary */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <p className="uppercase tracking-[0.4em] text-gray-500 mb-5">
            Experience
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-10">
            What I Focus On
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Modern Web Applications
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Developing production-ready applications with Next.js, React.js,
                Redux Toolkit, TanStack Query, and modern frontend architecture
                patterns.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Performance & UX</h3>
              <p className="text-gray-600 leading-relaxed">
                Optimizing performance, accessibility, responsiveness,
                animations, and user experience across devices and browsers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Implemented Features & Project Outcomes */}
      <section className="px-6 py-5 bg-gray-50 border-t border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Left Column: Lighthouse Score Visualization & Outcomes */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
              <span className="uppercase tracking-[0.4em] text-xs font-semibold text-emerald-600 mb-5 block">
                Project Outcomes
              </span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8 text-gray-900">
                Lighthouse Audited Performance
              </h2>

              {/* Dynamic SVG Gauge */}
              <div className="relative w-48 h-48 flex items-center justify-center bg-white rounded-full shadow-lg border border-gray-100 group hover:shadow-xl transition-shadow duration-300">
                <svg className="w-40 h-40 transform -rotate-90">
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    className="stroke-gray-100"
                    strokeWidth="10"
                    fill="transparent"
                  />
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    className="stroke-emerald-500 transition-all duration-1000 ease-out"
                    strokeWidth="10"
                    fill="transparent"
                    strokeDasharray="440"
                    strokeDashoffset="58" // Represents a stellar 96% score
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute flex flex-col items-center justify-center">
                  <span className="text-5xl font-black text-gray-900 tracking-tighter">
                    92%
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-emerald-600 font-bold mt-1">
                    Avg Score
                  </span>
                </div>
              </div>
              <p className="mt-8 text-sm text-gray-500 max-w-sm leading-relaxed">
                Measurable success metrics captured across deployed
                applications, validating near-instantaneous Time to Interactive
                (TTI) and optimized cumulative layout shifts.
              </p>
            </div>

            {/* Right Column: Key Implemented Features */}
            <div className="lg:col-span-7">
              <div className="mb-8 text-center lg:text-left">
                <span className="uppercase tracking-[0.4em] text-xs font-semibold text-gray-500 block mb-2">
                  Highlighted Implementations
                </span>
                <h3 className="text-2xl font-bold text-gray-800">
                  Core Architecture Features
                </h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                {/* Feature Box 1: Code Splitting */}
                <div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center mb-6">
                    <FiCpu className="text-xl text-indigo-600" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-gray-900">
                    Implemented Code Splitting
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Integrated dynamic route-level code splitting and lazy
                    loading via Next.js, lowering initial JS bundle sizes to
                    speed up initial paint times.
                  </p>
                </div>

                {/* Feature Box 2: Reusable Components */}
                <div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                    <FiSliders className="text-xl text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-gray-900">
                    Reusable UI Architecture
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Engineered high-quality atomic component models styled with
                    Tailwind, keeping the codebase DRY (Don't Repeat Yourself)
                    while preserving absolute design precision.
                  </p>
                </div>

                {/* Feature Box 3: Security & 2FA */}
                <div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center mb-6">
                    <FiShield className="text-xl text-rose-600" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-gray-900">
                    Secure TOTP Integration
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Successfully configured and deployed secure Two-Factor
                    Authentication using Time-Based One-Time Passwords (TOTP) to
                    guarantee bulletproof user validation.
                  </p>
                </div>

                {/* Feature Box 4: Optimization */}
                <div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6">
                    <FiActivity className="text-xl text-emerald-600" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-gray-900">
                    Performance Asset Pipe
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Implemented robust WebP/AVIF media pipelines, font
                    self-hosting, and React state caching to maintain high
                    scoring layouts under peak conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
