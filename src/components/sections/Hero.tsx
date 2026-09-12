"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";

const words = [
  "Full-Stack Web Apps",
  "RESTful APIs",
  "Scalable Backends",
  "Real-time Applications",
  "Admin Dashboards",
  "Mobile Backends",
  "Authentication Systems",
  "Modern UI Interfaces",
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const router = useRouter();
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="
        absolute
        top-20
        left-[-150px]
        w-[500px]
        h-[500px]
        rounded-full
        bg-blue-500/20
        blur-[140px]
      "
        />

        <div
          className="
        absolute
        top-[40%]
        right-[-150px]
        w-[500px]
        h-[500px]
        rounded-full
        bg-purple-500/20
        blur-[140px]
      "
        />

        <div
          className="
        absolute
        bottom-0
        left-[30%]
        w-[400px]
        h-[400px]
        rounded-full
        bg-pink-500/10
        blur-[120px]
      "
        />

        <div
          className="
        absolute
        inset-0
        opacity-[0.03]
        bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
        bg-[size:80px_80px]
      "
        />
      </div>
      <div
        className="
      max-w-5xl
      mx-auto
      px-8
      w-full
      grid
      gap-16
      items-center
    "
      >
        {/* LEFT CONTENT */}
        <div className="mt-5">
          <p className="mb-4 tracking-[0.4em] uppercase text-gray-500">
            MERN Stack Developer
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            Crafting
          </h1>

          <div className="relative mt-4 h-[100px] md:h-[200px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{
                  duration: 0.5,
                }}
                className="
              absolute
              left-0
              text-black
              
              text-5xl
              md:text-7xl
              lg:text-8xl
              font-bold
            "
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </div>

          <p className="mt-8 max-w-xl text-lg text-gray-600">
            React.js, Next.js and React Native developer focused on building
            high-performance applications with exceptional user experiences.
          </p>

          <div className="mt-10 flex flex-col md:flex-row gap-4">
            <button
              onClick={() => {
                router.push("/pages/Projects");
              }}
              className="rounded-full bg-black px-8 py-4 text-white cursor-pointer"
            >
              View Projects
            </button>

            <button
              onClick={() => {
                router.push("/pages/Contact");
              }}
              className="rounded-full border text-slate-500 border-black px-8 py-4 cursor-pointer"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* RIGHT PHOTO */}
      </div>
    </section>
  );
}
