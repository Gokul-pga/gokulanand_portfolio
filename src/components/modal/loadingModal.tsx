import React from "react";
import Image from "next/image";

export default function LoadingModal() {
  return (
    <div className="fixed inset-0 bg-white z-9999 flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute w-55 h-55  rounded-full border-4 border-t-black border-r-transparent border-b-black border-l-transparent animate-[spin_4s_linear_infinite] opacity-80" />

      <div className="absolute w-42.5 h-42.5  rounded-full border-4 border-t-transparent border-r-black border-b-transparent border-l-black animate-[spin_6s_linear_infinite_reverse] opacity-40" />

      <div className="relative w-48 h-24  flex items-center justify-center transition-transform duration-300 hover:scale-105">
        <Image
          src="/pga-logo.png"
          alt="PGA Logo"
          fill
          priority
          className="object-contain"
        />
      </div>
    </div>
  );
}
