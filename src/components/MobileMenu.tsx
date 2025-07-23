"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "./LanguageToggle";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="md:hidden">
      {/* Animated Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="relative w-8 h-8 focus:outline-none z-50 hover:scale-110 transition-transform duration-300"
        aria-label="Toggle menu"
      >
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ease-in-out transform ${
              isOpen
                ? "rotate-45 translate-y-1.5 bg-amber-600"
                : isHomePage
                ? "-translate-y-1 bg-white drop-shadow-lg"
                : "-translate-y-1 bg-gray-700"
            }`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ease-in-out ${
              isOpen
                ? "opacity-0 scale-0 bg-amber-600"
                : isHomePage
                ? "opacity-100 scale-100 my-1 bg-white drop-shadow-lg"
                : "opacity-100 scale-100 my-1 bg-gray-700"
            }`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ease-in-out transform ${
              isOpen
                ? "-rotate-45 -translate-y-1.5 bg-amber-600"
                : isHomePage
                ? "translate-y-1 bg-white drop-shadow-lg"
                : "translate-y-1 bg-gray-700"
            }`}
          />
        </div>
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 ${
          isOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      />

      {/* Sliding Menu with Wave Animation */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-amber-50 to-orange-100 z-50 transform transition-transform duration-500 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="pt-20 px-6">
          {/* Logo */}
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-amber-700 mb-2">
              沖縄カフェ
            </h2>
            <div className="w-16 h-0.5 bg-amber-600 mx-auto"></div>
          </div>

          {/* Navigation Links with stagger animation */}
          <nav className="space-y-4">
            {[
              { href: "/", key: "nav.home", delay: "delay-100" },
              { href: "/menu", key: "nav.menu", delay: "delay-200" },
              { href: "/about", key: "nav.about", delay: "delay-300" },
              { href: "/contact", key: "nav.contact", delay: "delay-400" },
            ].map(({ href, key, delay }) => (
              <Link
                key={href}
                href={href}
                onClick={toggleMenu}
                className={`block py-3 px-4 text-gray-700 hover:text-amber-600 text-lg font-medium transition-all duration-300 hover:bg-white hover:bg-opacity-50 rounded-lg transform ${
                  isOpen
                    ? `translate-x-0 opacity-100 ${delay}`
                    : "translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: isOpen ? "0ms" : "0ms" }}
              >
                {t(key)}
              </Link>
            ))}
          </nav>

          {/* Language Toggle */}
          <div
            className={`mt-8 px-4 transform transition-all duration-500 ${
              isOpen
                ? "translate-x-0 opacity-100 delay-500"
                : "translate-x-8 opacity-0"
            }`}
          >
            <LanguageToggle />
          </div>

          {/* Decorative elements */}
          <div
            className={`mt-12 text-center transform transition-all duration-700 ${
              isOpen
                ? "translate-y-0 opacity-100 delay-700"
                : "translate-y-4 opacity-0"
            }`}
          >
            <div className="text-4xl mb-2">🌺</div>
            <p className="text-amber-700 text-sm font-light">
              心を癒す特別な時間
            </p>
          </div>
        </div>

        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            viewBox="0 0 400 100"
            className="w-full h-20 text-amber-200 opacity-30"
            preserveAspectRatio="none"
          >
            <path
              d="M0,50 Q100,20 200,50 T400,50 L400,100 L0,100 Z"
              fill="currentColor"
              className={`transition-all duration-1000 ${
                isOpen ? "animate-pulse" : ""
              }`}
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
