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
  const getLinkClasses = (path: string, isContactButton = false) => {
    const isActive = isActiveLink(path);

    if (isContactButton) {
      // Contact button styling (keeping the original CTA style)
      return `px-4 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg ${
        isHomePage
          ? scrolled
            ? "bg-amber-600 text-white hover:bg-amber-700"
            : "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 drop-shadow-sm"
          : "bg-amber-600 text-white hover:bg-amber-700"
      }`;
    }

    // Regular navigation links
    if (isHomePage) {
      if (scrolled) {
        // Home page after scroll
        return `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-md ${
          isActive
            ? "bg-amber-600 text-white"
            : "text-gray-700 hover:text-amber-600 hover:bg-amber-50"
        }`;
      } else {
        // Home page before scroll (transparent navbar)
        return `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-md ${
          isActive
            ? "bg-white/30 backdrop-blur-sm text-white border border-white/50"
            : "text-white hover:text-amber-200 hover:bg-white/20 backdrop-blur-sm drop-shadow-sm"
        }`;
      }
    } else {
      // Other pages (solid navbar)
      return `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-md ${
        isActive
          ? "bg-amber-600 text-white"
          : "text-gray-700 hover:text-amber-600 hover:bg-amber-50"
      }`;
    }
  };

  // For non-home pages, always use solid white background
  const navClass = isHomePage
    ? `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`
    : "bg-white shadow-lg sticky top-0 z-50";

  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className={`text-3xl font-bold transition-all duration-300 hover:scale-110 ${
                isHomePage
                  ? scrolled
                    ? "text-amber-600"
                    : "text-white drop-shadow-lg"
                  : "text-amber-600"
              }`}
            >
              沖縄カフェ
            </Link>
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
              <Link
                href="/contact"
                className={getLinkClasses("/contact", false)}
              >
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
      </div>
    </nav>
  );
}
