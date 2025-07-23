"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`flex items-center rounded-full p-1 ${
        isHomePage ? "bg-white/20 backdrop-blur-sm" : "bg-gray-100"
      }`}
    >
      <button
        onClick={() => setLanguage("ja")}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
          language === "ja"
            ? isHomePage
              ? scrolled
                ? "bg-amber-600 text-white shadow-md"
                : "bg-white text-amber-600 shadow-md"
              : "bg-amber-600 text-white shadow-md"
            : isHomePage
            ? scrolled
              ? "text-gray-700 hover:bg-amber-50 hover:text-amber-600"
              : "text-white hover:bg-white/30"
            : "text-gray-700 hover:bg-amber-50 hover:text-amber-600"
        }`}
      >
        日本語
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
          language === "en"
            ? isHomePage
              ? scrolled
                ? "bg-amber-600 text-white shadow-md"
                : "bg-white text-amber-600 shadow-md"
              : "bg-amber-600 text-white shadow-md"
            : isHomePage
            ? scrolled
              ? "text-gray-700 hover:bg-amber-50 hover:text-amber-600"
              : "text-white hover:bg-white/30"
            : "text-gray-700 hover:bg-amber-50 hover:text-amber-600"
        }`}
      >
        English
      </button>
    </div>
  );
}
