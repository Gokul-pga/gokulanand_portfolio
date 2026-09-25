"use client";

import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Image from "next/image";
import { FiExternalLink, FiImage, FiBriefcase } from "react-icons/fi";

export interface Project {
  id: string;
  title: string;
  description: string;
  role?: string;
  isFreelance?: boolean;
  image?: string;
  tech: string[];
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: "01",
    title: "Zero-In Admin Suite",
    image: "/projects/Zero-in.png",
    description:
      "Built a real-time test management & analytics platform to automate test execution, detailed reporting, and validation, replacing manual tracking and improving operational efficiency. Developed secure OTP + TOTP 2FA, RBAC, and backend API integrations for configuration management and CRUD operations. Created responsive, reusable UI components and dashboards using React.js, Next.js, Material UI, and Tailwind CSS.",
    role: "Frontend Developer",
    isFreelance: false,
    tech: ["Next.js", "Tailwind CSS", "Spring Boot", "REST API", "Cron Jobs"],
  },
  {
    id: "02",
    title: "Light Store",
    description:
      "Product showcase and enquiry management platform with category-wise product listings, dynamic data fetching, backend email notifications, and a seamless customer experience.",
    role: "MERN Stack Developer",
    isFreelance: false,
    image: "/projects/LightStore.png",
    tech: ["Next.js", "Tailwind CSS", "Node.js", "Email Integration"],
    liveUrl: "https://www.skwoodenlights.com/Home",
  },
  {
    id: "03",
    title: "Mastery Abroad",
    description:
      "Study abroad platform enabling students to explore countries, universities, and courses with immersive UI experiences, counseling forms, and lead management workflows.",
    // role: "Frontend Developer (Hardcoded Data)",
    isFreelance: false,
    image: "/projects/MasteryAbroad.png",
    tech: ["Next.js", "Material UI", "Framer Motion", "Lead Generation"],
    liveUrl: "https://masteryabroad.in/",
  },
  {
    id: "04",
    title: "Lotus Agro",
    description:
      "Dynamic landscaping and gardening platform for showcasing plants, gardening products, and landscaping services. Built with a fully customizable admin panel that enables end-to-end management of website content, products, categories, services, images, and other sections without requiring code changes.",
    image: "/projects/Lotusagro.png",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
    ],
liveUrl: "https://lotusagro.in/",
  },
  {
    id: "05",
    title: "Ayil Electro Build",
    description:
      "Corporate business website with modern architecture-focused design, lead generation workflows, email integrations, optimized performance, and large-scale responsive UI implementation.",
    // role: "Frontend Developer (Hardcoded Data)",
    isFreelance: false,
    image: "/projects/AyilElectro.png",
    tech: ["Next.js", "Tailwind CSS", "Material UI", "Email Integration"],
    liveUrl: "https://ayilelectrobuild.com/",
  },
  {
    id: "06",
    title: "Loan Application System",
    description:
      "Complete loan onboarding ecosystem featuring React Native mobile applications, KYC verification, loan processing, real-time status tracking, audit logs, and administrative dashboards.",
    // role: "Full Stack Developer",
    isFreelance: false,
    image: "/projects/LoanApp.png",
    tech: ["React Native", "Spring Boot", "REST API", "KYC", "Admin Dashboard"],
    liveUrl: "https://shreemeenakshifinance.com/",
  },
];

