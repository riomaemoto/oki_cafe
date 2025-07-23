"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "./LanguageToggle";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isMenuPage = pathname === "/menu";
  const isAboutPage = pathname === "/about";
  const isContactPage = pathname === "/contact";

  // Add scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper function to determine if a link is active
  const isActiveLink = (path: string) => {
    return pathname === path;
  };

  // Helper function to get link classes
  const getLinkClasses = (path: string) => {
    const isActive = isActiveLink(path);

    // Regular navigation links
    if (isHomePage || isMenuPage || isAboutPage || isContactPage) {
      if (!scrolled) {
        return `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-md ${
          isActive
            ? "bg-amber-600 text-white drop-shadow-lg"
            : "text-black hover:text-amber-600 hover:bg-amber-50 bg-white/20"
        }`;
      }
    }
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <nav className="p-6 absolute top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className={`text-3xl font-bold transition-all duration-300 hover:scale-110`}
            ></Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <Link href="/" className={getLinkClasses("/")}>
                {t("nav.home")}
              </Link>
              <Link href="/menu" className={getLinkClasses("/menu")}>
                {t("nav.menu")}
              </Link>
              <Link href="/about" className={getLinkClasses("/about")}>
                {t("nav.about")}
              </Link>
              <Link href="/contact" className={getLinkClasses("/contact")}>
                {t("nav.contact")}
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <div
                className={`${isHomePage && !scrolled ? "drop-shadow-lg" : ""}`}
              >
                <LanguageToggle />
              </div>
            </div>
            <MobileMenu />
          </div>
        </div>
      </nav>
    </div>
  );
}
