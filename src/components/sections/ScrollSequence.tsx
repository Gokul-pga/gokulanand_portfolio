"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollSequence() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const frameCount = 61;

    const images: HTMLImageElement[] = [];

    const currentFrame = (index: number) =>
      `/frames/ezgif-frame-${String(index + 1).padStart(3, "0")}.jpg`;
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    const canvas = canvasRef.current;

    if (!canvas) return;

    const context = canvas.getContext("2d");

    if (!context) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();

    const sequence = {
      frame: 0,
    };

    const render = () => {
      const img = images[sequence.frame];

      if (!img || !img.complete) return;

      context.clearRect(0, 0, canvas.width, canvas.height);

      const scale = Math.max(
        canvas.width / img.width,
        canvas.height / img.height
      );

      const x = (canvas.width - img.width * scale) / 2;
      const y = (canvas.height - img.height * scale) / 2;

      context.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    Promise.all(
      images.map(
        (img) =>
          new Promise((resolve) => {
            img.onload = resolve;
          })
      )
    ).then(() => {
      render();

      gsap.to(sequence, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",

        scrollTrigger: {
          trigger: canvas,
          start: "top top",
          end: "+=4000",
          scrub: true,
          pin: true,
        },

        onUpdate: render,
      });
    });

    const handleResize = () => {
      setCanvasSize();
      render();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="relative h-[500vh]">
      <canvas ref={canvasRef} className="block w-full h-screen" />
    </section>
  );
}
