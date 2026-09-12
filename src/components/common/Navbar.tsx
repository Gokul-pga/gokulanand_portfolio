"use client";

import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import {
  FiUser,
  FiSliders,
  FiBriefcase,
  FiMail,
  FiDownload,
} from "react-icons/fi";

const menuItems = [
  {
    name: "About",
    path: "/pages/About",
    icon: FiUser,
  },
  {
    name: "Skills",
    path: "/pages/Skillsets",
    icon: FiSliders,
  },
  {
    name: "Projects",
    path: "/pages/Projects",
    icon: FiBriefcase,
  },
  {
    name: "Contact",
    path: "/pages/Contact",
    icon: FiMail,
  },
];

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const resumePath = "/resume/Gokulanand_Resume.pdf";

  return (
    <>
      {/* --- TOP BRAND HEADER (All Screens) --- */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed top-0 left-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 h-20 flex items-center"
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <motion.h1
            initial={{ y: 60 }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            onClick={() => router.push("/")}
            className="
              font-[var(--font-bebas)]
              text-2xl md:text-4xl
              tracking-[0.25em]
              text-black cursor-pointer
              clickable
            "
          >
            GOKULANAND
          </motion.h1>

          {/* DESKTOP MENU (Hidden on Mobile) */}
          <div
            className="
              hidden md:flex
              items-center
              gap-8
              font-[var(--font-space)]
              uppercase
              tracking-[0.2em]
              text-sm
              text-gray-600
            "
          >
            {menuItems.map((item, index) => {
              const isActive = pathname === item.path;
              return (
                <motion.button
                  key={item.name}
                  onClick={() => router.push(item.path)}
                  initial={{ y: 30 }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.4 + index * 0.1,
                  }}
                  className={`
                    relative py-2 transition-colors cursor-pointer clickable
                    ${
                      isActive ? "text-black font-semibold" : "hover:text-black"
                    }
                  `}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="desktopActiveUnderline"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-black"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.button>
              );
            })}

            {/* Desktop Resume Download Button */}
            <motion.a
              href={resumePath}
              download="Gokulanand_Resume.pdf"
              initial={{ y: 30 }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.4 + menuItems.length * 0.1,
              }}
              className="
                flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full
                hover:bg-gray-800 transition-colors text-xs font-medium tracking-widest
                clickable cursor-pointer ml-2
              "
            >
              <FiDownload className="text-sm" />
              <span>Resume</span>
            </motion.a>
          </div>
        </div>
      </motion.nav>

      {/* --- MOBILE BOTTOM NAVIGATION DOCK (Hidden on Desktop) --- */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-md">
        <nav className="bg-black/90 backdrop-blur-lg border border-white/10 rounded-full px-3 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.37)] flex items-center justify-between">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.path;

            return (
              <button
                key={item.name}
                onClick={() => router.push(item.path)}
                className="relative flex flex-col items-center justify-center flex-1 py-1 focus:outline-none transition-all duration-300"
              >
                {/* Active Pill Background */}
                {isActive && (
                  <motion.div
                    layoutId="mobileActivePill"
                    className="absolute inset-0 bg-white/10 rounded-full z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}

                {/* Icon & Label stack */}
                <div
                  className={`relative z-10 flex flex-col items-center gap-1 transition-colors duration-300 ${
                    isActive ? "text-white" : "text-gray-400"
                  }`}
                >
                  <Icon className="text-lg" />
                  <span className="text-[9px] font-medium tracking-wider uppercase font-[var(--font-space)]">
                    {item.name}
                  </span>
                </div>
              </button>
            );
          })}

          {/* Mobile Resume Download Button */}
          <a
            href={resumePath}
            download="Gokulanand_Resume.pdf"
            className="relative flex flex-col items-center justify-center flex-1 py-1 focus:outline-none text-gray-400 hover:text-white transition-colors duration-300"
          >
            <div className="relative z-10 flex flex-col items-center gap-1">
              <FiDownload className="text-lg text-emerald-400" />
              <span className="text-[9px] font-medium tracking-wider uppercase font-[var(--font-space)] text-emerald-400">
                Resume
              </span>
            </div>
          </a>
        </nav>
      </div>
    </>
  );
}
