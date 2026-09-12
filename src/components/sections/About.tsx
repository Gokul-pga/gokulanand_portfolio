"use client";

import { motion } from "framer-motion";
import { FiCode, FiActivity, FiLayers } from "react-icons/fi";

export default function About() {
  const pillars = [
    {
      title: "Performance Optimization",
      desc: "Engineering architectures targeting excellent rendering execution times, optimized bundle sizes, and seamless data loading workflows.",
      icon: FiActivity,
    },
    {
      title: "Robust State Management",
      desc: "Structuring bulletproof, predictable client-side caching schemas and real-time synchronization layers.",
      icon: FiLayers,
    },
    {
      title: "Pixel-Perfect UI Engineering",
      desc: "Translating sophisticated technical UI/UX specifications into performant, modular, and highly interactive frontend systems.",
      icon: FiCode,
    },
  ];

  return (
    <section
      id="about"
      className="bg-white px-6 md:px-16 py-24 text-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Section Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[0.3em] text-gray-500 mb-8 text-sm font-medium"
        >
          About Me
        </motion.p>

        {/* Core Description Split Grid */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              Building modern
              <br />
              digital experiences.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a MERN Stack Developer specializing in React.js, Next.js,
              Node.js, and React Native.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              I enjoy building scalable applications, enterprise dashboards,
              mobile experiences, and high-performance user interfaces.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              My focus is creating products that are fast, intuitive and
              visually engaging.
            </p>
          </motion.div>
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold tracking-tight">
              Engineering Focus
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              The primary architectural tenets driving my technical solutions.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => {
              const PillarIcon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-2xl border border-gray-100 hover:border-gray-200 bg-gray-50/50 hover:bg-gray-50 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-gray-900 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <PillarIcon className="text-lg" />
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-gray-900">
                      {pillar.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
