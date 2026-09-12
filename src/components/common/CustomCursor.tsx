"use client";

import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 1. Smoothly track cursor coordinates
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // 2. Event Delegation: Instant hover detection for ALL elements (even dynamic ones)
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Checks if the hovered element or any of its parents is interactive
      const isClickable = target.closest(
        'a, button, [role="button"], input, select, textarea, .clickable'
      );
      setIsHovering(!!isClickable);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      // pointer-events-none ensures clicks bypass the cursor and register on your elements
      className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2 will-change-transform mix-blend-difference hidden md:block"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transition: "transform 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
      }}
    >
      {/* 
         Dynamic Dual-Element Cursor:
         A precise center target point with an outer lagging target ring
      */}
      <div className="relative flex items-center justify-center">
        {/* Precise Center Dot */}
        <div className="w-1.5 h-1.5 bg-white rounded-full absolute" />

        {/* Dynamic Rotating/Scaling Outer Ring */}
        <div
          className="absolute transition-transform duration-300 ease-out"
          style={{
            transform: `rotate(${isHovering ? "45deg" : "0deg"})`,
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`w-6 h-6 transition-all duration-300 ${
              isHovering ? "rotate-90 stroke-emerald-400" : "rotate-0"
            }`}
          >
            {/* Outer targeting crosshair segments */}
            <path d="M4 12H2" />
            <path d="M12 4V2" />
            <path d="M20 12h2" />
            <path d="M12 20v2" />
            {/* Precise center focus point */}
            <circle cx="12" cy="12" r="1.5" fill="currentColor" />
            {/* Inner broken focus ring */}
            <path d="M8 12a4 4 0 0 1 4-4" />
            <path d="M12 8a4 4 0 0 1 4 4" />
            <path d="M16 12a4 4 0 0 1-4 4" />
            <path d="M12 16a4 4 0 0 1-4-4" />
          </svg>
        </div>
      </div>
    </div>
  );
}
