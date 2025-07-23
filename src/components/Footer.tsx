"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/wood.jpeg"
          alt="Dark wooden planks texture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/45 to-black/25"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-amber-400 mb-4 drop-shadow-lg">
              {t("hero.title")}
            </h3>
            <p className="text-white text-sm leading-relaxed mb-4 drop-shadow-md">
              {t("hero.description")}
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-amber-400 transition-colors"
              >
                <span className="text-xl">📘</span>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-amber-400 transition-colors"
              >
                <span className="text-xl">📷</span>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-amber-400 transition-colors"
              >
                <span className="text-xl">🐦</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-400 drop-shadow-lg">
              {t("nav.menu")}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-white hover:text-amber-300 transition-colors text-sm drop-shadow-md"
                >
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="text-white hover:text-amber-300 transition-colors text-sm drop-shadow-md"
                >
                  {t("nav.menu")}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white hover:text-amber-300 transition-colors text-sm drop-shadow-md"
                >
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white hover:text-amber-300 transition-colors text-sm drop-shadow-md"
                >
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Store Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-400 drop-shadow-lg">
              {t("contact.title")}
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="text-white drop-shadow-md">
                <span className="block text-white font-medium drop-shadow-md">
                  {t("contact.address")}
                </span>
                {t("contact.address_text")}
              </li>
              <li className="text-white drop-shadow-md">
                <span className="block text-white font-medium drop-shadow-md">
                  {t("contact.phone")}
                </span>
                {t("contact.phone_text")}
              </li>
              <li className="text-white drop-shadow-md">
                <span className="block text-white font-medium drop-shadow-md">
                  {t("contact.hours")}
                </span>
                {t("contact.hours_text")}
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-400 drop-shadow-lg">
              {t("newsletter.title")}
            </h4>
            <p className="text-white text-sm mb-4 drop-shadow-md">
              {t("newsletter.description")}
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder={t("newsletter.placeholder")}
                className="flex-1 px-3 py-2 bg-gray-800 text-white text-sm border border-gray-700 rounded-l-md focus:outline-none focus:border-amber-400"
              />
              <button className="px-4 py-2 bg-amber-600 text-white text-sm rounded-r-md hover:bg-amber-700 transition-colors">
                {t("newsletter.subscribe")}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/70 text-sm mb-4 md:mb-0">
              © 2024 沖縄カフェ (Okinawa Cafe).{" "}
              {t("language") === "ja"
                ? "すべての権利を保有します。"
                : "All rights reserved."}
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-white/70 hover:text-white text-sm transition-colors"
              >
                {t("footer.privacy")}
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white text-sm transition-colors"
              >
                {t("footer.terms")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