export default function ProjectsListing() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(
      Math.floor(latest * projects.length),
      projects.length - 1,
    );

    setActiveIndex(index);
  });

  const activeProject = projects[activeIndex];
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const smoothRotateX = useSpring(rotateX, {
    stiffness: 180,
    damping: 18,
  });

  const smoothRotateY = useSpring(rotateY, {
    stiffness: 180,
    damping: 18,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateYValue = (x / rect.width - 0.5) * 18;
    const rotateXValue = -(y / rect.height - 0.5) * 18;

    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <>
      {/* MOBILE SECTION */}
      <section
        id="projects"
        className="bg-black py-20 px-4 flex flex-col lg:hidden"
      >
        <div className="max-w-7xl mx-auto">
          <p className="uppercase tracking-[0.3em] text-gray-500 mb-4">
            Featured Work
          </p>

          <h2 className="text-4xl font-bold text-white mb-16">
            Selected Projects
          </h2>

          <div className="space-y-16">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Image Wrapper */}
                <div className="relative overflow-hidden rounded-2xl border border-white/10">
                  {project.isFreelance && (
                    <span className="absolute top-3 right-3 z-10 px-3 py-1 text-xs font-semibold rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 backdrop-blur-md">
                      Freelance
                    </span>
                  )}

                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={1400}
                      height={900}
                      className="w-full h-[220px] object-cover"
                    />
                  ) : (
                    <div className="h-[220px] flex items-center justify-center bg-white/5 text-white/60">
                      <FiImage size={50} />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="mt-6">
                  <div className="text-white/10 text-6xl font-black">
                    {project.id}
                  </div>

                  <h3 className="text-2xl font-bold text-white mt-2">
                    {project.title}
                  </h3>

                  {project.role && (
                    <div className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-medium mt-1">
                      <FiBriefcase size={12} />
                      <span>Role: {project.role}</span>
                    </div>
                  )}

                  <p className="text-gray-400 mt-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-white hover:text-gray-300"
                      >
                        Visit Site
                        <FiExternalLink />
                      </a>
                    ) : (
                      <span className="text-white/40">
                        Preview Not Available
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DESKTOP SECTION */}
      <section
        ref={sectionRef}
        id="projects"
        className="hidden lg:block relative h-[400vh] bg-black"
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="max-w-7xl mx-auto h-full px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 h-full items-center">
              {/* LEFT SIDE */}
              <div className="order-2 lg:order-1 px-2 lg:px-0 mt-7">
                <p className="uppercase tracking-[0.25em] lg:tracking-[0.4em] text-gray-500 mb-4 lg:mb-6 text-xs lg:text-base">
                  Featured Work
                </p>

                <div className="flex gap-2 lg:gap-4 mb-6 lg:mb-12 overflow-x-auto">
                  {projects.map((project, index) => (
                    <button
                      key={project.id}
                      onClick={() => setActiveIndex(index)}
                      className="group"
                    >
                      <div
                        className={`h-[4px] rounded-full transition-all duration-500 ${
                          activeIndex === index
                            ? "w-24 bg-white"
                            : "w-16 bg-white/20 group-hover:bg-white/50"
                        }`}
                      />
                    </button>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProject.id}
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -80 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-white/10 text-[120px] md:text-[180px] font-black leading-none">
                        {activeProject.id}
                      </div>

                      {activeProject.isFreelance && (
                        <span className="px-4 py-1.5 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 backdrop-blur-md">
                          Freelance Project
                        </span>
                      )}
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-2">
                      {activeProject.title}
                    </h2>

                    {activeProject.role && (
                      <div className="inline-flex items-center gap-2 text-sm text-emerald-400 font-medium mb-6">
                        <FiBriefcase size={14} />
                        <span>Role: {activeProject.role}</span>
                      </div>
                    )}

                    <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl">
                      {activeProject.description}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {activeProject.tech.map((tech: string) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.08 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 15,
                          }}
                          className="group relative overflow-hidden px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white cursor-default"
                        >
                          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                          <span className="relative z-10">{tech}</span>
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* RIGHT SIDE */}
              <div className="order-1 lg:order-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProject.image || activeProject.id}
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.08 }}
                    transition={{ duration: 0.7 }}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{
                      rotateX: smoothRotateX,
                      rotateY: smoothRotateY,
                      transformPerspective: 1200,
                    }}
                    className="relative overflow-hidden rounded-[24px] border border-white/10 bg-neutral-900 shadow-[0_30px_80px_rgba(0,0,0,0.45)] cursor-pointer"
                  >
                    {activeProject.image ? (
                      <Image
                        src={activeProject.image}
                        alt={activeProject.title}
                        width={1400}
                        height={900}
                        className="w-full h-[300px] object-cover"
                        priority
                      />
                    ) : (
                      <div className="h-[300px] flex flex-col items-center justify-center bg-white/5 text-white/60">
                        <FiImage size={60} className="mb-4" />
                        <h3 className="text-lg font-medium">
                          No Preview Available
                        </h3>
                        <p className="text-sm text-white/40 mt-2">
                          Screenshot not uploaded yet
                        </p>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                <div className="mt-6 flex justify-end">
                  {activeProject?.liveUrl ? (
                    <a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-all duration-300"
                    >
                      Visit Site
                      <FiExternalLink size={18} />
                    </a>
                  ) : (
                    <span className="text-white/40">Preview Not Available</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
