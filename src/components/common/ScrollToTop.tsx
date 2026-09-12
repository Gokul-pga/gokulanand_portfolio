"use client";

import React, { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

export default function ScrollToTop() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }

      // Only display the button after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Convert progress percentage to SVG dash offset (perimeter of radius 18 is ~113)
  const strokeDashoffset = 113 - (113 * scrollProgress) / 100;

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-28 md:bottom-8 right-8 z-[9990] flex items-center justify-center w-12 h-12 bg-black rounded-full border border-white/10 shadow-2xl transition-all duration-500 ease-out active:scale-95 group clickable ${
        isVisible
          ? "translate-y-0 opacity-100 scale-100"
          : "translate-y-6 opacity-0 scale-75 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      {/* Dynamic Progress Circle */}
      <svg className="absolute w-full h-full transform -rotate-90">
        <circle
          cx="24"
          cy="24"
          r="18"
          className="stroke-white/10"
          strokeWidth="2"
          fill="transparent"
        />
        <circle
          cx="24"
          cy="24"
          r="18"
          className="stroke-white transition-all duration-75"
          strokeWidth="2"
          fill="transparent"
          strokeDasharray="113"
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>

      {/* Futuristic Vector Arrow */}
      <FiArrowUp className="text-white text-lg relative z-10 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110" />
    </button>
  );
}
