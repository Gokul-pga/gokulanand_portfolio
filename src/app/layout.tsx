"use client";

import React, { useState, useEffect } from "react";
import { Bebas_Neue, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import CustomCursor from "../components/common/CustomCursor";
import ScrollToTop from "../components/common/ScrollToTop";
import LoadingModal from "../components/modal/loadingModal";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body
        className={`${bebas.variable} ${spaceGrotesk.variable} md:cursor-none`}
      >
        {isLoading ? (
          <LoadingModal />
        ) : (
          <>
            <CustomCursor />
            <ScrollToTop />

            <Navbar />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
